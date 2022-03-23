import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    
    const{user_id} = request.headers;
    
    const user = this.showUserProfileUseCase.execute({user_id : user_id as string});

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
