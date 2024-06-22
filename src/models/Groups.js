class Group {
    constructor(id, name, description, members, imgUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.members = members;
        this.imgUrl = imgUrl;
    }

    addMember(member) {
        this.members.push(member);
    }

    removeMember(member) {
        this.members = this.members.filter(m => m !== member);
    }

    getMembers() {
        return this.members;
    }

    getImgUrl() {
        return this.imgUrl;
    }

    makeAdmin(member) {
        this.members = this.members.map(m => {
            if (m === member) {
                return { ...m, isAdmin: true };
            }
            return m;
        });
    }
}