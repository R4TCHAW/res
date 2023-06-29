const url = "https://api.thegraph.com/subgraphs/name/aavegotchi/gotchiverse-matic";

const parcelHashesf1 = [
  "kinship-farm-hub",
];

const parcelHashes3f = [
  "farmed-points-at",
  "there-harvest-include",
  "reading-updates-experiences",
  "reasonable-linked-into",
  "ended-among-premises",
  "please-three-badge",
  "third-storage-paper",
  "why-summoned-order",
];

const parcelHashes54 = [
  "fortunes-did-introduction",
  "which-class-top",
  "store-staking-even"
];

const parcelHashes = [
  ...parcelHashes54,
  ...parcelHashes3f,
  ...parcelHashesf1,
  "fortunes-did-introduction",
  "there-harvest-include",
  "third-storage-paper",
  "description-name-traded",
  "nfts-amount-but",
  "look-auction-special",
  "pairs-powerful-ravaged",
  "harvest-size-share",
  "affect-next-down",
  "collect-store-gotchi",
  "times-fallen-dungeons",
  "eventually-forth-ever",
  "aggressive-socializing-incentive",
  "ritual-enter-instead",
  "socializing-participating-method",
  "aave-turned-become",
  "haunts-reservoirs-inside",
  "presale-fallen-kin",
  "go-rewards-appetite",
  "survive-limited-regions",
  "craft-ravaged-ticket",
  "timeline-reasonably-defensive",
  "latest-size-details",
  "existed-earn-appetite",
  "small-chainlink-large",
  "it-eyes-closer",
  "liquidated-main-fallen",
  "arrive-holding-that",
  "aave-market-prevent",
  "sales-reaching-you",
  "phantastic-vrf-holding",
  "insignia-hole-full",
  "protects-that-ether",
  "aarena-important-dapps",
  "against-select-certain",
  "paper-black-thousands",
  "ghst-amounts-farmer",
  "generating-ghst-dapps",
  "point-released-nurture",
  "cap-include-over",
  "raffles-ended-cap",
  "staked-fomo-loose",
  "store-staking-even"
];

const owners = [
  "0x17a3831B39cc557296d0C322f9C2D42C0b3A8F3f",
  "0xd757f002d43DcB8dB9A4E43A8350Aa8cCcdC4e4f",
  "0x4d6e3Ff00F77F6e746eBF7f6827800eB99e36910",
  "0xC68C8452be34032ab999787796AE0fAaf071e054",
  "0xbb73548A0e6F839fb58e9D59969Ba6AEdEcDF5f1"

];



const query = `
  query {
    parcels(
      first: 1000,
      orderBy: lastClaimedAlchemica,
      orderDirection: asc,
      where: {
        tokenId_gt: 0,
        owner_in: ${JSON.stringify(owners)},
        parcelHash_in: ${JSON.stringify(parcelHashes)}
      }
    ) {
      id
      parcelHash
      lastClaimedAlchemica
      parcelId
      owner
    }
  }
`;



fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
})
  .then((res) => res.json())
  .then((data) => {
    const parcels = data.data.parcels;

    const table = document.createElement("table");

    const headers = ["ID", "Parcel Hash", "Last Claimed Alchemica", "Parcel ID"];
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    parcels.forEach((parcel, index) => {
      const row = document.createElement("tr");
      const parcelIdCell = document.createElement("td");
      const link = document.createElement("a");
      

let ratchawGotchi = "14054";
let saadGotchi = "21479";
  if (parcel.owner.toLowerCase() === "0x17a3831b39cc557296d0c322f9c2d42c0b3a8f3f") {
    ratchawGotchi = "8015";
    saadGotchi = "5688";
  } else if  (parcel.owner.toLowerCase() === "0xd757f002d43dcb8db9a4e43a8350aa8cccdc4e4f") {
    ratchawGotchi = "18966";
    saadGotchi = "6576";
  } else if  (parcel.owner.toLowerCase() === "0xc68c8452be34032ab999787796ae0faaf071e054") {
    ratchawGotchi = "14520";
    saadGotchi = "21180";
  } else if  (parcel.owner.toLowerCase() === "0xbb73548A0e6F839fb58e9D59969Ba6AEdEcDF5f1") {
    ratchawGotchi = "14054";
    saadGotchi = "21479";
  };
link.href = `https://verse.aavegotchi.com/?spawnId=${parcel.parcelId}&gotchi=${ratchawGotchi}`;
      



      

link.textContent = parcel.parcelId;
parcelIdCell.appendChild(link);
      row.appendChild(parcelIdCell);  

            const parcelIdCelll = document.createElement("td");
      const linkk = document.createElement("a");
linkk.href = `https://verse.aavegotchi.com/?spawnId=${parcel.parcelId}&gotchi=${saadGotchi}`;
linkk.textContent = parcel.parcelId;
parcelIdCelll.appendChild(linkk);
 
      row.appendChild(parcelIdCelll);

      
      const idCell = document.createElement("td");
      idCell.textContent = parcel.id;
      row.appendChild(idCell);

      const anchorTag = document.createElement("a");

      const parcelHashCell = document.createElement("td");
      parcelHashCell.textContent = parcel.parcelHash;
      row.appendChild(parcelHashCell);

      const lastClaimedAlchemicaCell = document.createElement("td");
      const date = new Date(parcel.lastClaimedAlchemica * 1000);
      date.setHours(date.getHours() + 8); // Add 8 hours to the date
      const timeString = date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      });
      lastClaimedAlchemicaCell.textContent = timeString;
      if (new Date() > date) {
        lastClaimedAlchemicaCell.style.color = "yellow";
      }
      row.appendChild(lastClaimedAlchemicaCell);



      // Set background color based on index
      if (index % 2 === 0) {
        row.style.backgroundColor = "green";
      } else {
        row.style.backgroundColor = "green";
      }



      table.appendChild(row);
// changing color depend on the owner
 if (parcelHashes3f.includes(parcel.parcelHash)) {
  parcelHashCell.style.color = "blue";
}
      if (parcelHashesf1.includes(parcel.parcelHash)) {
  parcelHashCell.style.color = "orange";
}
      if (parcelHashes54.includes(parcel.parcelHash)) {
  parcelHashCell.style.color = "DodgerBlue";
}

      if (["why-summoned-order"].includes(parcel.parcelHash)) {
        parcelHashCell.style.color = "white";
      }

      if (["craft-ravaged-ticket", "latest-size-details", "it-eyes-closer", "harvest-size-share", "store-staking-even", "affect-next-down", "pairs-powerful-ravaged", "timeline-reasonably-defensive", "haunts-reservoirs-inside"].includes(parcel.parcelHash)) {
        idCell.style.color = "red";
      }

      if (["timeline-reasonably-defensive",
          "presale-fallen-kin",
          "haunts-reservoirs-inside",
          "it-eyes-closer",
          "aave-turned-become",
          "socializing-participating-method",
          "craft-ravaged-ticket",
          "times-fallen-dungeons",
          "small-chainlink-large",
          "collect-store-gotchi",
          "survive-limited-regions",
          "insignia-hole-full",
          "aggressive-socializing-incentive",
          "sales-reaching-you",
          "aarena-important-dapps",
          "aave-market-prevent",
          "liquidated-main-fallen",
          "go-rewards-appetite",
          "protects-that-ether",
          "ritual-enter-instead",
          "generating-ghst-dapps",
          "paper-black-thousands",
          "pairs-powerful-ravaged",
          "affect-next-down",
          "harvest-size-share",
          "existed-earn-appetite",
          "latest-size-details",
          "existed-earn-appetite",
          "eventually-forth-ever"
      ].includes(parcel.parcelHash)) {
        parcelHashCell.style.color = "purple";
      }
    });

    document.body.appendChild(table);
  })
  .catch((err) => console.error(err));
