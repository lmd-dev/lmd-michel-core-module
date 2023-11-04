export default class Module implements IModule
{
    //Information about the module (imported from manifest)
    _information: ModuleInformation;

    //Available services
    _services: Services;

    constructor(information: ModuleInformation, services: Services)
    {
        this._information = information;
        this._services = services;
    }

    async start(): Promise<void>
    {
        // What to do when module is started
    }

    async restart(): Promise<void>
    {
        // What to do when module is restarted
    }

    async stop(): Promise<void>
    {
        // What to do when module is stopped
    }
}