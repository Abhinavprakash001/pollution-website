
import React, { useState } from "react";

const Indian = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    pollution: "",
    location: "",
    description: "",
    photo: null,
  });

  // =========================================================
  // ONLINE IMAGES
  // =========================================================

  const images = {
    // INDIA / POLLUTION
    air:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c7f16?auto=format&fit=crop&w=1600&q=80",

    water:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=1600&q=80",

    garbage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80",

    road:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1600&q=80",

    traffic:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1600&q=80",

    plastic:
      "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1600&q=80",

    factory:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",

    city:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",

    station:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=80",

    smoke:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1600&q=80",

    // CLEANER / GLOBAL
    cleanCity:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",

    cleanNature:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80",

    cleanPark:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",

    cleanWater:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",

    cleanRoad:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80",

    cleanStation:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80",

    cleanGreen:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=80",

    cleanTransport:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",

    recycling:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80",
  };

  // =========================================================
  // FORM
  // =========================================================

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);

      setForm({
        name: "",
        email: "",
        pollution: "",
        location: "",
        description: "",
        photo: null,
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="sticky top-0 z-50 bg-white shadow-lg">

        <div className="max-w-7xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            <a href="#home" className="flex items-center gap-3">

              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-2xl">
                🇮🇳
              </div>

              <div>
                <h1 className="text-2xl font-black text-green-700">
                  Clean India
                </h1>

                <p className="text-xs text-gray-500">
                  Pollution Awareness
                </p>
              </div>

            </a>

            <div className="hidden md:flex items-center gap-6 font-semibold">

              <a href="#pollution" className="hover:text-green-600">
                Pollution
              </a>

              <a href="#comparison" className="hover:text-green-600">
                Comparison
              </a>

              <a href="#countries" className="hover:text-green-600">
                Countries
              </a>

              <a href="#solutions" className="hover:text-green-600">
                Solutions
              </a>

              <button
                onClick={() => setShowForm(true)}
                className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
              >
                📸 Report Problem
              </button>

            </div>

            <button
              onClick={() => setShowForm(true)}
              className="md:hidden bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Report
            </button>

          </div>

        </div>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-850px overflow-hidden"
      >

        <img
          src={images.air}
          alt="Air pollution"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = images.city;
          }}
        />

        <div className="absolute inset-0 bg-black/70"></div>


        {/* LEFT BORDER IMAGE */}

        <div className="hidden xl:block absolute left-0 top-0 w-40 h-full z-20">

          <img
            src={images.garbage}
            alt="Garbage pollution"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = images.road;
            }}
          />

          <div className="absolute inset-0 bg-red-900/50"></div>

        </div>


        {/* RIGHT BORDER IMAGE */}

        <div className="hidden xl:block absolute right-0 top-0 w-40 h-full z-20">

          <img
            src={images.cleanNature}
            alt="Clean environment"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = images.cleanCity;
            }}
          />

          <div className="absolute inset-0 bg-green-900/40"></div>

        </div>


        <div className="relative z-30 min-h-850px flex items-center justify-center text-center text-white px-6">

          <div className="max-w-5xl">

            <span className="inline-block bg-green-600 px-6 py-3 rounded-full font-bold mb-8">
              🌍 INDIA & THE WORLD
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              India's Pollution

              <span className="block text-orange-400">
                vs
              </span>

              <span className="text-green-400">
                Global Cleanliness
              </span>

            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mt-8 leading-relaxed">
              Explore air, water, roads, transport, noise, stations,
              plastic, garbage and environmental problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">

              <button
                onClick={() => setShowForm(true)}
                className="bg-green-600 hover:bg-green-700 px-9 py-4 rounded-xl font-bold text-lg"
              >
                📸 Report Pollution
              </button>

              <a
                href="#comparison"
                className="bg-white text-gray-900 px-9 py-4 rounded-xl font-bold text-lg hover:bg-gray-200"
              >
                🌍 See Comparison
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-green-600 font-bold tracking-widest">
            UNDERSTAND THE DIFFERENCE
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Pollution vs Cleaner Practices
          </h2>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            This website compares common pollution challenges with
            cleaner environmental practices used by cities around
            the world. It does not mean every Indian city is dirty
            or every foreign city is perfectly clean.
          </p>

        </div>

      </section>


      {/* =====================================================
          POLLUTION CARDS
      ===================================================== */}

      <section
        id="pollution"
        className="py-24 bg-gray-100"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="12 IMPORTANT AREAS"
            title="India Pollution vs Cleaner Practices"
            text="Each card shows the problem first and a cleaner approach second."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            <PollutionCard
              icon="🌫️"
              title="Air Pollution"
              indiaImage={images.air}
              cleanImage={images.cleanNature}
              indiaText="Smoke, dust, traffic and industrial emissions can reduce air quality."
              cleanText="Cleaner transport, green areas and emission controls can improve air quality."
            />

            <PollutionCard
              icon="💧"
              title="Water Pollution"
              indiaImage={images.water}
              cleanImage={images.cleanWater}
              indiaText="Waste and untreated water can affect rivers, lakes and other water sources."
              cleanText="Wastewater treatment and responsible disposal help protect water."
            />

            <PollutionCard
              icon="🛣️"
              title="Road Pollution"
              indiaImage={images.road}
              cleanImage={images.cleanRoad}
              indiaText="Roadside waste, dust and traffic can make streets unhealthy."
              cleanText="Better road maintenance and organized urban planning create cleaner streets."
            />

            <PollutionCard
              icon="🚗"
              title="Transport Pollution"
              indiaImage={images.traffic}
              cleanImage={images.cleanTransport}
              indiaText="Heavy traffic and private vehicles can increase emissions."
              cleanText="Public transport, walking and cycling can reduce traffic pressure."
            />

            <PollutionCard
              icon="🔊"
              title="Noise Pollution"
              indiaImage={images.traffic}
              cleanImage={images.cleanCity}
              indiaText="Horns, construction and traffic can create excessive noise."
              cleanText="Noise rules, awareness and better planning can create quieter areas."
            />

            <PollutionCard
              icon="🚉"
              title="Railway Stations"
              indiaImage={images.station}
              cleanImage={images.cleanStation}
              indiaText="Crowding and litter can affect station cleanliness."
              cleanText="Regular cleaning, bins and organized public spaces improve stations."
            />

            <PollutionCard
              icon="🧴"
              title="Plastic Pollution"
              indiaImage={images.plastic}
              cleanImage={images.recycling}
              indiaText="Single-use plastic can accumulate in streets, drains and water."
              cleanText="Reducing plastic use and improving recycling can reduce waste."
            />

            <PollutionCard
              icon="🗑️"
              title="Garbage Pollution"
              indiaImage={images.garbage}
              cleanImage={images.cleanGreen}
              indiaText="Uncollected garbage can affect streets and communities."
              cleanText="Regular collection, segregation and recycling improve cleanliness."
            />

            <PollutionCard
              icon="🏭"
              title="Industrial Pollution"
              indiaImage={images.factory}
              cleanImage={images.cleanGreen}
              indiaText="Industrial emissions and waste need proper monitoring."
              cleanText="Cleaner technology and environmental controls can reduce impact."
            />

            <PollutionCard
              icon="🚰"
              title="Drainage Problems"
              indiaImage={images.water}
              cleanImage={images.cleanWater}
              indiaText="Blocked or polluted drains can create dirty surroundings."
              cleanText="Regular maintenance and proper wastewater systems help."
            />

            <PollutionCard
              icon="🌳"
              title="Green Environment"
              indiaImage={images.city}
              cleanImage={images.cleanNature}
              indiaText="Rapid urban growth can reduce green spaces in some locations."
              cleanText="Trees, parks and green areas improve the urban environment."
            />

            <PollutionCard
              icon="🏙️"
              title="Public Places"
              indiaImage={images.city}
              cleanImage={images.cleanCity}
              indiaText="Litter and poor maintenance can affect public spaces."
              cleanText="Regular cleaning and responsible public behavior create better spaces."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          LARGE COMPARISON
      ===================================================== */}

      <section
        id="comparison"
        className="py-24 bg-gray-950 text-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="VISUAL COMPARISON"
            title="India Pollution vs Global Cleanliness"
            text="Move your cursor over the pictures to see the zoom effect."
            dark
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-16">

            <BigImage
              image={images.garbage}
              title="🇮🇳 India — Pollution Challenge"
              text="Garbage, waste and environmental problems can affect public spaces."
              danger
            />

            <BigImage
              image={images.cleanNature}
              title="🌍 Cleaner Practice"
              text="Green spaces, responsible waste management and clean public areas create healthier surroundings."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          COUNTRY COMPARISON
      ===================================================== */}

      <section
        id="countries"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="GLOBAL EXAMPLES"
            title="What Can We Learn From Other Countries?"
            text="Singapore, Austria, Japan and the USA have different environmental systems and practices."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

            <CountryCard
              flag="🇸🇬"
              country="Singapore"
              image={images.cleanCity}
              points={[
                "Clean public areas",
                "Strong waste management",
                "Good public transport",
                "Green urban planning",
              ]}
            />

            <CountryCard
              flag="🇦🇹"
              country="Vienna, Austria"
              image={images.cleanGreen}
              points={[
                "Strong public transport",
                "Green spaces",
                "Organized city services",
                "Walkable areas",
              ]}
            />

            <CountryCard
              flag="🇯🇵"
              country="Japan"
              image={images.cleanStation}
              points={[
                "Waste separation",
                "Clean stations",
                "Public awareness",
                "Efficient transport",
              ]}
            />

            <CountryCard
              flag="🇺🇸"
              country="USA"
              image={images.cleanRoad}
              points={[
                "Environmental monitoring",
                "Waste systems",
                "Large infrastructure",
                "Protected natural areas",
              ]}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          TABLE
      ===================================================== */}

      <section className="py-24 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="EASY TO UNDERSTAND"
            title="Complete Comparison"
            text="A simple comparison of common pollution problems and cleaner practices."
          />

          <div className="mt-14 overflow-x-auto rounded-3xl shadow-xl">

            <table className="w-full min-w-850px bg-white">

              <thead>

                <tr className="bg-green-700 text-white">

                  <th className="p-5 text-left">
                    Area
                  </th>

                  <th className="p-5 text-left">
                    🇮🇳 Pollution Challenge
                  </th>

                  <th className="p-5 text-left">
                    🌍 Cleaner Practice
                  </th>

                </tr>

              </thead>

              <tbody>

                <CompareRow
                  icon="🌫️"
                  area="Air"
                  india="Smoke, dust and vehicle emissions"
                  world="Cleaner transport and emission controls"
                />

                <CompareRow
                  icon="💧"
                  area="Water"
                  india="Waste and wastewater"
                  world="Treatment and responsible disposal"
                />

                <CompareRow
                  icon="🛣️"
                  area="Roads"
                  india="Dust, traffic and roadside waste"
                  world="Better maintenance and planning"
                />

                <CompareRow
                  icon="🚗"
                  area="Transport"
                  india="Traffic and vehicle emissions"
                  world="Public transport and cycling"
                />

                <CompareRow
                  icon="🔊"
                  area="Noise"
                  india="Horns, traffic and construction"
                  world="Noise rules and awareness"
                />

                <CompareRow
                  icon="🚉"
                  area="Stations"
                  india="Litter and overcrowding"
                  world="Cleaning and organized systems"
                />

                <CompareRow
                  icon="🧴"
                  area="Plastic"
                  india="Single-use plastic waste"
                  world="Reduction and recycling"
                />

                <CompareRow
                  icon="🗑️"
                  area="Garbage"
                  india="Improper disposal in some areas"
                  world="Collection and segregation"
                />

                <CompareRow
                  icon="🏭"
                  area="Industry"
                  india="Emissions and industrial waste"
                  world="Cleaner technology and controls"
                />

                <CompareRow
                  icon="🌳"
                  area="Green Space"
                  india="Loss of greenery in some areas"
                  world="Parks and urban greenery"
                />

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO WALL
      ===================================================== */}

      <section className="py-24 bg-gray-950">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="PHOTO COMPARISON"
            title="Dirty vs Clean"
            text="Visual comparisons make environmental problems easier to understand."
            dark
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <PhotoCard
              image={images.garbage}
              title="🇮🇳 Waste & Garbage"
              label="POLLUTION"
              danger
            />

            <PhotoCard
              image={images.cleanPark}
              title="🌍 Green Environment"
              label="CLEANER PRACTICE"
            />

            <PhotoCard
              image={images.traffic}
              title="🇮🇳 Traffic & Emissions"
              label="POLLUTION"
              danger
            />

            <PhotoCard
              image={images.cleanTransport}
              title="🌍 Public Transport"
              label="CLEANER PRACTICE"
            />

            <PhotoCard
              image={images.plastic}
              title="🇮🇳 Plastic Waste"
              label="POLLUTION"
              danger
            />

            <PhotoCard
              image={images.cleanNature}
              title="🌍 Protected Nature"
              label="CLEANER PRACTICE"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section
        id="solutions"
        className="py-28 bg-green-900 text-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            small="TAKE ACTION"
            title="How Can We Make India Cleaner?"
            text="Cleaner cities need responsible citizens and effective systems."
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <Solution icon="🗑️" title="Use Bins" text="Put waste in the correct place." />

            <Solution icon="♻️" title="Recycle" text="Separate recyclable waste." />

            <Solution icon="🧴" title="Reduce Plastic" text="Avoid unnecessary single-use plastic." />

            <Solution icon="🚇" title="Public Transport" text="Reduce unnecessary private vehicle use." />

            <Solution icon="🔊" title="Avoid Honking" text="Help reduce unnecessary noise." />

            <Solution icon="💧" title="Protect Water" text="Never dump waste into water." />

            <Solution icon="🌳" title="Plant Trees" text="Protect and increase green spaces." />

            <Solution icon="📸" title="Report Pollution" text="Take a photo and report problems." />

          </div>

        </div>

      </section>


      {/* =====================================================
          REPORT SECTION
      ===================================================== */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative h-600px rounded-[40px] overflow-hidden shadow-2xl">

            <img
              src={images.road}
              alt="Report pollution"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = images.air;
              }}
            />

            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">

              <div className="text-white max-w-3xl px-6">

                <div className="text-7xl">
                  📸
                </div>

                <h2 className="text-5xl md:text-6xl font-black mt-6">
                  See Pollution?
                </h2>

                <p className="text-xl text-gray-200 mt-5">
                  Take a photo and report the problem.
                </p>

                <button
                  onClick={() => setShowForm(true)}
                  className="mt-9 bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl font-bold text-lg"
                >
                  Report a Problem
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-12">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-2xl">
                  🇮🇳
                </div>

                <h3 className="text-2xl font-black">
                  Clean India
                </h3>

              </div>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Understanding pollution today can help us build
                cleaner and healthier communities tomorrow.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-bold mb-5">
                Pollution
              </h3>

              <div className="space-y-3 text-gray-400">
                <p>🌫️ Air</p>
                <p>💧 Water</p>
                <p>🛣️ Roads</p>
                <p>🚗 Transport</p>
                <p>🔊 Noise</p>
              </div>

            </div>


            <div>

              <h3 className="text-xl font-bold mb-5">
                Environment
              </h3>

              <div className="space-y-3 text-gray-400">
                <p>🧴 Plastic</p>
                <p>🗑️ Garbage</p>
                <p>🏭 Industry</p>
                <p>🌳 Green Spaces</p>
                <p>💧 Water Sources</p>
              </div>

            </div>


            <div>

              <h3 className="text-xl font-bold mb-5">
                Take Action
              </h3>

              <p className="text-gray-400 mb-5">
                Found a pollution problem?
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold"
              >
                📸 Report Problem
              </button>

            </div>

          </div>


          <div className="border-t border-gray-800 mt-14 pt-8 text-center">

            <p className="text-gray-500">
              © 2026 Clean India 🇮🇳
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Cleaner India • Better Cities • Better Future
            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          REPORT MODAL
      ===================================================== */}

      {showForm && (

        <div className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl">

            <div className="bg-green-700 text-white p-7 flex justify-between">

              <div>

                <h2 className="text-3xl font-black">
                  Report Pollution
                </h2>

                <p className="text-green-100">
                  Frontend-only demonstration
                </p>

              </div>

              <button
                onClick={() => setShowForm(false)}
                className="text-4xl"
              >
                ×
              </button>

            </div>


            {submitted ? (

              <div className="p-16 text-center">

                <div className="text-7xl">
                  ✅
                </div>

                <h2 className="text-3xl font-black text-green-700 mt-5">
                  Report Submitted!
                </h2>

                <p className="text-gray-600 mt-3">
                  This is only a frontend demonstration.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="p-7 space-y-6"
              >

                <Input
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />


                <div>

                  <label className="font-bold block mb-2">
                    Pollution Type
                  </label>

                  <select
                    name="pollution"
                    value={form.pollution}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-xl px-4 py-3 bg-white"
                  >

                    <option value="">
                      Select pollution type
                    </option>

                    <option>🌫️ Air Pollution</option>
                    <option>💧 Water Pollution</option>
                    <option>🛣️ Road Pollution</option>
                    <option>🚗 Transport Pollution</option>
                    <option>🔊 Noise Pollution</option>
                    <option>🚉 Station Pollution</option>
                    <option>🧴 Plastic Pollution</option>
                    <option>🗑️ Garbage</option>
                    <option>🏭 Industrial Pollution</option>
                    <option>🚰 Drainage Problem</option>
                    <option>🌳 Environmental Damage</option>

                  </select>

                </div>


                <Input
                  label="Location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                />


                <div>

                  <label className="font-bold block mb-2">
                    Describe the Problem
                  </label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe what you saw..."
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>


                <div>

                  <label className="font-bold block mb-2">
                    Upload Photo
                  </label>

                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  />

                </div>


                <div className="flex gap-4">

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 border rounded-xl py-4 font-bold hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white rounded-xl py-4 font-bold hover:bg-green-700"
                  >
                    Submit Report
                  </button>

                </div>

              </form>

            )}

          </div>

        </div>

      )}

    </div>
  );
};


