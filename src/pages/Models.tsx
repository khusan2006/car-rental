import CarsCard from "@/components/CarsCard"
import PagesHero from "@/components/PagesHero"
import { CAR_DATA } from "@/data/CarData"

const Models = () => {
  return (
    <section className="relative">
      <PagesHero name="vehicles models" />
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 px-6 md:px-16 gap-8 py-20">
        {CAR_DATA.map(car => (
            <CarsCard car={car} />
        ))}
      </div>
    </section>
  )
}

export default Models
