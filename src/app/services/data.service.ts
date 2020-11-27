export class TheBiggestObjectDataService
{
    private data: string[] = [
        "The bigest auto",
        "The bigest plane",
        "The bigest ship"
    ]

    public get() : string[] {
        return this.data;
    }

    // public set(obj: string) {
    //     this.data.push(obj);
    // }
}