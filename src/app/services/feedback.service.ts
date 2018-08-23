import { Injectable } from "../../../node_modules/@angular/core";
import { Restangular } from "../../../node_modules/ngx-restangular";
import { Feedback } from "../shared/feedback";
import { Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class FeedbackService {
    constructor(private restangular: Restangular) { }

    submitFeedback(feedback: Feedback): Observable<Feedback> {
      return this.restangular.all("feedback").post(feedback);
  }
}
