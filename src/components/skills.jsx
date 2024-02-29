import React from 'react';

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

function SkillGroup({ skillGroup }) {
	const name =
		skillGroup.name ?? skillGroup.skills[0].name ?? capitalizeFirstLetter(skillGroup.skills[0].img);
	return (
		<div className="progress-item">
			<span className="progress-title">
				{skillGroup.skills &&
					skillGroup.skills.map((skill, index) => <SkillImage key={index} skill={skill} />)}
				{name}
			</span>
			<div className="progress">
				<div className="progress-bar" style={{ width: skillGroup.completed + '%' }}></div>
			</div>
		</div>
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
