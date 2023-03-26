const WorkingDirectory = require("../models/working-directory");
const GitCommand = require("../models/git-command");

const chai = require('chai');
const expect = chai.expect;

describe("Testing GitCommand.status()", function(){

    it('Should return information if has changes in directory', function(){
        let wd = new WorkingDirectory();
        wd.addFile("index.html", "views", "<html>Hello</html>");
        wd.addFile("index.js", "assets/scripts", "alert('Hi!')");

        let git = new GitCommand(wd);
        git.init();
        git.add('views/index.html');
        git.add('assets/scripts/index.js');
        let output = git.status();

        expect(output).to.equal('You have  change/s.\nviews/index.html\nassets/scripts/index.js');
    });
});