// =============================================================
// SECTION TITLE
// =============================================================

const SectionTitle = ({ small, title, text, dark = false }) => {
  return (
    <div className="text-center">

      <span
        className={`font-bold tracking-widest ${
          dark ? "text-green-400" : "text-green-600"
        }`}
      >
        {small}
      </span>

      <h2
        className={`text-4xl md:text-6xl font-black mt-4 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`max-w-3xl mx-auto text-lg mt-6 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {text}
      </p>

    </div>
  );
};


// =============================================================
// POLLUTION CARD
// =============================================================

const PollutionCard = ({
  icon,
  title,
  indiaImage,
  cleanImage,
  indiaText,
  cleanText,
}) => {

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

      {/* INDIA */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={indiaImage}
          alt={`${title} pollution`}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80";
          }}
        />

        <div className="absolute inset-0 .bg-gradient-to-t from-red-950/90 to-transparent"></div>

        <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold">
          🇮🇳 INDIA
        </div>

        <div className="absolute bottom-4 left-5 text-white">

          <div className="text-sm font-bold">
            POLLUTION CHALLENGE
          </div>

          <h3 className="text-2xl font-black">
            {icon} {title}
          </h3>

        </div>

      </div>


      <div className="p-6 border-b">

        <p className="text-sm font-bold text-orange-600 mb-2">
          🇮🇳 THE PROBLEM
        </p>

        <p className="text-gray-600 leading-relaxed">
          {indiaText}
        </p>

      </div>


      {/* CLEANER */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={cleanImage}
          alt={`${title} cleaner practice`}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80";
          }}
        />

        <div className="absolute inset-0 .bg-gradient-to-t from-green-950/90 to-transparent"></div>

        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
          🌍 GLOBAL
        </div>

        <div className="absolute bottom-4 left-5 text-white">

          <div className="text-sm font-bold">
            CLEANER PRACTICE
          </div>

          <h3 className="text-2xl font-black">
            {icon} Better Approach
          </h3>

        </div>

      </div>


      <div className="p-6 bg-green-50">

        <p className="text-sm font-bold text-green-700 mb-2">
          🌍 THE BETTER PRACTICE
        </p>

        <p className="text-gray-600 leading-relaxed">
          {cleanText}
        </p>

      </div>

    </div>
  );
};


