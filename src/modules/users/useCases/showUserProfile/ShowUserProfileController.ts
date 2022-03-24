import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  private showUserProfileUseCase: ShowUserProfileUseCase;

  constructor(showUserProfileUseCase: ShowUserProfileUseCase) {
    this.showUserProfileUseCase = showUserProfileUseCase;
  }

  handle(request: Request, response: Response): Response {

    // #swagger.tags = ['Users']

    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({
        user_id: user_id as string,
      });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { ShowUserProfileController };
