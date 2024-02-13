import PagesHero from "@/components/PagesHero"
import TeamCard from "@/components/TeamCard"
import { TEAM_DATA } from "@/data/TeamData"

const Team = () => {
  return (
    <section>
      <PagesHero name="team" />
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-20 px-6 md:px-24 py-20">
        {TEAM_DATA.map(person => (
            <TeamCard person={person} />
        ))}
    </div>
    </section>
  )
}

export default Team