// =============================================================
// BIG IMAGE
// =============================================================

const BigImage = ({
  image,
  title,
  text,
  danger = false,
}) => {

  return (
    <div
      className={`group relative h-650px rounded-[35px] overflow-hidden shadow-2xl border-8 ${
        danger ? "border-orange-500" : "border-green-500"
      }`}
    >

      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        onError={(e) => {
          e.currentTarget.src = danger
            ? "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80"
            : "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80";
        }}
      />

      <div className="absolute inset-0 .bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 p-9">

        <span
          className={`px-5 py-2 rounded-full font-bold ${
            danger ? "bg-orange-600" : "bg-green-600"
          }`}
        >
          {danger ? "🇮🇳 INDIA" : "🌍 GLOBAL"}
        </span>

        <h3 className="text-4xl md:text-5xl font-black text-white mt-5">
          {title}
        </h3>

        <p className="text-gray-200 text-lg mt-4 max-w-xl">
          {text}
        </p>

      </div>

    </div>
  );
};


// =============================================================
// COUNTRY CARD
// =============================================================

const CountryCard = ({
  flag,
  country,
  image,
  points,
}) => {

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl border hover:-translate-y-3 transition">

      <div className="relative h-56 overflow-hidden">

        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          onError={(e) => {
            e.currentTarget.src = imagesFallback();
          }}
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-3 rounded-xl font-bold">

          <span className="text-2xl">
            {flag}
          </span>

          <span className="ml-2">
            {country}
          </span>

        </div>

      </div>

      <div className="p-6">

        <h3 className="text-xl font-black mb-4">
          Cleaner Practices
        </h3>

        <div className="space-y-3">

          {points.map((point, index) => (
            <p
              key={index}
              className="text-gray-600"
            >
              ✅ {point}
            </p>
          ))}

        </div>

      </div>

    </div>
  );
};


