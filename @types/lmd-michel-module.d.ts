declare interface ILogger
{
    log(message: string): void;
    error(message: string): void;
}

declare interface IMessenger {
    subscribe(eventName: string, callback: CallableFunction): void;
    unsubscribe(eventName: string): void;
    emit(eventName: string, data: any | null): void;
}

declare interface IDatabase {
    load(): Promise<any>;
    save(data: any): Promise<void>;
}

//#region WebRouter
declare interface IWebRouter
{
    addRoute(url: string, method: string, callback: HttpRouteHandler): void;
    cancelRoute(url: string, method: string): void;
    getWebserverInformation(): WebserverInformation;
}

declare type HttpRouteHandler = (data: RequestData) => Promise<ResponseData>;

declare type UploadOptions = {
    size?: string;
    extnames?: string[];
}

declare type UploadedFile = {
    size?: number;
    extname?: string;
    type?: string;
    tmpPath?: string;
    clientName?: string;
    fieldName?: string;
    isValid: boolean;
}

declare type RequestData = {
    params: Record<string, any>;
    inputs: Record<string, any>;
    files: (fieldName: string, options: UploadOptions | undefined) => UploadedFile[];
}

declare type ResponseData = {
    statusCode: number;
    body: any
    contentType: string;
}

declare type WebserverInformation = {
    uri: string;
    port: number;
}

//#endregion

declare type ModuleInformation = {
    name: string;
    version: string;
    uid: string;
}

declare type Services = {
    database: IDatabase;
    logger: ILogger;
    messenger: IMessenger;
    webRouter: IWebRouter;
}

declare interface IModule
{
    _information: ModuleInformation;
    _services: Services;

    start(): Promise<void>
    restart(): Promise<void>
    stop(): Promise<void>
}