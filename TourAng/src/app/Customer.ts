export interface Customer {
    customerID: number;
    customerName: {
        fname: string;
        lname: string
    };
    gender: string;
    password: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    address: {
        doorno: number;
        street: string;
        city: string;
        pincode: number
    }
}