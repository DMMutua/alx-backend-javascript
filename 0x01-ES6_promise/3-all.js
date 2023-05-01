import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
