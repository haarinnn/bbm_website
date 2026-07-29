export const products = {
  minerals: {
    label: "Minerals",
    icon: "hexagon",
    description: "High-grade industrial minerals for abrasive, filtration, and manufacturing applications.",
    items: [
      {
        id: "garnet",
        name: "Garnet",
        badge: "G",
        overview: "Garnet is a naturally occurring silicate mineral prized for its exceptional hardness, angular fracture characteristics, and chemical inertness. These properties make it one of the most versatile industrial abrasives available, widely used across surface preparation, waterjet cutting, and precision finishing applications. As a non-toxic, low-dust abrasive, garnet offers a safer and more environmentally responsible alternative to silica sand and slag-based media, making it the abrasive of choice for industries ranging from oil & gas to semiconductor manufacturing.",
        sections: [
          {
            title: "Sand Blasting Grades",
            icon: "file-text",
            content: "Garnet sand blasting grades are selected based on the surface to be blasted and the required level of cleanliness. Coarser grades provide aggressive cutting action for removing tough corrosion and thick paint, while finer blasting grades deliver cleaner, more controlled finishes.",
            grades: [
              {
                name: "Mesh 10–20",
                desc: "The coarsest blasting grade, achieving a surface profile above 100 microns. Widely used in shipbuilding for removing heavy corrosion, mill scale, and thick multi-layer paint systems from large steel structures."
              },
              {
                name: "Mesh 20–40",
                desc: "Achieves a surface profile above 75 microns. Used in oil & gas maintenance and structural fabrication to prepare steel surfaces to an SA 3 finish — meeting the highest cleanliness standards for protective coating adhesion."
              },
              {
                name: "Mesh 30–60",
                desc: "The most widely used garnet blasting grade. Delivers an SA 2.5 finish — the most commonly requested industry standard — used extensively in oil & gas offshore platform maintenance, new platform construction, pressure vessel fabrication, structural steelwork, and spot blasting."
              }
            ]
          },
          {
            title: "Waterjet Cutting Grades",
            icon: "droplets",
            content: "Garnet is the preferred abrasive for waterjet cutting — a cold-cutting method that leaves the material's surface properties and structural integrity unchanged, ideal for precision work on heat-sensitive materials.",
            grades: [
              {
                name: "Mesh 80",
                desc: "The workhorse waterjet grade, widely used for cutting steel plates and marble. Provides the optimal balance between cutting speed and edge quality, capable of cutting harder materials faster than finer grades."
              },
              {
                name: "Mesh 120",
                desc: "A finer waterjet grade used for cutting lighter materials including glass, aluminium, and rubber. Produces smoother cut edges and is also used for engraving matte-finish designs into marble and glass surfaces."
              }
            ]
          },
          {
            title: "Micronized Grades",
            icon: "cpu",
            content: "Ultra-fine garnet grades used in high-precision manufacturing processes where surface quality and dimensional accuracy are critical.",
            grades: [
              {
                name: "Mesh 160 & Mesh 200",
                desc: "Specialty micronized grades used for grinding and finishing of electronic panels (TV and mobile displays), optical components, and semiconductor wafers — delivering the controlled, uniform surface finish required in advanced manufacturing environments."
              }
            ]
          },
          {
            title: "Applications by Grade Band",
            icon: "check-square",
            bullets: [
              "Coarser grades (10–20, 12–24): Water filtration to remove heavy suspended content, and heavy-duty blasting in shipbuilding and oil & gas to remove deep corrosion or thick multi-layer paint systems.",
              "Medium grades (20–40, 30–60): Sandblasting in oil & gas, shipbuilding, fabrication yards, and power plants for clean steel surfaces before painting. Mesh 20–40 achieves SA 3; Mesh 30–60 achieves SA 2.5 — the most requested industry standard.",
              "Fine grades (80, 120): Waterjet cutting of steel, aluminium, marble, granite, glass, rubber, and plastic — from 0.1mm to 125mm thickness. Mesh 120 is also used for engraving matte-finish designs into marble and glass."
            ]
          }
        ]
      },
      {
        id: "zircon",
        name: "Zircon",
        badge: "Z",
        overview: "Zircon (zirconium silicate, ZrSiO₄) is a naturally occurring mineral sourced from ancient heavy-mineral sand deposits. It presents as a transparent, beige, glassy material with visual appearance similar to silica sand, but with fundamentally different chemical properties that make it indispensable across industrial and high-tech applications. BBM Trading supplies two grades: ZrO₂ above 60% and below 63%, and ZrO₂ above 65% — enabling clients to select the purity level that best matches their specific application requirements.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "Very low toxicity — not classified as an environmental hazard, making it one of the safest industrial minerals available.",
              "Medicinal and food-safe properties — increasingly recognized for compatibility with pharmaceutical and food-product manufacturing.",
              "Exceptional thermal stability — performs reliably in high-temperature applications such as ceramic firing and refractory linings.",
              "Versatile across applications — from traditional ceramic manufacturing to cutting-edge high-tech processes."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Ceramic product manufacturing — used as an opacifier and in ceramic glazes to improve whiteness, brightness, and surface quality.",
              "Refractories — critical raw material for manufacturing refractory bricks and linings for high-temperature industrial furnaces and kilns.",
              "High-tech applications — growing adoption in electronics, optical coatings, and advanced materials manufacturing.",
              "Food and pharmaceuticals — increasingly used in food-product and pharmaceutical manufacturing due to low toxicity and chemical inertness."
            ]
          }
        ]
      },
      {
        id: "ilmenite",
        name: "Ilmenite",
        badge: "I",
        overview: "Ilmenite is a titanium-iron oxide mineral (FeTiO₃) commonly found alongside zircon in heavy-mineral sand deposits worldwide. As the primary ore of titanium, ilmenite serves as the essential feedstock for titanium dioxide (TiO₂) production — one of the most important industrial pigments globally — and plays a supporting role in various other industrial mineral applications. BBM Trading sources ilmenite from reliable deposits to ensure consistent quality and supply.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "High titanium dioxide content — provides an efficient feedstock for TiO₂ extraction, reducing processing costs per unit of pigment produced.",
              "Cost-effective raw material — more abundantly available and economically viable than other titanium-bearing minerals like rutile.",
              "Consistently sourced — large, established deposits ensure steady supply with predictable quality parameters.",
              "Process-compatible — suitable for both sulphate and chloride TiO₂ production processes, as well as secondary industrial applications."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Titanium dioxide (TiO₂) pigment production — the primary use, supplying feedstock for the white pigment used in paints, coatings, plastics, paper, and consumer products.",
              "Welding rod coatings — used as a flux constituent in the manufacture of welding electrodes and rods.",
              "Foundry sands — used as a component in heavy-mineral sand blends for precision metal casting.",
              "Other industrial applications — including heavy-media separation, specialty pigments, and emerging titanium metal production processes."
            ]
          }
        ]
      }
    ]
  },
  metals: {
    label: "Metals & Abrasives",
    icon: "circle",
    description: "Durable metallic abrasives and corrosion-resistant coatings for surface preparation and protection.",
    items: [
      {
        id: "steel-shot",
        name: "Steel Shot",
        badge: "SS",
        overview: "Steel shot is a spherical steel abrasive medium manufactured from high-quality carbon steel through a controlled atomization process. Its round, uniform shape makes it the preferred medium for shot peening operations and surface cleaning applications where a smooth, even finish is required. Unlike single-use abrasives, steel shot can be recycled multiple times, delivering significant cost advantages in high-volume blasting operations.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "High durability and reusability — can be recycled thousands of times before breakdown, dramatically reducing abrasive consumption costs.",
              "Consistent spherical shape — delivers uniform peening intensity and surface finish across the entire workpiece, ensuring predictable, repeatable results.",
              "Minimal dust generation — produces significantly less airborne dust than expendable abrasives, improving operator visibility and workplace safety.",
              "Cost-effective over lifecycle — while per-unit cost is higher than single-use media, reusability makes steel shot one of the most economical choices for continuous operations."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Shot peening — induces compressive stress on metal surfaces, improving fatigue resistance and service life of critical components such as springs, gears, and turbine blades.",
              "Surface cleaning and descaling — removes mill scale, rust, and heat treatment scale from castings, forgings, and structural steel sections.",
              "Surface preparation before coating — prepares steel to the required profile and cleanliness standard for paint, epoxy, or powder coating adhesion in shipbuilding, fabrication, and foundry applications."
            ]
          }
        ]
      },
      {
        id: "steel-grit",
        name: "Steel Grit",
        badge: "SG",
        overview: "Steel grit is an angular steel abrasive medium produced by crushing and screening hardened steel shot. Its sharp, angular particle geometry provides an aggressive cutting action that makes it the preferred medium for applications requiring high surface profiles and rapid material removal. Widely used in shipbuilding, oil & gas, and heavy fabrication industries where robust surface preparation is critical to coating performance and structural longevity.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "Aggressive cutting action — angular particle geometry cuts into surfaces more efficiently than round media, providing faster cleaning rates and deeper profiles.",
              "Ideal for high surface profiles — produces the rougher anchor patterns required by heavy-duty protective coatings, ensuring superior adhesion in demanding environments.",
              "Durable and reusable — manufactured from high-hardness steel, providing excellent breakdown resistance and multiple reuse cycles.",
              "Consistent particle hardness — controlled heat treatment ensures uniform hardness throughout each grit particle, delivering predictable performance and surface finish quality."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Heavy corrosion and coating removal — strips deep rust, mill scale, and thick multi-layer coating systems from steel structures, vessels, and pipework.",
              "Surface profiling before painting/coating — creates the high-anchor surface profiles specified for heavy-duty marine and industrial coatings in oil & gas, shipbuilding, and offshore structures.",
              "Structural steel preparation — prepares beams, plates, and fabricated assemblies to meet coating specification requirements prior to protective treatment."
            ]
          }
        ]
      },
      {
        id: "zinc",
        name: "Zinc",
        badge: "Zn",
        overview: "Zinc is an essential metal in the protective coatings industry, valued for its outstanding corrosion resistance and galvanic protection properties. In coating formulations, zinc acts as a sacrificial anode — corroding preferentially to protect the underlying steel substrate from oxidation and degradation. BBM Trading supplies high-purity zinc for use in primers, paints, and galvanizing applications where long-lasting corrosion protection is non-negotiable.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "Excellent corrosion resistance — provides galvanic (sacrificial) protection that actively prevents rust even when the coating is damaged or scratched.",
              "Strong adhesion in coating formulations — zinc-rich primers bond tenaciously to prepared steel surfaces, creating a durable foundation for subsequent topcoat systems.",
              "Long-lasting protective performance — zinc coatings provide decades of corrosion protection in atmospheric, marine, and industrial environments.",
              "Cost-effective galvanic protection — delivers exceptional value over the full service life of the protected structure compared to alternative corrosion-prevention methods."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Zinc-rich primers and paints — formulated as the first coat in multi-layer protective coating systems for steel structures, providing cathodic protection against corrosion.",
              "Hot-dip and electro-galvanizing — used to coat steel and iron products with a protective zinc layer through immersion or electrochemical deposition.",
              "Protective coatings for structural steel — essential for steel exposed to aggressive marine, coastal, and heavy-industrial environments including offshore platforms, bridges, and pipelines."
            ]
          }
        ]
      }
    ]
  },
  packaging: {
    label: "Packaging",
    icon: "package",
    description: "Heavy-duty bulk packaging solutions for safe transport and storage of industrial materials.",
    items: [
      {
        id: "jumbo-bags",
        name: "Jumbo Bags (FIBC)",
        badge: "JB",
        overview: "As a complement to our core minerals and metals product lines, BBM Trading supplies Flexible Intermediate Bulk Containers (FIBC) — commonly known as jumbo bags — designed for the safe, efficient packaging and transport of bulk industrial materials. Our jumbo bags are engineered to handle the weight, density, and handling requirements specific to mineral and abrasive products, ensuring materials reach their destination in optimal condition.",
        sections: [
          {
            title: "Features & Benefits",
            icon: "trending-up",
            bullets: [
              "High load-bearing capacity — designed to safely contain dense industrial materials such as garnet and steel shot, with safe working loads tailored to product-specific requirements.",
              "UV-resistant and moisture-resistant options — available with UV stabilization for outdoor storage and moisture barriers for humidity-sensitive products.",
              "Multiple sizes and configurations — supplied in various dimensions, spout configurations, and lifting-loop arrangements to match specific product densities and logistics requirements.",
              "Engineered for safe bulk transport — constructed from high-tenacity woven polypropylene with reinforced seams and lifting loops, meeting international safety standards."
            ]
          },
          {
            title: "Uses & Applications",
            icon: "check-square",
            bullets: [
              "Bulk packaging of minerals and abrasives — primary packaging solution for garnet, steel shot, steel grit, zinc, zircon, and ilmenite shipments.",
              "Domestic and export shipments — suitable for road, rail, and sea freight, with configurations optimized for container loading and port handling.",
              "Warehousing and storage — stackable designs with UV and moisture protection for extended storage at yards, ports, and project sites."
            ]
          }
        ]
      }
    ]
  }
};

export const categoryOrder = ["minerals", "metals", "packaging"];
