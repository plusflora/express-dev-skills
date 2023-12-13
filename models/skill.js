//the array that we're focusing on. "changes" will be made to this array. ie: adding, editing, and removing skills
const skills = [
    {id:83924, skill: 'HTML', nailed: true},
    {id:82302, skill: 'CSS', nailed: true},
    {id:28394, skill: 'JavaScript', nailed: true},
    {id:85823, skill: 'MongoDB', nailed: false},
    {id:48819, skill: 'React', nailed: false},
    {id:65763, skill: 'Spanish', nailed: false},
    {id:72838, skill: 'Skateboarding', nailed: false}
]

//what we're allowing "out of this room"
module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne,
    update
}

//the functionality of what we're allowing "out of this room" 
//the ability to pull all skills
function getAll() {
    return skills
}

//the ability to pull one skill based on the id
function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

//the ability to add a new skill to the array and give it an id so we can pull it through other the functions here: deleteOne, update, getOne
function create(skill) {
    skill.id = Date.now() % 100000;
    skill.nailed = false;
    skills.push(skill)
}

//the ability to remove a skill from the array by id
function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

//the ability to update a skill on the array by id
function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill)
} 