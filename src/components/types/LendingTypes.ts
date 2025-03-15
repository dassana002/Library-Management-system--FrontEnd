import { Books } from "../book/Book";
import { Members } from "../member/Member";

export interface Lendings {
    lendingId: string;
    book: Books | null;
    member: Members | null;
    isActive: boolean;
    overDue: number;
    fineAmount: number;
}
