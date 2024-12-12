const { STATUS_CODES, STATUS_MESSAGES } = require("../Config/constant");

const subjectModel = new (require("../Model/subjects"))();

class subjectController {
  // add subject
  async add(req, res) {
    try {
      let data = await subjectModel.add(req?.body);

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler.conflict(undefined, data?.message);
      }

      return res.handler.success(data, STATUS_MESSAGES.SUBJECT.ADD);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update subject
  async update(req, res) {
    try {
      let data = await subjectModel.update(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler(undefined, STATUS_MESSAGES.NOT_FOUND.SUBJECT);
      }

      if (data.status === STATUS_CODES.ALREADY_REPORTED) {
        return res.handler(undefined, data?.message);
      }

      return res.handler.success(data, STATUS_MESSAGES.SUBJECT.UPDATE);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // update subject status
  async status(req, res) {
    try {
      let data = await subjectModel.status(req?.body);

      if (data.status === STATUS_CODES.NOT_FOUND) {
        return res.handler(undefined, STATUS_MESSAGES.NOT_FOUND.SUBJECT);
      }

      return res.handler.success(data, STATUS_MESSAGES.SUBJECT.STATUS_CHANGE);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // delete subject
  async delete(req, res) {
    try {
      let data = await subjectModel.delete(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.SUBJECT);
      }

      return res.handler.success(data, STATUS_MESSAGES.SUBJECT.DELETE);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // getById subject
  async getById(req, res) {
    try {
      let data = await subjectModel.getById(req?.params?.id);

      if (data?.status === STATUS_CODES.NOT_FOUND) {
        return res.handler.notFound(undefined, STATUS_MESSAGES.NOT_FOUND.SUBJECT);
      }

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }

  // list subject
  async list(req, res) {
    try {
      let data = await subjectModel.list();

      return res.handler.success(data);
    } catch (error) {
      res.handler.serverError(error);
    }
  }
}
module.exports = subjectController;
