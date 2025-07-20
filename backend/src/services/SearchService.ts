import { SearchData, SearchFilters } from '../types/Search';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { PrismaClient } from '../generated/prisma/client';

export class SearchService
{

	private prisma: PrismaClient;

	constructor()
	{
		this.prisma = new PrismaClient();
	}

	public async startProcess(filters: SearchFilters) : Promise<SearchData[]>
	{

		const users = await this.searchUsers(filters);
		const groups = await this.searchGroups(filters);

		return [...users, ...groups];


	}

	private async searchUsers(filters: SearchFilters) : Promise<SearchData[]>
	{
		const users = await this.prisma.users.findMany({
			where:{
				name: filters.name
			},
			select:{
				name: true,
				id: true
			}
		});

		const bakedUsers = this.structData({searchDataDb: users, type: 'user'});
		return bakedUsers;

	}

	private async searchGroups(filters: SearchFilters) : Promise<SearchData[]>
	{
		const groups = await this.prisma.chats.findMany({
			where:{
				name: filters.name
			},
			select:{
				id: true,
				name: true
			}
		});

		const bakedGroups = this.structData({searchDataDb: groups, type: 'groups'});
		return bakedGroups;
	}

	private structData(searchData: any): SearchData[]
	{
		let result: SearchData[] = [];

		searchData.searchDataDb.forEach((data: any) => {
			result.push({id: data.id, name: data.name, type: searchData.type});
		})
	    
	    return result;
	}
	
}