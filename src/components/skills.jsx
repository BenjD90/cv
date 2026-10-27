import React from 'react';
import Link from '@docusaurus/Link';
import { skillUrlsBySkill } from './skill';

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function SkillImage({ skill }) {
	return (
		<img
			loading="lazy"
			src={'/cv/img/skills/logos/small/' + skill.img + '.png'}
			alt={capitalizeFirstLetter(skill.img)}
			title={skill.name ?? capitalizeFirstLetter(skill.img)}
		/>
	);
}

function SkillImageLink({ skill, url }) {
	if (!skill.img) {
		return null;
	}
	const img = <SkillImage skill={skill} />;
	if (url) {
		return <Link to={url}>{img}</Link>;
	}
	return img;
}

function SkillGroup({ skillGroup }) {
	return (
		<div className="progress-item">
			<span className="progress-title">
				{skillGroup.skills &&
					skillGroup.skills.map((skill, index) => {
						const name = skill.name ?? capitalizeFirstLetter(skill.img);
						const url = skill.url ?? skillUrlsBySkill[name];
						return (
							<span key={index}>
								<SkillImageLink skill={skill} url={url} />
								<SkillNameLink
									skill={skill}
									name={name}
									url={url}
									index={index}
									total={skillGroup.skills.length}
								/>
							</span>
						);
					})}
			</span>
			<div className="progress">
				<div className="progress-bar" style={{ width: skillGroup.completed + '%' }}></div>
			</div>
		</div>
	);
}

function SkillNameLink({ skill, name, url, index, total }) {
	const prefix = index > 0 ? (index === total - 1 ? ' & ' : ', ') : null;
	return (
		<>
			{prefix}
			{url ? <Link to={url}>{name}</Link> : name}
		</>
	);
}

export default function SkillProgress({ skillGroups }) {
	return (
		<div className="progress-wrapper">
			{skillGroups.map((skillGroup, index) => (
				<SkillGroup key={index} skillGroup={skillGroup} />
			))}
		</div>
	);
}