// =============================================================
// FALLBACK IMAGE
// =============================================================

const imagesFallback = () => {
  return "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80";
};


// =============================================================
// COMPARISON ROW
// =============================================================

const CompareRow = ({
  icon,
  area,
  india,
  world,
}) => {

  return (
    <tr className="border-b hover:bg-green-50 transition">

      <td className="p-5 font-black whitespace-nowrap">
        {icon} {area}
      </td>

      <td className="p-5 text-gray-700">
        ❌ {india}
      </td>

      <td className="p-5 text-green-700">
        ✅ {world}
      </td>

    </tr>
  );
};


// =============================================================
// PHOTO CARD
// =============================================================

const PhotoCard = ({
  image,
  title,
  label,
  danger = false,
}) => {

  return (
    <div className="group relative h-450px rounded-3xl overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        onError={(e) => {
          e.currentTarget.src = imagesFallback();
        }}
      />

      <div
        className={`absolute inset-0 .bg-gradient-to-t ${
          danger
            ? "from-red-950/90"
            : "from-green-950/90"
        } via-transparent to-transparent`}
      ></div>

      <div className="absolute bottom-0 p-8 text-white">

        <span
          className={`px-4 py-2 rounded-full font-bold ${
            danger
              ? "bg-orange-600"
              : "bg-green-600"
          }`}
        >
          {label}
        </span>

        <h3 className="text-3xl font-black mt-5">
          {title}
        </h3>

      </div>

    </div>
  );
};


// =============================================================
// SOLUTION
// =============================================================

const Solution = ({
  icon,
  title,
  text,
}) => {

  return (
    <div className="bg-white/10 border border-white/20 rounded-3xl p-7 text-center hover:bg-white/20 hover:-translate-y-2 transition">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="text-xl font-black mt-4">
        {title}
      </h3>

      <p className="text-green-100 mt-3">
        {text}
      </p>

    </div>
  );
};


// =============================================================
// INPUT
// =============================================================

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {

  return (
    <div>

      <label className="font-bold block mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
      />

    </div>
  );
};


export default Indian;

