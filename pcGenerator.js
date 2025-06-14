function generateRandomPC () {
const osArray = ["Linux", "Windows 10", "Windows 11"];
const processors = [
    {
        brand: "Intel",
        name: "Core i9 13900K",
        cores: 24,
        price: 589
    },
    {
        brand: "Intel",
        name: "Core i9 13900KF",
        cores: 24,
        price: 564
    },
    {
        brand: "Intel",
        name: "Core i7 13700K",
        cores: 16,
        price: 409
    },
];

const graphicsCards = [
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4080",
        memory: 16,
        price: 1199
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4090",
        memory: 24,
        price: 1599
    },
    {
        brand: "Nvidia",
        name: "NVIDIA GeForce RTX 4070",
        memory: 24,
        price: 599
    }
];

const memories = [
    {
        brand: "Corsair",
        name: "VENGEANCE® RGB",
        size: 32,
        price: 114.99
    },
    {
        brand: "Corsair",
        name: "DOMINATOR® PLATINUM RGB",
        size: 32,
        price: 184.99
    }
];

const storages = [
    {
        brand: "Samsung",
        name: "860 EVO SATA 2.5 SSD",
        size: 500,
        price: 89.99,
    },
    {
        brand: "Samsung",
        name: "990 PRO PCIe®4.0 NVMe™ SSD",
        size: 1000,
        price: 99.99,
    }, 
];

let pc = "";
for (let i = 0; i > 0; i++) {
    const randomPC = Math.floor(Math.random() + osArray);
    pc += processors[randomPC];
}
}
console.log(pc);