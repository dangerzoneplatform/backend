import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Response as ExpressResponse } from "express";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Response<T> {
  data: T;
  info: {
    errors: any;
    status_code: number;
  };
  timestamp: string;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        info: {
          errors:
            context.switchToHttp().getResponse<ExpressResponse>().errored || [],
          status_code: context.switchToHttp().getResponse<ExpressResponse>()
            .statusCode,
        },
        timestamp: new Date().toISOString(),
        method: context.switchToHttp().getRequest().method,
      }))
    );
  }
}
