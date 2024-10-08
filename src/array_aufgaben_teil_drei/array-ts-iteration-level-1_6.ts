console.log("neco");
let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];
console.log(album);
const albumTransformed: string[] = album.map((name: string): string =>{
    const nameLowerCase = name.toLowerCase();
    console.log(nameLowerCase);
    if (nameLowerCase.includes('.')){
        return nameLowerCase.split('.')[0]
    } else {
        return "invalid"
    }
})
console.log(albumTransformed);
