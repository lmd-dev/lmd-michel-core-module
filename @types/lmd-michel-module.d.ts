declare interface IMessenger {
    addEventListener(eventName: string, callback: CallableFunction): void;
    emit(eventName: string, data: any | null): void;
}

declare type ModuleInformation = {
    name: string;
    version: string;
}

declare type Services = {
    messenger: IMessenger;
}

declare interface IModule
{
    _information: ModuleInformation;
    _services: Services;

    start(): Promise<void>

    restart(): Promise<void>
}