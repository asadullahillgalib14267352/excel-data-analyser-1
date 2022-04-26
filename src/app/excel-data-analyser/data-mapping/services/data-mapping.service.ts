import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import IMapper from "../domain/data-mapping.domain";
import IMapperName from "../domain/mapper-name.domain";
import * as endpoints from "./data-mapping.endpoints";

@Injectable()
export class DataMappingService {


  constructor(private http: HttpClient) {

  }

  public getTableList(): Observable<string[]> {
    return this.http.get<string[]>(endpoints.table_url);
  }

  public getMapperNames(queryParam): Observable<IMapperName[]> {
    const httpParams = new HttpParams({
      fromObject: queryParam
    });
    return this.http.get<IMapperName[]>(endpoints.mapper_name_url, { params: httpParams });;
  }

  public saveMapping(mapper): Observable<IMapper> {
    return this.http.post<IMapper>(endpoints.save_mapping_url, mapper);
  }

  public getExcelDataWithMapping(dataMap): Observable<any> {
    return this.http.post<IMapper>(endpoints.get_data_with_mapping, dataMap);
  }

  public getExcelHeaders(queryParam): Observable<string[]> {
    const httpParams = new HttpParams({
      fromObject: queryParam
    });
    return this.http.get<string[]>(endpoints.get_excel_headers, { params: httpParams });;
  }

  public getTableColumns(queryParam): Observable<string[]> {
    const httpParams = new HttpParams({
      fromObject: queryParam
    });
    return this.http.get<string[]>(endpoints.column_list_url, { params: httpParams });;
  }

}
