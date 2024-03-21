import Accordion from 'react-bootstrap/Accordion';
import CV from "../../data/cv-en.json"

export default function About() {
    return (
        <div className="about">
            < section className="site-welcome about"  >
                <h2>Hi! I am Magda and I need your help.</h2>
                <p>{CV.intro}</p>
            </section >
            <section className="education about">
                <h4>Education - from analyst/statistician to .NET developer with backend focus.</h4>
                <Accordion defaultActiveKey="present" >
                    {
                        CV.education.map(school => {
                            return (
                                <Accordion.Item eventKey={school.dateEnd} key={school.dateEnd}>
                                    <Accordion.Header>
                                        <h6><span className="period">{school.dateStart} - {school.dateEnd}: </span>
                                            <span className="importantText">{school.program}</span> at {school.school}, {school.place}</h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {school.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </section>

            <section className="experience about">
                <h4>Work experience - many years as a programming analyst.</h4>
                <Accordion defaultActiveKey="Present" >
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
            </section>

        </ div>

    )
}