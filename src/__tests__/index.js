import {expect} from 'chai';
import {createApp} from '../';

const {describe, it} = global;

describe('Module', () => {
  describe('createApp', async () => {
    it('should create app with provided args', () => {
      const context = {aa: 10};
      const app = createApp(context);
      expect(app.context).to.deep.equal(context);
    });
  });
});
