import React from 'react';
import { NavMenu } from '../components/NavMenu';
import { ResumeCard } from '../components/ResumeCard';
import { Grid, Box, Typography, Divider, Avatar, List, ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { Email, Phone }  from '@mui/icons-material';

const profile = {
    name: 'Dan Forrest',
	address: 'Arlington, VA (Remote)',
    avatar: './src/assets/img/df.jpg',
    summary: 'Experienced Senior Software Engineer and Developer with a proven track record of architecting systems and leading development, integration, and management of multiple business critical applications and processes. Adept at building full-stack, public-facing applications, managing projects, and generating cloud-based solutions to streamline business processes.',
    contacts: [
        {
            icon: Email,
            label: 'Email',
			value: 'dan4ist@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '(636) 346-8103'
        },
    ],
    skills: [
        {
            category: 'Programming Languages',
			skills: 'C#, SQL, JavaScript, HTML, CSS, Python, Java'
        },
        {
            category: 'Frameworks',
            skills: '.NET Core, ASP.NET, Web Forms, MVC, Entity Framework, React, Vite, REST, SOAP'
        },
        {
            category: 'Products',
            skills: 'Azure, Git, Visual Studio, VSCode, Docker, Bootstrap, Material UI, SSMS, Azure Data Studio, Azure Storage Explorer, MSOffice'
        },
        {
            category: 'Management',
            skills: 'Project Management, Agile, Waterfall, SDLC, SOA, DevOps, Technical Interviewing'
        },
        {
            category: 'Certifications & Recognition',
            skills: 'CompTIA Security+, CompTIA Network+, ITIL v3 Foundation, HQDA, CIO/G-6 3-Star Commander\'s Coin, NETCOM/9th S.C. (A) 2-Star Commander\'s Coin'
        },
    ],
    education: [
        {
            degree: 'M.P.S Technology Management',
            date: 'May 2015',
            school: 'Georgetown University, Washington, D.C.'
        },
		{
			degree: 'B.S. Computer Science',
			date: 'May 2009',
			school: 'University of Miami, Miami, FL'
        }
    ],
    experience: [
        {
            title: 'Senior Software Engineer, American Institutes for Research',
            date: 'May 2017 - Present (8 years)',
            description: [
                'Principle developer responsible for designing and implementing multiple web applications, services, functions, and integrations within the organization using .NET, SQL, APIs, Azure, JavaScript, HTML, and CSS. These include accounting, payroll, performance management, international travel, employee benefits, facilities management, data governance, and human resources information management.',
                'Built, updated, and maintained full-stack .NET applications spanning versions from 4.0 to 9.0 utilizing various SQL backends (MySQL, MSSQL, Oracle), Bootstrap, JavaScript, jQuery, Blazor, & MVC.',
                'Created internal nuget packages for usage across teams formalizing security objects, email handling, and KeyVault secret retrieval.',
                'Led development and project management of multiple public-facing web applications ingesting and securing confidential direct deposit (ACH) and W-9 forms for company vendors. Additionally created and managed the backend service to decrypt and push the files into OnBase document management system.',
                'Built multiple integrations between AIR and 3rd-party vendor systems by creating and consuming RESTful APIs, SOAP web services, FTP\'s, & webhooks.',
                'Integrated SharePoint hosted data with internal business applications using Microsoft Graph/Entra API and the SharePoint Client Server Object Model (CSOM).',
                'Led multiple tehcnical interviews for developer positions within the company'
            ]
        },
        {
            title: 'Senior Software Engineer, Definitive Logic (now ManTech)',
            date: 'June 2012 - May 2017 (5 years)',
            description: [
                'Led development of the Veterans Affairs (VA) Health Systems Planning Application (HSPA), a .NET application utilizing Spring, NHibernate, Aspose for report generation, Parallax scrolling using Stellar.js, and HighCharts.js for data visualization.',
                'Integrated multiple databases and web services while reducing and simplifying the HSPA code base and incorporating new technologies into the legacy application.',
                'Completed all Capability Maturity Model Integration (CMMI) Level 3 actions for the HSPA system.',
                'Led SharePoint development for the VA Office of Quality, Safety, & Value developing lessons learned capture mechanisms, a wiki site, and knowledgebase.',
                'Migrated site collections from SharePoint 2007 to 2010 and utilized SharePoint Designer \'07/\'10, SPServices, jQuery, CAML, XSLT, Bootstrap and custom scripts to aggregate and display data.',
                'Interviewed multiple candidates for positions in SharePoint, .NET, web development, quality assurance, and project management.'
            ]
        },
        {
            title: 'IT Specialist, Headquarters, U.S., Dept. of Army, Chief Information Office (CIO)/G-6',
            date: 'August 2009 - June 2012 (3 years)',
            description: [
                'Army Knowledge Leadership (AKL) program graduate. The AKL program was a 2-year leadership-oriented, rotation-based program designed to provide expansive early career exposure to a wide array of experience and knowledge across the CIO/G-6 and Army as a whole.',
                'Charter member and system administrator of the Enterprise Collaboration Services (ECS) initiative to bring 800+ disparate SharePoint instances within the Army into a single managed service.',
                'Created and managed the Army service level agreements (SLA), information structures, and service taxonomies for ECS.',
                'Researched, created, and briefed presentations for Senior Army leadership (SES, Commanding Generals) on burgeoning official and unofficial usage of cell phones and their expanding capabilities.',
                'Responded to network security issues, classified information spillages, and violations of Army Regulation (AR) 25-2 for the Ft. Carson Network Enterprise Center (NEC).',
                'Improved wireless security on Ft. Carson through war-driving to find unauthorized networks on base.'
            ]
        },
        {
            title: 'Assistant Facility Supervisor, University of Miami Wellness Center',
            date: '2008 - 2009 (2 years)',
            description: [
                'Opened the facility and oversaw operations for morning shift workers at University gym.',
                'Assisted guests with reservations, facilty services, and checking-in.',
                'Lifeguarded the indoor pool.'
            ]

        },
        {
            title: 'Lifeguard, University of Miami Pool',
            date: '2006 - 2008 (2 years)',
            description: [
                'Ensured guest and swimmer safety at the outdoor University pool.'
            ]
        },
        {
            title: 'Lifeguard, Swimming Instructor Chesterfield Family Aquatic Center',
            date: '2005 - 2006 (1 year)',
            description: [
                'Ensured guest and swimmer safety at the county pool.'
            ]
        },
        {
            title: 'Employee, Best Buy',
            date: '2004 - 2005 (2 years)',
            description: [
                'Sold cell phones, mp3 players, and iPod\'s.'
            ]
        },
        {
            title: 'Employee, Circuit City',
            date: '2003 - 2004 (1 year)',
            description: [
                'Slung CD\'s and video games.'
            ]
        },
        {
            title: 'Employee, McDonald\'s',
            date: '2001 - 2003  (2 years)',
            description: [
                'Flipped burgers, handled drive-thru, constructed food, reconciled cash drawers, cleaned the lobby, opened the store',
                'Created off-menu items such as the Pounder buger (10 patties), breakfast scramble, and double-grilled-chicken sandwich'
            ]
        },
        {
            title: 'Manager, Self-employed',
            date: '1986 - 2000  (14 years)',
            description: [
                'Running a real loose ship'
            ]
        }
    ]
};

function Resume() {
    return (
		<div>
			<NavMenu />
            <Grid container spacing={2} mt={2}>
                {/* Left Column */}
				<Grid item xs={12} md={4}>
					{/*PROFILE*/}
                    <ResumeCard>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                                {profile.name}
                            </Typography>
                            <Typography color="text.secondary" sx={{ mt: 1 }}>
                                {profile.address}
                            </Typography>
                            {/* ... other personal information */}
                        </Box>

                        {/* Contact Details */}
                        <Divider sx={{ mt: 2 }} />
                        <List component="nav" dense>
                            {profile.contacts.map((contact, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <contact.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={contact.label} secondary={contact.value} />
                                </ListItemButton>
                            ))}
                        </List>
                        <Divider sx={{ mb: 2 }} />

                        {/* Skills */}
                        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                            Skills
                        </Typography>
                        <List component="nav" dense>
                            {profile.skills.map((skill, index) => (
                                <ListItemButton key={index}>
                                    <ListItemText primary={skill.category} secondary={skill.skills} />
                                </ListItemButton>
                            ))}
                        </List>
                    </ResumeCard>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={8}>
                    {/*Summary*/}
                    <ResumeCard>
                        <Typography variant='h6' component='div'>
                            Summary
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.summary}
                        </Box>
                    </ResumeCard>
                    {/* Education */}
                    <ResumeCard>
                        <Typography variant="h6" component="div">
                            Education
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            {profile.education.map((education, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 1 }}>
                                        <Typography variant="subtitle1">{education.degree}</Typography>
                                        <Typography variant="body2" color="text.secondary">{education.date}</Typography>
                                        <Typography variant="body2">
                                            {education.school}
                                        </Typography>
                                    </Box>
                                    {/* Divider but not for single or last item */}
                                    {index !== profile.education.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>

                    {/* Work Experience */}
                    <ResumeCard>
                        <Typography variant="h6" component="div">
                            Work Experience
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.experience.map((experience, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="subtitle1">{experience.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{experience.date}</Typography>
                                        <List sx={{ listStyleType: 'disc', mt: 1, mx: 4 }} dense>
                                            {experience.description.map((bullet, index) => (
                                                <ListItem key={index} sx={{ display: 'list-item' }}>
													{bullet}
												</ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                    {/* Divider but not for single or last item */}
                                    {index !== profile.experience.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}

                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>
                </Grid>
            </Grid>
		</div>

	);
}

export default Resume;