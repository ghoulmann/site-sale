const LOT_INFO = {
  "headline": "Tech & IT liquidation lot \u2014 laptops, networking, home lab gear, components (must take all)",
  "condition_blanket": "Not bench tested; everything worked before being packed and moved a few times. Cleaned and structurally sound. Expect minor cosmetic wear on legacy laptop chassis.",
  "terms": [
    "All-or-nothing: buyer must take the entire lot in one trip",
    "Bring a large vehicle (SUV/van/truck) and bins/crates",
    "Seller cannot help physically with moving or loading",
    "Cash or agreed digital payment (Zelle/Venmo) upon inspection"
  ]
};
const LOT_ITEMS = [
  {
    "id": "toshiba_satellite_s55t_b5273nr",
    "title": "Toshiba Satellite S55t-B5273NR",
    "category": "Laptop",
    "quantity": 1,
    "condition": "Factory reconditioned (intact Micro Center clearance sticker); worked before packing \u2014 keyboard responsive and display had zero dead pixels in last use; not re-tested since packing",
    "info_url": "https://support.dynabook.com/supportmodel/PSPRDU-008004",
    "books": [],
    "specs": [
      {
        "key": "CPU",
        "value": "Intel Core i7-4710HQ (Haswell quad-core, 2.5 GHz base, up to 3.5 GHz Turbo)"
      },
      {
        "key": "RAM",
        "value": "16 GB DDR3L 1.35V low-voltage, dual-channel \u2014 upgraded to platform maximum (requires 1.35V DDR3L; standard 1.5V DDR3 will fail to POST)"
      },
      {
        "key": "Storage",
        "value": "1 TB 5400 RPM SATA HDD"
      },
      {
        "key": "Display",
        "value": "15.6-inch WLED-backlit touchscreen (1366x768)"
      },
      {
        "key": "OS",
        "value": "Windows 8.1 (64-bit)"
      },
      {
        "key": "Graphics",
        "value": "Intel HD Graphics 4600 integrated"
      },
      {
        "key": "Wireless",
        "value": "Dual-Band Wireless-AC 3160 + Bluetooth 4.0"
      },
      {
        "key": "Ports",
        "value": "HDMI, USB 3.0, USB 2.0, Gigabit Ethernet, SD card reader"
      },
      {
        "key": "Audio",
        "value": "Harman Kardon stereo speakers with DTS Sound"
      },
      {
        "key": "Keyboard",
        "value": "LED-backlit keyboard"
      },
      {
        "key": "Webcam",
        "value": "HD webcam"
      },
      {
        "key": "Linux HCL",
        "value": "Excellent / out-of-the-box (mature Haswell mainline support; X11 and Wayland fine)"
      },
      {
        "key": "Release",
        "value": "2014; S55t-B series originally ~$780-900; this unit sold factory-reconditioned"
      },
      {
        "key": "Power adapter",
        "value": "Unknown \u2014 Could not be verified. Needs a ~90W Toshiba 19V/4.74A barrel adapter; the Dell 65W (7.4x5.0mm) and HP 45W (4.5mm) adapters in this lot do not fit"
      }
    ],
    "photos": [
      {
        "src": "img/toshiba_satellite_s55t_b5273nr/IMG_2853.jpg",
        "alt": "Toshiba Satellite S55t-B5273NR \u2014 photo 1"
      },
      {
        "src": "img/toshiba_satellite_s55t_b5273nr/IMG_2854.jpg",
        "alt": "Toshiba Satellite S55t-B5273NR \u2014 photo 2"
      },
      {
        "src": "img/toshiba_satellite_s55t_b5273nr/IMG_2855.jpg",
        "alt": "Toshiba Satellite S55t-B5273NR \u2014 photo 3"
      },
      {
        "src": "img/toshiba_satellite_s55t_b5273nr/IMG_2856.jpg",
        "alt": "Toshiba Satellite S55t-B5273NR \u2014 photo 4"
      },
      {
        "src": "img/toshiba_satellite_s55t_b5273nr/01_underside.jpg",
        "alt": "Toshiba Satellite S55t-B5273NR \u2014 photo 5"
      }
    ]
  },
  {
    "id": "hp_pavilion_dv6_6000",
    "title": "HP Pavilion dv6-6c14nr (A6Y00UA#ABA)",
    "category": "Laptop",
    "quantity": 1,
    "condition": "Used; worked before packing; not bench tested; last used as Proxmox VE staging lab",
    "info_url": "https://www.bestbuy.com/site/hp-15-6-pavilion-notebook-4-gb-memory-500-gb-hard-drive-espresso-black/4852199.p?skuId=4852199",
    "books": [],
    "specs": [
      {
        "key": "CPU",
        "value": "Intel Core i5-2450M (Sandy Bridge, 2 cores / 4 threads, 2.5 GHz base, up to 3.1 GHz turbo, 3 MB L3, 35 W TDP, Intel HD Graphics 3000)"
      },
      {
        "key": "RAM",
        "value": "16 GB DDR3 dual-channel (upgraded; 2Rx8 modules \u2014 official HP manual claims 8GB ceiling but platform physically supports 16GB)"
      },
      {
        "key": "Display",
        "value": "15.6-inch HD (1366x768), likely BrightView LED"
      },
      {
        "key": "Storage",
        "value": "500 GB 5400 RPM SATA HDD (original factory configuration)"
      },
      {
        "key": "Identifying features",
        "value": "Full numeric keypad, illuminated trackpad border, silver mesh speaker bar"
      },
      {
        "key": "Linux HCL",
        "value": "Good \u2014 may need non-free firmware for Wi-Fi (Broadcom/Realtek mini-PCIe) and radeon/nouveau tweaks if hybrid graphics"
      },
      {
        "key": "Release",
        "value": "Early 2012 (dv6-6c00 series)"
      },
      {
        "key": "Part number",
        "value": "A6Y00UA#ABA"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Two HP power adapters included with the unit (dv6-6000 era uses the HP 7.4x5.0mm smart-pin type)"
      }
    ],
    "photos": []
  },
  {
    "id": "hp_chromebook_14_ak041dx",
    "title": "HP Chromebook 14-ak041dx",
    "category": "Chromebook",
    "quantity": 1,
    "condition": "Used; light scratches, typical cosmetic wear; ChromeOS auto-updates (AUE) have ended",
    "info_url": "https://us.amazon.com/HP-Chromebook-14-AK041DX-Celeron-2-16GHz/dp/B075833W9F",
    "books": [],
    "specs": [
      {
        "key": "Regulatory model number",
        "value": "TPN-Q167"
      },
      {
        "key": "Display",
        "value": "QHD+ touch; 14-inch HD (1366x768) anti-glare LED"
      },
      {
        "key": "CPU",
        "value": "Intel Celeron N3060 (2 cores, up to 2.48 GHz)"
      },
      {
        "key": "Graphics",
        "value": "Intel HD Graphics 400"
      },
      {
        "key": "RAM",
        "value": "4 GB DDR3L (soldered, not upgradeable)"
      },
      {
        "key": "Storage",
        "value": "32 GB eMMC"
      },
      {
        "key": "OS",
        "value": "ChromeOS (AUE reached \u2014 no more official updates; candidates: ChromeOS Flex, GalliumOS, Linux)"
      },
      {
        "key": "Wireless",
        "value": "802.11ac Wi-Fi + Bluetooth 4.2"
      },
      {
        "key": "Webcam",
        "value": "HP TrueVision HD"
      },
      {
        "key": "Ports",
        "value": "2x USB 3.0, 1x USB 2.0, HDMI, microSD, headphone/mic combo"
      },
      {
        "key": "Battery",
        "value": "3-cell lithium-ion (replaceable)"
      },
      {
        "key": "Release",
        "value": "2016; original retail ~$200"
      },
      {
        "key": "Part number",
        "value": "1KD89UA#ABA"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 HP 45W Smart AC blue-tip adapter (19.5V/2.31A, 4.5x3.0mm) \u2014 confirmed the correct charger for this model"
      }
    ],
    "photos": [
      {
        "src": "img/hp_chromebook_14_ak041dx/IMG_2882.jpg",
        "alt": "HP Chromebook 14-ak041dx \u2014 photo 1"
      },
      {
        "src": "img/hp_chromebook_14_ak041dx/IMG_2883.jpg",
        "alt": "HP Chromebook 14-ak041dx \u2014 photo 2"
      },
      {
        "src": "img/hp_chromebook_14_ak041dx/IMG_2884.jpg",
        "alt": "HP Chromebook 14-ak041dx \u2014 photo 3"
      }
    ]
  },
  {
    "id": "dell_xps_13_9350_developer_edition",
    "title": "Dell XPS 13 (9350) Developer Edition",
    "category": "Laptop",
    "quantity": 1,
    "condition": "Used; battery not functional \u2014 OEM replacment 56WHr integrated battery is still installed but the laptop must stay plugged into the included AC adapter to operate (prime candidate for a battery replacement). No OS installed: the 512GB NVMe drive has been securely wiped and is ready for a fresh install of Linux, Windows, or your preferred OS. Great compact machine for parts, a project, or a budget setup if kept plugged in.",
    "info_url": "",
    "books": [],
    "specs": [
      {
        "key": "CPU",
        "value": "6th Generation Intel Core i7 (Skylake)"
      },
      {
        "key": "RAM",
        "value": "16 GB LPDDR3 (integrated/soldered \u2014 not upgradeable)"
      },
      {
        "key": "Storage",
        "value": "512 GB PCIe NVMe SSD (securely wiped, no OS installed)"
      },
      {
        "key": "Graphics",
        "value": "Intel HD Graphics 540"
      },
      {
        "key": "Display",
        "value": "13.3-inch InfinityEdge (exact panel unverified \u2014 9350 shipped as FHD 1920x1080 non-touch or QHD+ 3200x1800 touch)"
      },
      {
        "key": "Battery",
        "value": "56WHr integrated (installed, not functional \u2014 unit runs on AC power only)"
      },
      {
        "key": "Edition",
        "value": "Developer Edition \u2014 shipped from Dell pre-loaded with Ubuntu (Project Sputnik program)"
      },
      {
        "key": "Notability",
        "value": "The XPS 13 Developer Edition was famously Linus Torvalds' pick for his personal programming laptop (ZDNet, Fossbytes 2016)"
      },
      {
        "key": "Linux HCL",
        "value": "Excellent \u2014 sold by Dell with Ubuntu preinstalled; mature Skylake mainline support"
      },
      {
        "key": "Release",
        "value": "2015-2016 (Skylake generation)"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Original Dell 45W AC adapter included \u2014 required to operate the unit (battery non-functional)"
      }
    ],
    "photos": [
      {
        "src": "img/dell_xps_13_9350_developer_edition/xps13-developer-edition.jpg",
        "alt": "Dell XPS 13 (9350) Developer Edition \u2014 photo 1"
      }
    ]
  },
  {
    "id": "acer_chromebook_c740_c4pe",
    "title": "Acer Chromebook 11 C740-C4PE",
    "category": "Chromebook",
    "quantity": 1,
    "condition": "Unused (education-series ruggedized chassis)",
    "info_url": "https://chromebook.wiki/chromeosdevices/acerpeppy",
    "books": [],
    "specs": [
      {
        "key": "Overview",
        "value": "Ultra-rugged 11.6-inch cloud-computing platform and terminal base"
      },
      {
        "key": "Display",
        "value": "11.6-inch ComfyView HD"
      },
      {
        "key": "CPU",
        "value": "Intel Celeron 3205U (Broadwell, dual-core)"
      },
      {
        "key": "RAM",
        "value": "4 GB onboard DDR3L"
      },
      {
        "key": "Storage",
        "value": "16 GB internal SSD"
      },
      {
        "key": "Linux HCL",
        "value": "Popular among Chromebook modders and Linux enthusiasts. Excellent candidate for MrChromebox firmware and lightweight Linux distributions such as Debian, Mint, or Fedora"
      },
      {
        "key": "Release",
        "value": "2015; launch $259.99"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Acer 45W 19V/2.37A adapter (3.0x1.1mm tip) included with the unit"
      }
    ],
    "photos": []
  },
  {
    "id": "asus_chromebook_flip_c100pa",
    "title": "ASUS Chromebook Flip C100PA (10.1-inch convertible)",
    "category": "Chromebook",
    "quantity": 1,
    "condition": "Used; manufactured Jan 2017; battery health untested; ChromeOS auto-updates have ended for this 2017-era model \u2014 best repurposed as a lightweight Linux device",
    "info_url": "https://laptopmedia.com/series/asus-chromebook-flip-c100pa/",
    "books": [],
    "specs": [
      {
        "key": "Form factor",
        "value": "10.1-inch convertible touchscreen (360-degree hinge)"
      },
      {
        "key": "Release",
        "value": "2015; launched at $249-$279 depending on RAM configuration"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Original ASUS 12V/2A 24W adapter is present with the device"
      }
    ],
    "photos": [
      {
        "src": "img/asus_chromebook_flip_c100pa/IMG_2910.jpg",
        "alt": "ASUS Chromebook Flip C100PA (10.1-inch convertible) \u2014 photo 1"
      },
      {
        "src": "img/asus_chromebook_flip_c100pa/IMG_2907.jpg",
        "alt": "ASUS Chromebook Flip C100PA (10.1-inch convertible) \u2014 photo 2"
      },
      {
        "src": "img/asus_chromebook_flip_c100pa/IMG_2911.jpg",
        "alt": "ASUS Chromebook Flip C100PA (10.1-inch convertible) \u2014 photo 3"
      }
    ]
  },
  {
    "id": "lenovo_n22_touch_chromebook",
    "title": "Lenovo N22-20 Touch Chromebook (Model 80VH; MTM 80VH0001US)",
    "category": "Chromebook",
    "quantity": 1,
    "condition": "Used (education-series ruggedized chassis)",
    "info_url": "https://support.lenovo.com/rs/en/products/chromebook-laptops/lenovo-chromebooks-series/n22-20-chromebook/parts/pd104350-product-overview-lenovo-n22-20-touch-chromebook",
    "books": [],
    "specs": [
      {
        "key": "Display",
        "value": "11.6-inch HD touchscreen"
      },
      {
        "key": "CPU",
        "value": "Intel Celeron (Braswell era; this model typically ships with the N3060)"
      },
      {
        "key": "RAM",
        "value": "4 GB (typical for this model; unverified)"
      },
      {
        "key": "Storage",
        "value": "16 GB eMMC (typical for this model; unverified)"
      },
      {
        "key": "Manufacture date",
        "value": "2016/07/13 (Factory ID CS20, Lenovo PC HK Limited, Made in China)"
      },
      {
        "key": "Power input",
        "value": "20V / 2.25A (45W)"
      },
      {
        "key": "Wireless",
        "value": "Intel 7265 module (FCC ID PD97265NGU, IC 1000M-7265NG)"
      },
      {
        "key": "AUE note",
        "value": "2016-era education Chromebook \u2014 ChromeOS auto-updates have ended; same repurposing candidates as the other Chromebooks (x86, so Linux-flashable)"
      },
      {
        "key": "Release",
        "value": "2016"
      },
      {
        "key": "Part number",
        "value": "MTM 80VH0001US"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Genuine Lenovo 45W 20V/2.25A adapter photographed with the device (matches label input spec exactly)"
      }
    ],
    "photos": [
      {
        "src": "img/lenovo_n22_touch_chromebook/IMG_2913.jpg",
        "alt": "Lenovo N22-20 Touch Chromebook (Model 80VH; MTM 80VH0001US) \u2014 photo 1"
      },
      {
        "src": "img/lenovo_n22_touch_chromebook/IMG_2916.jpg",
        "alt": "Lenovo N22-20 Touch Chromebook (Model 80VH; MTM 80VH0001US) \u2014 photo 2"
      }
    ]
  },
  {
    "id": "netgear_nighthawk_rax43",
    "title": "NETGEAR Nighthawk RAX43 (AX5 5-Stream AX4200 WiFi 6 Router)",
    "category": "Networking",
    "quantity": 2,
    "condition": "Used; worked before packing; not bench tested; believed to be 2 units (count to be confirmed)",
    "info_url": "https://www.netgear.com/home/wifi/routers/rax43/",
    "books": [],
    "specs": [
      {
        "key": "Wi-Fi",
        "value": "WiFi 6 (802.11ax), AX4200 class, 5 streams; 2.4GHz 2x2 574 Mbps + 5GHz 3x3 3603 Mbps (160MHz support); OFDMA, MU-MIMO, Beamforming+, DFS"
      },
      {
        "key": "CPU",
        "value": "Triple-core ARM 1.5 GHz"
      },
      {
        "key": "Memory",
        "value": "512 MB RAM / 256 MB flash"
      },
      {
        "key": "Ports",
        "value": "5x Gigabit Ethernet (1 WAN + 4 LAN), 1x USB 3.0"
      },
      {
        "key": "Antennas",
        "value": "4 external"
      },
      {
        "key": "Dimensions",
        "value": "11.65 x 8.11 x 2.25 in, 1.25 lb, black"
      },
      {
        "key": "Coverage",
        "value": "2000-2500 sq ft, ~25 concurrent devices"
      },
      {
        "key": "Power adapter spec",
        "value": "12V 2.5A 30W barrel jack 5.5/2.1mm center-positive; alt P/Ns 332-10758-01, 2ABL030F1, 6GJ2117MA000C, 3894ED4E7737, 372-17479-01"
      },
      {
        "key": "Firmware",
        "value": "End of Service \u2014 final official firmware 1.0.17.144; no further security patches"
      },
      {
        "key": "OpenWrt",
        "value": "Compatible but limited (MediaTek MT7915; experimental, bootloader restrictions); DD-WRT: no official support"
      },
      {
        "key": "Release",
        "value": "March 2022, MSRP $199"
      },
      {
        "key": "Package contents",
        "value": "Router, 12V 2.5A adapter, 1m Cat5e cable, 4 antennas (attached), quick start guide, warranty docs"
      },
      {
        "key": "End-of-service note",
        "value": "NETGEAR has marked this model End of Service \u2014 no further firmware/security updates; plan to isolate it or replace it per NETGEAR guidance"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Own 12V 2.5A 30W adapter listed in package contents (not re-verified since packing)"
      }
    ],
    "photos": []
  },
  {
    "id": "buffalo_bs_gu2016",
    "title": "Buffalo Inc. BS-GU2016",
    "category": "Networking",
    "quantity": 1,
    "condition": "Used; worked before packing; not bench tested",
    "info_url": "https://www.buffalotech.com/products/16-port-gigabit-green-ethernet-switch-bs-gu2016",
    "books": [],
    "specs": [
      {
        "key": "Type",
        "value": "16-port Layer 2 unmanaged Gigabit switch (Green Ethernet)"
      },
      {
        "key": "Switching",
        "value": "32 Gbps capacity, 23.81 Mpps forwarding, 8190 MAC entries, 512 KB buffer, jumbo frames to 15KB"
      },
      {
        "key": "Loop prevention",
        "value": "Automatic loop detection \u2014 shuts down looped port(s); physical toggle"
      },
      {
        "key": "Chassis",
        "value": "Metal, fanless/silent, desktop / wall-mount / rack-mountable (brackets included), 5.11 x 8.46 x 1.69 in, 2.4 lb"
      },
      {
        "key": "Power",
        "value": "Internal PSU, 100-240V universal, 9.1W idle; IEEE 802.3az EEE"
      },
      {
        "key": "Release",
        "value": "2014, MSRP ~$79.99; End of Life ~2021"
      },
      {
        "key": "Warranty",
        "value": "Lifetime limited (required registration within 90 days of purchase)"
      },
      {
        "key": "Package contents",
        "value": "Switch, power cord, rubber feet, rack-mount brackets/screws, serial stickers, quick guide, warranty card"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Power cord included (internal PSU; no external adapter needed)"
      }
    ],
    "photos": [
      {
        "src": "img/buffalo_bs_gu2016/Network-buffalo-gb-switch-like-new.jpg",
        "alt": "Buffalo Inc. BS-GU2016 \u2014 photo 1"
      },
      {
        "src": "img/buffalo_bs_gu2016/buffalo-underside.jpg",
        "alt": "Buffalo Inc. BS-GU2016 \u2014 photo 2"
      }
    ]
  },
  {
    "id": "linksys_velop_mesh",
    "title": "Linksys Velop Dual-Band AC1300 Mesh WiFi (4 nodes: 3-pack + 1 add-on, WHW01 series)",
    "category": "Networking",
    "quantity": 1,
    "condition": "Used; worked before packing; not bench tested",
    "info_url": "https://support.linksys.com/kb/article/502-en/",
    "books": [],
    "specs": [
      {
        "key": "Per node ports",
        "value": "2x Gigabit Ethernet RJ-45 (wired backhaul capable)"
      },
      {
        "key": "Form",
        "value": "Upright standalone tower nodes; seamless roaming"
      },
      {
        "key": "Features",
        "value": "Intelligent Mesh path optimization; modular (dual/tri-band nodes mixable); app-based Bluetooth setup; automatic firmware updates"
      },
      {
        "key": "Packaging",
        "value": "Original blue Velop retail box present (visible in photo)"
      },
      {
        "key": "Model",
        "value": "WHW01-series Dual-Band AC1300 (up to 1.3 Gbps, ~1500 sq ft per node); set = WHW0103 3-pack + separately purchased WHW0101 single node. Identified by owner \u2014 these are the shorter of the two Velop models"
      },
      {
        "key": "Additional node",
        "value": "Fourth node purchased separately (WHW0101 1-pack) \u2014 same model as the other three: https://www.amazon.com/dp/B0C31YGNDG"
      },
      {
        "key": "Release",
        "value": "Dual-Band Velop WHW01 series launched 2018"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 All 4 per-node power adapters present"
      }
    ],
    "photos": [
      {
        "src": "img/linksys_velop_mesh/IMG_2858.jpg",
        "alt": "Linksys Velop Dual-Band AC1300 Mesh WiFi (4 nodes: 3-pack + 1 add-on, WHW01 series) \u2014 photo 1"
      }
    ]
  },
  {
    "id": "arris_surfboard_sb8200",
    "title": "ARRIS SURFboard SB8200 DOCSIS 3.1 Cable Modem",
    "category": "Networking",
    "quantity": 1,
    "condition": "New in original retail box (unopened)",
    "info_url": "https://www.arris.com/surfboard/products/cable-modems/sb8200/",
    "books": [],
    "specs": [
      {
        "key": "Standard",
        "value": "DOCSIS 3.1 (up to 10+ Gbps theoretical downstream; 2 OFDM downstream + 2 OFDMA upstream channels; 32x8 channel bonding on DOCSIS 3.0 fallback)"
      },
      {
        "key": "Ports",
        "value": "2x 1-Gigabit Ethernet with Link Aggregation support"
      },
      {
        "key": "ISP compatibility",
        "value": "Major US cable ISPs (Xfinity, Cox, etc.)"
      },
      {
        "key": "Activation",
        "value": "Replaces ISP rental modems \u2014 activate by giving your ISP the serial number and MAC address"
      },
      {
        "key": "Release",
        "value": "2017; launch MSRP $199.99"
      },
      {
        "key": "Part number",
        "value": "1000205"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Retail-complete unopened box includes its 12V adapter"
      }
    ],
    "photos": []
  },
  {
    "id": "linksys_se3008_v2",
    "title": "Linksys SE3008 V2 (8-Port Gigabit Ethernet Unmanaged Switch)",
    "category": "Networking",
    "quantity": 1,
    "condition": "Used",
    "info_url": "https://support.linksys.com/kb/article/3779-en/?section_id=189",
    "books": [],
    "specs": [
      {
        "key": "Type",
        "value": "8-port Layer 2 unmanaged Gigabit switch"
      },
      {
        "key": "Switching",
        "value": "16 Gbps capacity, 11.9 Mpps, 8192 MAC entries, 160 KB buffer; NO jumbo frames"
      },
      {
        "key": "QoS",
        "value": "Hardware QoS (automatic, not configurable); no VLAN/SNMP/web UI"
      },
      {
        "key": "Chassis",
        "value": "Metal w/ plastic accents, black/blue, fanless/silent, 7.4 x 4.3 x 1.18 in, 290 g"
      },
      {
        "key": "Power",
        "value": "External 12V adapter (device label: 0.5A), 100-240V universal"
      },
      {
        "key": "Release",
        "value": "V2 ~2017, MSRP $49.99"
      },
      {
        "key": "Warranty",
        "value": "1-year limited"
      },
      {
        "key": "Package contents",
        "value": "Switch, 12V adapter, quick guide, warranty docs"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 External 12V adapter included in package contents"
      }
    ],
    "photos": []
  },
  {
    "id": "tplink_archer_t4u",
    "title": "TP-Link Archer T4U (AC1200 Wireless Dual Band USB Adapter)",
    "category": "Networking",
    "quantity": 1,
    "condition": "Used; includes original box",
    "info_url": "https://www.tp-link.com/us/home-networking/usb-adapter/archer-t4u/",
    "books": [],
    "specs": [
      {
        "key": "Wi-Fi",
        "value": "802.11ac Wave 2 (WiFi 5), AC1200: 2.4GHz 300 Mbps + 5GHz 867 Mbps (2x2, 80MHz)"
      },
      {
        "key": "Chipset",
        "value": "Realtek RTL8812AU (V1 hardware, per label)"
      },
      {
        "key": "Interface",
        "value": "USB 3.0 Type-A (USB 2.0 compatible)"
      },
      {
        "key": "Antennas",
        "value": "2 external foldable high-gain (1.41 dBi @2.4G / 4.24 dBi @5G)"
      },
      {
        "key": "Linux",
        "value": "NOT plug-and-play \u2014 needs the community rtl8812au-dkms driver (V1 hardware)"
      },
      {
        "key": "Package contents",
        "value": "Adapter, USB extension cable (~15cm), resource CD, quick guide, warranty card"
      },
      {
        "key": "Release",
        "value": "2014, MSRP $39.99"
      },
      {
        "key": "Hardware version",
        "value": "V1.0 (confirmed from unit label photo IMG_2943)"
      },
      {
        "key": "Power adapter",
        "value": "USB bus-powered (5V/0.5A from the port); no external adapter exists"
      }
    ],
    "photos": [
      {
        "src": "img/tplink_archer_t4u/Tplink-ac-usb.jpg",
        "alt": "TP-Link Archer T4U (AC1200 Wireless Dual Band USB Adapter) \u2014 photo 1"
      },
      {
        "src": "img/tplink_archer_t4u/IMG_2943.jpg",
        "alt": "TP-Link Archer T4U (AC1200 Wireless Dual Band USB Adapter) \u2014 photo 2"
      }
    ]
  },
  {
    "id": "crucial_ballistix_ddr3_ram_lot",
    "title": "Crucial Ballistix Sport DDR3-1600 UDIMM (kit of 2x4GB; module P/N BLS4G3D1609DS1S00)",
    "category": "Desktop parts",
    "quantity": 3,
    "condition": "Unused \u2014 all 3 kits sealed in retail packaging",
    "info_url": "https://www.amazon.com/dp/B006WAGGUK",
    "books": [],
    "specs": [
      {
        "key": "Total",
        "value": "24 GB (3 kits x 2 x 4GB)"
      },
      {
        "key": "Speed",
        "value": "DDR3-1600, 1.5V, non-ECC, long-slot desktop UDIMM"
      },
      {
        "key": "Warning",
        "value": "Desktop UDIMMs \u2014 will NOT fit the laptops in this lot"
      },
      {
        "key": "Release",
        "value": "Line discontinued \u2014 Crucial retired the Ballistix brand in 2021"
      },
      {
        "key": "Part number",
        "value": "BLS4G3D1609DS1S00 (per module); 2-pack kit P/N reads BLS2CP4G3D1609DS1S00"
      }
    ],
    "photos": [
      {
        "src": "img/crucial_ballistix_ddr3_ram_lot/Ram%20bundle.jpg",
        "alt": "Crucial Ballistix Sport DDR3-1600 UDIMM (kit of 2x4GB; module P/N BLS4G3D1609DS1S00) \u2014 photo 1"
      }
    ]
  },
  {
    "id": "ipsg_240gb_ssd",
    "title": "Inland Professional 240GB 2.5-inch Internal Solid State Drive",
    "category": "Desktop parts",
    "quantity": 1,
    "condition": "Brand new / unused in retail packaging",
    "info_url": "https://www.neweggbusiness.com/product/product.aspx?item=9b-0d9-00bb-00012",
    "books": [],
    "specs": [
      {
        "key": "Form factor",
        "value": "2.5 in / 7mm"
      },
      {
        "key": "Interface",
        "value": "SATA III 6Gb/s (backwards compatible SATA II/I)"
      },
      {
        "key": "Performance",
        "value": "Rated up to 530 MB/s sequential read / 440 MB/s write"
      },
      {
        "key": "Pricing note",
        "value": "Original retail sticker on box: $79.99 (visible in photo)"
      }
    ],
    "photos": [
      {
        "src": "img/ipsg_240gb_ssd/SSD-240-2.5.jpg",
        "alt": "Inland Professional 240GB 2.5-inch Internal Solid State Drive \u2014 photo 1"
      },
      {
        "src": "img/ipsg_240gb_ssd/IMG_2858.jpg",
        "alt": "Inland Professional 240GB 2.5-inch Internal Solid State Drive \u2014 photo 2"
      }
    ]
  },
  {
    "id": "vantec_ugt_st644r",
    "title": "Vantec UGT-ST644R 4-Channel 6-Port SATA 6Gb/s PCIe Host Card",
    "category": "Desktop parts",
    "quantity": 1,
    "condition": "New; accessories present",
    "info_url": "https://vantecusa.com/products_detail.php?p_id=71&p_name=4",
    "books": [],
    "specs": [
      {
        "key": "Controller",
        "value": "Marvell 88SE9215 (verified from the unit label photo)"
      },
      {
        "key": "Ports",
        "value": "4x internal SATA III 6Gbps + 2x external eSATA (max 6 concurrent)"
      },
      {
        "key": "RAID reality",
        "value": "AHCI HBA / port multiplier \u2014 NOT a hardware RAID controller (no onboard processor/cache); the marketed 'RAID 0/1/10/HyperDuo' modes are host/software-assisted. For TrueNAS/Unraid/Proxmox use, direct HBA passthrough is exactly what you want"
      },
      {
        "key": "Linux",
        "value": "Native mainline kernel support (ahci/libata), zero compilation"
      },
      {
        "key": "Accessories",
        "value": "Low-profile bracket, driver CD, internal SATA cables, user manual"
      }
    ],
    "photos": [
      {
        "src": "img/vantec_ugt_st644r/Adapter.jpg",
        "alt": "Vantec UGT-ST644R 4-Channel 6-Port SATA 6Gb/s PCIe Host Card \u2014 photo 1"
      }
    ]
  },
  {
    "id": "raspberry_pi_ecosystem_lot",
    "title": "Raspberry Pi lot: 1x Pi 4 Model B + 2x Pi 3 Model B+ (with accessories)",
    "category": "Single board computer",
    "quantity": 1,
    "condition": "Used; worked before packing",
    "info_url": "",
    "books": [],
    "specs": [
      {
        "key": "Pi4 unit 1",
        "value": "Pi 4 Model B in clear case with active cooling fan (released 2019)"
      },
      {
        "key": "Pi3 unit 1",
        "value": "Black enclosure with aluminum heatsinks"
      },
      {
        "key": "Pi3 unit 2",
        "value": "Bare PCB on clear acrylic baseplate"
      },
      {
        "key": "Included accessories",
        "value": "Micro Connectors 5V/3A USB-C PSU with inline power toggle, CanaKit micro-HDMI to HDMI cable, USB-C and Micro-USB wall bricks, HDMI-to-DVI legacy cable, internal SATA III cables, blue sorting/containment bin"
      },
      {
        "key": "SD cards",
        "value": "MicroSD cards (with SD adapters) from the RPi lab, in protective clamshell cases \u2014 several new in package; used cards previously ran Pi operating systems and will be wiped before handoff"
      },
      {
        "key": "Pi 4 product page",
        "value": "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"
      },
      {
        "key": "Pi 3 product page",
        "value": "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/"
      },
      {
        "key": "Pi3 release",
        "value": "Pi 3 Model B+ released 2018, launch $35"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Micro Connectors 5V/3A USB-C PSU (fits the Pi 4s) plus USB-C and Micro-USB wall bricks (Micro-USB covers the Pi 3 B+ units) are in the bundle accessories"
      }
    ],
    "photos": [
      {
        "src": "img/raspberry_pi_ecosystem_lot/IMG_2891.jpg",
        "alt": "Raspberry Pi lot: 1x Pi 4 Model B + 2x Pi 3 Model B+ (with accessories) \u2014 photo 1"
      },
      {
        "src": "img/raspberry_pi_ecosystem_lot/IMG_2892.jpg",
        "alt": "Raspberry Pi lot: 1x Pi 4 Model B + 2x Pi 3 Model B+ (with accessories) \u2014 photo 2"
      },
      {
        "src": "img/raspberry_pi_ecosystem_lot/IMG_2893.jpg",
        "alt": "Raspberry Pi lot: 1x Pi 4 Model B + 2x Pi 3 Model B+ (with accessories) \u2014 photo 3"
      },
      {
        "src": "img/raspberry_pi_ecosystem_lot/IMG_2894.jpg",
        "alt": "Raspberry Pi lot: 1x Pi 4 Model B + 2x Pi 3 Model B+ (with accessories) \u2014 photo 4"
      }
    ]
  },
  {
    "id": "raspberry_pi_zero_w_batch",
    "title": "Raspberry Pi Zero W batch + electronics tinkering kit",
    "category": "Single board computer",
    "quantity": 1,
    "condition": "Used (lab gear); count undetermined",
    "info_url": "https://www.raspberrypi.com/products/raspberry-pi-zero-w/",
    "books": [],
    "specs": [
      {
        "key": "Boards",
        "value": "Raspberry Pi Zero W boards \u2014 count unknown; all boards present go with the lot"
      },
      {
        "key": "Release",
        "value": "Zero W released 2017, launch $10"
      },
      {
        "key": "Power adapter",
        "value": "Unknown \u2014 Zero W is Micro-USB powered \u2014 the micro-USB bricks in the maker cable assortment cover it"
      }
    ],
    "photos": []
  },
  {
    "id": "raspberry_pi_1_model_b_pair",
    "title": "Raspberry Pi 1 Model B+ (pair)",
    "category": "Single board computer",
    "quantity": 2,
    "condition": "Used (legacy, 2014 era)",
    "info_url": "https://www.raspberrypi.com/products/raspberry-pi-1-model-b-plus/",
    "books": [],
    "specs": [
      {
        "key": "SoC",
        "value": "Broadcom BCM2835 (700 MHz ARM11), 512MB RAM"
      },
      {
        "key": "Ports",
        "value": "4x USB 2.0, HDMI, composite video via 3.5mm jack, 40-pin GPIO header, microSD"
      },
      {
        "key": "Release",
        "value": "Released July 2014, launch $35"
      },
      {
        "key": "Power adapter",
        "value": "Unknown \u2014 Micro-USB powered \u2014 the assorted micro-USB bricks in the Pi lot / cable bin cover these"
      }
    ],
    "photos": []
  },
  {
    "id": "usb_wifi_dongles_dipole",
    "title": "USB Wi-Fi dongles with white external dipole antennas (make/model unidentified)",
    "category": "Networking",
    "quantity": 2,
    "condition": "Used; not yet photographed",
    "info_url": "",
    "books": [],
    "specs": [],
    "photos": []
  },
  {
    "id": "maker_cables_jumpers_misc",
    "title": "Assorted maker cabling: micro-USB power adapters, blue USB Type-A data cables, prototyping jumper wires",
    "category": "Cables",
    "quantity": 1,
    "condition": "Used assortment",
    "info_url": "",
    "books": [],
    "specs": [],
    "photos": []
  },
  {
    "id": "razer_blackwidow_ultimate_2016",
    "title": "Razer BlackWidow Ultimate 2016",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Used / fully operational",
    "info_url": "https://mysupport.razer.com/app/answers/detail/a_id/3653/~/razer-blackwidow-ultimate-2016-%7C-rz03-0170x-support-%26-faqs",
    "books": [],
    "specs": [
      {
        "key": "Switches",
        "value": "Razer Green mechanical (tactile, clicky), individually programmable green backlit keys"
      },
      {
        "key": "Cable",
        "value": "Heavy-duty braided fiber with USB + audio pass-through breakout"
      },
      {
        "key": "Linux",
        "value": "Excellent via open-source OpenRazer daemon (+ Polychromatic GUI)"
      },
      {
        "key": "Release",
        "value": "2016, MSRP $109.99; discontinued"
      },
      {
        "key": "Part number",
        "value": "RZ03-0170"
      }
    ],
    "photos": [
      {
        "src": "img/razer_blackwidow_ultimate_2016/IMG_2897.jpg",
        "alt": "Razer BlackWidow Ultimate 2016 \u2014 photo 1"
      },
      {
        "src": "img/razer_blackwidow_ultimate_2016/IMG_2896%202.jpg",
        "alt": "Razer BlackWidow Ultimate 2016 \u2014 photo 2"
      }
    ]
  },
  {
    "id": "nixeus_moda_v2",
    "title": "Nixeus MODA PRO Mechanical Keyboard (MK-104BL16)",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Used",
    "info_url": "https://www.nixeus.com/moda-pro",
    "books": [],
    "specs": [
      {
        "key": "Layout",
        "value": "Full-size 104-key (photo-verified), white"
      },
      {
        "key": "Switches",
        "value": "Kailh Blue (tactile clicky), aluminum faceplate"
      },
      {
        "key": "Linux",
        "value": "Pure plug-and-play (standard USB HID)"
      },
      {
        "key": "Release",
        "value": "~2016 (serial dated March 2016)"
      },
      {
        "key": "Part number",
        "value": "MK-104BL16"
      }
    ],
    "photos": [
      {
        "src": "img/nixeus_moda_v2/IMG_2895.jpg",
        "alt": "Nixeus MODA PRO Mechanical Keyboard (MK-104BL16) \u2014 photo 1"
      },
      {
        "src": "img/nixeus_moda_v2/IMG_2896%202.jpg",
        "alt": "Nixeus MODA PRO Mechanical Keyboard (MK-104BL16) \u2014 photo 2"
      }
    ]
  },
  {
    "id": "hp_3005pr_port_replicator",
    "title": "HP 3005pr USB 3.0 Universal Port Replicator",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Unused; in original box",
    "info_url": "https://www.amazon.com/dp/B008KMDVPQ",
    "books": [],
    "specs": [
      {
        "key": "Video",
        "value": "1x HDMI + 1x DisplayPort dual-monitor output via DisplayLink drivers"
      },
      {
        "key": "Network",
        "value": "Integrated Gigabit Ethernet RJ-45"
      },
      {
        "key": "USB downstream",
        "value": "4 USB downstream ports"
      },
      {
        "key": "Connection",
        "value": "Single USB 3.0 uplink"
      },
      {
        "key": "Release",
        "value": "2013"
      },
      {
        "key": "Part number",
        "value": "H1L08AA#ABA"
      },
      {
        "key": "Power adapter",
        "value": "Included \u2014 Dedicated external power brick packed with the unit"
      }
    ],
    "photos": []
  },
  {
    "id": "kensington_combination_laptop_lock",
    "title": "Kensington Portable Combination Laptop Lock",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "New in open box",
    "info_url": "https://customer.kensington.com/us/us/s/k64670am/portable_combination_laptop_lock___black",
    "books": [],
    "specs": [
      {
        "key": "Mechanism",
        "value": "4-wheel combination, coiled cut-resistant retractable steel cable"
      },
      {
        "key": "Attachment",
        "value": "Standard T-bar Kensington Security Slot (laptops, desktops, switches, NAS)"
      },
      {
        "key": "Instructions",
        "value": "Product instructions (PDF): https://accoblobstorageus.blob.core.windows.net/literature/88509751-237a-47d2-9e2d-16302a22246e.pdf"
      },
      {
        "key": "Pricing note",
        "value": "Retail sticker on box: $24.99 (visible in photo)"
      },
      {
        "key": "Part number",
        "value": "AB3H P49289 (as read from the unit label)"
      }
    ],
    "photos": [
      {
        "src": "img/kensington_combination_laptop_lock/kensington-box.jpg",
        "alt": "Kensington Portable Combination Laptop Lock \u2014 photo 1"
      }
    ]
  },
  {
    "id": "ds9490r_1wire_usb_adapter",
    "title": "Analog Devices / Maxim (Dallas Semiconductor) DS9490R# 1-Wire USB Adapter",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Used",
    "info_url": "https://www.newark.com/maxim-integrated-products/ds9490r/usb-1-wire-ibutton-adapter-5v/dp/78Y4805",
    "books": [],
    "specs": [
      {
        "key": "Function",
        "value": "12 Mbps USB-to-RJ11 bridge for reading/writing 1-Wire sensors and iButton credentials"
      },
      {
        "key": "Niche note",
        "value": "Used for 1-Wire sensor networks and iButton readers; commonly paired with Raspberry Pi home-automation setups"
      },
      {
        "key": "Part number",
        "value": "DS9490R#"
      }
    ],
    "photos": []
  },
  {
    "id": "mintyboost_diy_charger",
    "title": "Adafruit (DIY kit, assembled) MintyBoost USB Charger (open-source kit in Altoids tin)",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Assembled DIY kit",
    "info_url": "https://learn.adafruit.com/minty-boost/overview",
    "books": [],
    "specs": [
      {
        "key": "Function",
        "value": "5V DC/DC boost regulator: 2x AA (3V) in, 5V USB out"
      },
      {
        "key": "Release",
        "value": "Adafruit kit, originally $19.50; kit since retired"
      }
    ],
    "photos": []
  },
  {
    "id": "rpi_zero_case_set",
    "title": "Raspberry Pi Zero (and Zero W) Cases",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Used/complete (solid, camera-mount, and GPIO-access lids)",
    "info_url": "https://www.raspberrypi.com/products/raspberry-pi-zero-case/",
    "books": [],
    "specs": [
      {
        "key": "Release",
        "value": "Official accessory, $5 MSRP"
      }
    ],
    "photos": []
  },
  {
    "id": "kingwin_csc1_speaker_cable",
    "title": "Kingwin CSC-1 Case Speaker Cable for Computers",
    "category": "Desktop parts",
    "quantity": 1,
    "condition": "New in retail packaging",
    "info_url": "https://aerocooler.com/kingwin-csc-1-case-speaker-cable/",
    "books": [],
    "specs": [
      {
        "key": "Type",
        "value": "Internal PC case speaker cable"
      },
      {
        "key": "Pricing note",
        "value": "Retail sticker: $4.99 (visible in photo)"
      }
    ],
    "photos": [
      {
        "src": "img/kingwin_csc1_speaker_cable/kingwin-csc1.jpg",
        "alt": "Kingwin CSC-1 Case Speaker Cable for Computers \u2014 photo 1"
      }
    ]
  },
  {
    "id": "books_cs_theory_faang",
    "title": "Book collection: Advanced CS Theory & FAANG Technical Assessment Prep",
    "category": "Books",
    "quantity": 1,
    "condition": "Clean bindings, crisp pages, solid structural condition",
    "info_url": "",
    "books": [
      {
        "title": "Introduction to the Theory of Computation, 3rd Ed \u2014 Michael Sipser",
        "url": "https://www.goodreads.com/book/show/400716.Introduction_to_the_Theory_of_Computation"
      },
      {
        "title": "The UNIX Programming Environment \u2014 Kernighan & Pike",
        "url": "https://www.goodreads.com/book/show/234533.The_UNIX_Programming_Environment"
      },
      {
        "title": "The Practice of Programming \u2014 Kernighan & Pike",
        "url": "https://www.goodreads.com/book/show/110225.The_Practice_of_Programming"
      },
      {
        "title": "Programming Pearls, 2nd Ed \u2014 Jon Bentley",
        "url": "https://www.goodreads.com/book/show/529398"
      }
    ],
    "specs": [],
    "photos": [
      {
        "src": "img/books_practical_sysadmin_python/books-spines.jpg",
        "alt": "Book collection: Advanced CS Theory & FAANG Technical Assessment Prep \u2014 photo 1"
      },
      {
        "src": "img/books_practical_sysadmin_python/books-box.jpg",
        "alt": "Book collection: Advanced CS Theory & FAANG Technical Assessment Prep \u2014 photo 2"
      },
      {
        "src": "img/books_practical_sysadmin_python/books-box2.jpg",
        "alt": "Book collection: Advanced CS Theory & FAANG Technical Assessment Prep \u2014 photo 3"
      }
    ]
  },
  {
    "id": "books_practical_sysadmin_python",
    "title": "Book collection: Applied SysAdmin, DevOps & Python stack",
    "category": "Books",
    "quantity": 1,
    "condition": "Clean bindings, crisp pages, solid structural condition",
    "info_url": "",
    "books": [
      {
        "title": "The Debian Administrator's Handbook (vintage)",
        "url": "https://debian-handbook.info/"
      },
      {
        "title": "TCP/IP Illustrated, Volume 3 \u2014 W. Richard Stevens",
        "url": "https://www.goodreads.com/book/show/108805.TCP_IP_Illustrated_Volume_3"
      },
      {
        "title": "Vagrant: Up and Running \u2014 Mitchell Hashimoto",
        "url": "https://www.goodreads.com/book/show/15706789"
      },
      {
        "title": "Pro Bash Programming \u2014 Chris F.A. Johnson",
        "url": "https://www.goodreads.com/book/show/4180657"
      },
      {
        "title": "MySQL in a Nutshell, 2nd Ed \u2014 Russell Dyer",
        "url": "https://www.goodreads.com/book/show/1084437.MySQL_in_a_Nutshell"
      },
      {
        "title": "Programming Python, 4th Ed \u2014 Mark Lutz",
        "url": "https://www.goodreads.com/book/show/9239.Programming_Python"
      },
      {
        "title": "Python for Unix and Linux System Administration \u2014 Gift & Jones",
        "url": "https://www.goodreads.com/book/show/105243.Python_for_Unix_and_Linux_System_Administration"
      },
      {
        "title": "Doing Math with Python \u2014 Amit Saha",
        "url": "https://www.goodreads.com/book/show/26243207"
      },
      {
        "title": "Python Without Fear \u2014 Brian Overland",
        "url": "https://www.goodreads.com/book/show/207447.Python_Without_Fear"
      },
      {
        "title": "Hello Scratch! \u2014 Ford, Ford & Ford",
        "url": "https://www.manning.com/books/hello-scratch"
      },
      {
        "title": "The Cartoon Guide to Physics \u2014 Gonick & Huffman",
        "url": "https://www.goodreads.com/book/show/119035.The_Cartoon_Guide_to_Physics"
      },
      {
        "title": "UNIX and Linux System Administration Handbook, 4th Ed \u2014 Nemeth, Snyder, Hein & Whaley",
        "url": "https://www.goodreads.com/en/book/show/8772005-unix-and-linux-system-administration-handbook"
      }
    ],
    "specs": [],
    "photos": [
      {
        "src": "img/books_practical_sysadmin_python/books-spines.jpg",
        "alt": "Book collection: Applied SysAdmin, DevOps & Python stack \u2014 photo 1"
      },
      {
        "src": "img/books_practical_sysadmin_python/books-box.jpg",
        "alt": "Book collection: Applied SysAdmin, DevOps & Python stack \u2014 photo 2"
      },
      {
        "src": "img/books_practical_sysadmin_python/books-box2.jpg",
        "alt": "Book collection: Applied SysAdmin, DevOps & Python stack \u2014 photo 3"
      }
    ]
  },
  {
    "id": "raspberry_pi_keyboard_and_mouse",
    "title": "Official Raspberry Pi Keyboard & Hub with Official Raspberry Pi Mouse",
    "category": "Peripherals",
    "quantity": 1,
    "condition": "Used / functional",
    "info_url": "https://www.raspberrypi.com/products/raspberry-pi-keyboard-and-hub/",
    "books": [],
    "specs": [
      {
        "key": "Included",
        "value": "Official Raspberry Pi Keyboard & Hub and Official Raspberry Pi Mouse"
      },
      {
        "key": "Keyboard",
        "value": "Standard 78-key US-layout keyboard with a built-in 3-port USB 2.0 Type-A hub for powering other peripherals"
      },
      {
        "key": "Mouse",
        "value": "Three-button optical mouse; connects via USB Type-A either to one of the keyboard hub ports or directly to a compatible computer"
      },
      {
        "key": "Design",
        "value": "Ergonomically designed for comfortable use"
      },
      {
        "key": "Compatibility",
        "value": "Compatible with all Raspberry Pi products (standard USB HID \u2014 works with any OS)"
      },
      {
        "key": "Documentation",
        "value": "Product brief (PDF): https://www.raspberrypi.org/app/uploads/2019/04/Product-Brief-Raspberry-Pi-Keyboard-and-Mouse.pdf"
      },
      {
        "key": "Release",
        "value": "Official pricing: keyboard & hub $17, mouse $8"
      }
    ],
    "photos": []
  },
  {
    "id": "raspberry_pi_noir_camera_v1",
    "title": "Raspberry Pi NoIR Camera Module (first generation, 5MP)",
    "category": "Maker",
    "quantity": 1,
    "condition": "Brand new / unused",
    "info_url": "https://www.adafruit.com/product/1567",
    "books": [],
    "specs": [
      {
        "key": "Sensor",
        "value": "OmniVision OV5647, 5 megapixel (2592x1944 stills)"
      },
      {
        "key": "Video",
        "value": "1080p30, 720p60, 640x480p90"
      },
      {
        "key": "IR filter",
        "value": "None (NoIR) \u2014 sensitive to near-infrared; pairs with IR illumination for night/low-light and wildlife/plant-health projects"
      },
      {
        "key": "Interface",
        "value": "CSI ribbon cable to the Raspberry Pi camera connector"
      },
      {
        "key": "Compatibility",
        "value": "Works with CSI-equipped Raspberry Pi boards, including the Pi 4/Pi 3 units in this lot (Pi Zero W needs a narrower adapter ribbon, not included)"
      }
    ],
    "photos": []
  },
  {
    "id": "netgear_a6210_usb_adapter",
    "title": "NETGEAR A6210 AC1200 WiFi USB 3.0 Adapter",
    "category": "Networking",
    "quantity": 1,
    "condition": "In original retail box",
    "info_url": "https://www.amazon.com/dp/B00NSB0G66",
    "books": [],
    "specs": [
      {
        "key": "Wi-Fi",
        "value": "802.11ac dual-band AC1200 (300 + 867 Mbps)"
      },
      {
        "key": "Interface",
        "value": "USB 3.0 with fold-out high-gain antenna"
      },
      {
        "key": "Linux",
        "value": "MediaTek MT7612U \u2014 supported by the mainline mt76 driver (kernel 4.19+)"
      },
      {
        "key": "Release",
        "value": "2015, MSRP $69.99"
      },
      {
        "key": "Part number",
        "value": "A6210"
      }
    ],
    "photos": [
      {
        "src": "img/netgear_a6210_usb_adapter/IMG_2933.jpg",
        "alt": "NETGEAR A6210 AC1200 WiFi USB 3.0 Adapter \u2014 photo 1"
      }
    ]
  },
  {
    "id": "tplink_tl_wn821n_pair",
    "title": "TP-Link TL-WN821N 300Mbps Wireless N USB adapter (white top, black underside)",
    "category": "Networking",
    "quantity": 1,
    "condition": "Used",
    "info_url": "https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn821n/",
    "books": [],
    "specs": [
      {
        "key": "Wi-Fi",
        "value": "802.11n, 300 Mbps, 2.4GHz, internal antennas"
      },
      {
        "key": "Interface",
        "value": "USB 2.0 Type-A"
      },
      {
        "key": "Versions",
        "value": "Label reads v4.2 (Realtek chipset)"
      },
      {
        "key": "Linux",
        "value": "Supported by in-kernel Realtek USB drivers on modern kernels"
      },
      {
        "key": "Part number",
        "value": "TL-WN821N"
      }
    ],
    "photos": [
      {
        "src": "img/usb_wifi_dongles_dipole/IMG_2939.jpg",
        "alt": "TP-Link TL-WN821N 300Mbps Wireless N USB adapter (white top, black underside) \u2014 photo 1"
      },
      {
        "src": "img/usb_wifi_dongles_dipole/IMG_2940.jpg",
        "alt": "TP-Link TL-WN821N 300Mbps Wireless N USB adapter (white top, black underside) \u2014 photo 2"
      }
    ]
  }
];
