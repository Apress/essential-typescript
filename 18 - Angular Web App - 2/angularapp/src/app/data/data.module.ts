import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DataSource, DataSourceImpl } from './dataSource';
import { RemoteDataSource } from './remoteDataSource';

@NgModule({
  imports: [HttpClientModule],
  providers: [DataSource, { provide: DataSourceImpl, useClass: RemoteDataSource}]
})
export class DataModelModule { }
