import * as helloController from "@controllers/hello";
import { Request, Response } from "express";
import "jest";

test(__dirname, () => {
  const sendMock = jest.fn();
  const response = { send: () => {} } as Response;
  const request = {} as Request;
  response.send = sendMock;
  helloController.index(request, response);
  expect(sendMock.mock.calls.length).toBe(1);
});
