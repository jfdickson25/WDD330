export class Comment {
    constructor(hikeId, comment, type='hike') {
        this.comment = comment,
        this.hikeId = hikeId,
        this.type = type,
        this.createdDate = new Date(),
        this.commentId = Date.now()
    }
}