import { RestController } from './RestController';
import { Request, Response } from 'express';
import { SearchData, SearchFilters } from '../types/Search';
import { Error } from '../types/Error';
import { Container } from 'inversify';
import { SearchService } from '../services/SearchService';

export class SearchController extends RestController
{
	async handleRequest(req: Request, res: Response) : Promise<void>
	{
		const filters: SearchFilters = this.getParams(req);

		if(!this.validation(filters))
		{
			this.jsonResponse(res, 200, {message: "No valid data was given!", success: false});
			return;
		}
		
		const searchResult = await new SearchService().startProcess(filters);

		this.jsonResponse(res, 200, searchResult);
	}

	validation(params: SearchFilters) : boolean
	{
		if(!params.name){
			return false;
		}

		return true;
	}

	private moderation(data: any): boolean
	{
		if('errorMessage' in data)
		{
			return false;
		}

		return true;
	}

	getParams(req: Request) : SearchFilters
	{
		const data: SearchFilters = {
			name: req.query.name as string
		}
		return data;

	}
}
