import { Global, Module } from '@nestjs/common'

@Global()
@Module({
	imports    : [],
	controllers: [TodoModule],
	providers  : [],
	exports    : []
})
export class TodoModule {
}
