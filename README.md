# ProtractorSandbox
## Running the tests

To run the tests, in a command window, type:
<pre>protractor conf.js</pre>

This assumes that
<ol>
  <li> you have a file conf.js in the current directory, </li>
  <li> for anything to happen, that conf.js references a spec2.js (right now) </li>
</ol>
<hr/>
For more detailed points, see the wiki: https://github.com/aadennis/ProtractorSandbox/wiki
<hr/>
As a dumping ground for Selenium, this does a basic assert on the localhost if started with Django?
from selenium import webdriver
browser = webdriver.Firefox()
browser.get('http://localhost:8000')
assert 'Django: the Web framework for perfectionists with deadlines.' in browser.title






