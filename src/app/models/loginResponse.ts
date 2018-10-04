export class LoginResponse{
    succeded: boolean = true;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus:any;
    meta: any;
    //{"sessionId":"Lxyz6u7e0HR0pqDCdMBt","userName":"admin","displayName":"admin","responseStatus":{},"meta":{"timeout":"12000000"}}
}