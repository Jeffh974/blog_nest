import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'

@Controller('todo')
export class TodoController {

	@Get('v2')
	getTodosV2(
		@Req() req: Request,
		@Res() res: Response
	) {
		console.log('Get todos list')
		res.json({
			contenu: `TESSSSSSST`
		})
	}

	@Get()
	getTodos() {
		console.log('Get todos list')
		return 'Listing Todo'
	}

	@Post()
	addTodo() {
		console.log('Add todo')
		return 'Add Todo'
	}

	@Delete()
	deleteTodo() {
		console.log('Suppr todo')
		return 'Delete Todo'
	}

	@Put()
	modifyTodo() {
		console.log('modify')
		return 'Update Todo'
	}
}
