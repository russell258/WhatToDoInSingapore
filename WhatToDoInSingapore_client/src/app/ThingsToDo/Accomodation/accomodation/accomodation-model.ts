export interface AccomodationModel{
    status: Status;
    data: (Accomodation)[] | null; 
}

export interface Status{
    code: number;
    name: string;
    message: string;
}

export interface Accomodation{
    uuid: string;
    name: string;
    type: string;
    tags: (string)[];
    description: string;
    body: string;
    rating: number;
    location: {
        latitude: number;
        longitude: number
    };
    address: {
        block: string;
        streetName: string;
        floorNumber: string;
        unitNumber: string;
        buildingName: string;
        postalCode: string
    };
    thumbnails: [];
    images?: Image[];
    videos: [];
    documents:[];
    source: string;
    metadata:{
        updatedDate: Date;
        createdDate: Date;
    };
    categoryDescription: string;
    dataset: string;
    leadInRoomRates: string;
    reviews: (Review)[];
    companyDisplayName: string;
    supportedLanguage:(string)[];
    leadInRoomSize: string;
    noOfRooms: number;
    amenities: string;
    contact: {
        primaryContactNo: string;
        secondaryContactNo?: string;
    };
    nearestMRTStation: string;
    officialWebsite: string;
    officialEmail: string;
    staYear: string;
    group: string;
    temporarilyClosed: string;
    links: (Link)[];
}

export interface Review{
    authorName: string;
    authorURL: string;
    language: string;
    profilePhoto: string;
    rating: number;
    text: string;
    time: Date;
}

export interface Link{
    href: string;
    rel: string;
    method: string;
}

export interface Image{
    uuid: string;
    url: string;
    libraryUuid: string;
    primaryFileMediumUuid: string;
}