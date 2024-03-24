import Accordion from 'react-bootstrap/Accordion';
import CV from "../../data/cv-en.json"


export default function About() {
    return (
        <div className="about">
            < section className="site-welcome"  >
                <h2>My name is Magda.</h2>
                <p>Yesterday an analyst. Tomorrow a .NET developer (maybe).</p>
            </section >
            <section className="shortcuts">

            </section>
            <section className="cv">
                <article className="education">
                    <h4>Education <span className="lessImportantText">- from analyst to .NET developer with backend focus</span></h4>
                    <Accordion defaultActiveKey="2025" >
                        {
                            CV.education.map(school => {
                                return (
                                    <Accordion.Item eventKey={school.dateEnd} key={school.dateEnd}>
                                        <Accordion.Header>
                                            <h6><span className="period">{school.dateStart} - {school.dateEnd}: </span>
                                                <span className="importantText">{school.program}</span> at {school.school}, {school.place}</h6>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {
                                                    school.description?.map(desc => { return <li key={desc}>{desc}</li> })

                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </article>

                <article className="experience">
                    <h4>Work experience <span className="lessImportantText">- many years as a programming analyst</span></h4>
                    <Accordion defaultActiveKey="present" >
                        {/* flush */}
                        {
                            CV.experience.map(job => {
                                return (
                                    <Accordion.Item eventKey={job.dateEnd} key={job.dateEnd}>
                                        <Accordion.Header>
                                            <h6><span className="period">{job.dateStart} - {job.dateEnd}: </span>
                                                <span className="importantText"> {job.position} </span> at {job.department}, {job.company}</h6>
                                            {job.description}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {
                                                    job.tasks?.map(task => { return <li key={task}>{task}</li> })

                                                }
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                    </Accordion>
                </article>
                <article className="Languages">
                </article>
            </section>

        </ div>

    )
}