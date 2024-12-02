import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('email');
  const router = inject(Router);
  if(user !== null){
    return true;
  }
  else{
    router.navigateByUrl('');
    return false;
  }

};
