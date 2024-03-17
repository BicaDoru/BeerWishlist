export class Beer {
    private id: number;
    private name: string;
    private manufacturer: string;
    private type: string;
    private pictureURL: string;

    constructor(id: number, name: string, manufacturer: string, type: string, pictureURL: string) {
        this.id = id;
        this.name = name;
        this.manufacturer = manufacturer;
        this.type = type
        this.pictureURL = pictureURL;
    }

    public getID(): number {
        return this.id;
    }

    public SetID(value: number) {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getManufacturer(): string {
        return this.manufacturer;
    }

    public setManufacturer(value: string) {
        this.manufacturer = value;
    }

    public getType(): string {
        return this.type;
    }

    public setType(value: string) {
        this.type = value;
    }

    public getURL(): string {
        return this.pictureURL;
    }

    public setURL(value: string) {
        this.pictureURL = value;
    }
}
