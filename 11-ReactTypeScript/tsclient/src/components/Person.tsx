interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: string;
}

export enum Country {
    Brazil = "Brazil",
    France = "France",
    Canada = "Canada",
}

export const Person = (props: Props) => {
    return (
        <div>
            <div>Name: {props.name}</div>
            <div>Email: {props.email}</div>
            <div>Age: {props.age}</div>
            <div>{props.name} is {props.isMarried? "Married." : "not Married."}</div>
            Here are his/her friends:
            {props.friends.map((friend: string) => {
                return (
                    <h1>{friend}</h1>
                )
            })}
            {props.country && <div> Born from {props.country}</div>}
        </div>
    )
}