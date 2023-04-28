/*
 * Creating a New Interface for 'Teacher' Object
 * @return {null} does not return anything.
 */
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

class DirectorImpl implements Directors {
  constructor(
    public firstName: string,
    public lastName: string,
    public readonly fullTimeEmployee: boolean,
    public readonly location: string,
    public numberOfReports: number,
    public yearsOfExperience?: number,
    ...args: any[]
  ) {
    // add any additional attributes to the object
    args.forEach((arg) => {
      Object.keys(arg).forEach((key) => {
        this[key] = arg[key];
      });
    });
  }
}
