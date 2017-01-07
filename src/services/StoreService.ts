import {Injectable, Inject, forwardRef} from "@angular/core";
import {CommBroker} from "./CommBroker";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../store/application-state";
import {AppdbAction} from "../store/actions/app-db-actions";
import {RedPepperService} from "./redpepper.service";

@Injectable()
export class StoreService {
    constructor(@Inject(forwardRef(() => Store)) private appStore: Store<ApplicationState>,
                @Inject(forwardRef(() => AppdbAction)) private appdbAction: AppdbAction,
                @Inject(forwardRef(() => CommBroker)) private commBroker: CommBroker,
                @Inject(forwardRef(() => RedPepperService)) private redPepperService: RedPepperService,
                @Inject('OFFLINE_ENV') private offlineEnv) {

        this.appStore.dispatch(this.appdbAction.initAppDb());
        console.log(this.redPepperService);
    }

    private singleton: boolean = false;

    public loadServices() {
        if (this.singleton) return;
        this.singleton = true;
        console.log('loaded network services...');
    }
}
