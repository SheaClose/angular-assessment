
 ``5``
 Product needs to be a directive.  The template is provided for you in product-tmpl.html.
 It needs to have an isolate scope and take in the product and show the details.
 Clicking on the title will navigate to product details.
 Clicking on the image will collapse the image and show a link that says "show image" instead.  Click on "show image" will hide the "show image" link and show the actual image.
 All the styles are completed for you already so you'll just need to display the data in the right spot. LOOK FOR COMMENTS.

 ``6``
 Show all the products on the shop.html page using your product directive.

 ``7``
 After your data is displaying correctly you'll need to get the product-details view configured.
 In your routes file add a route called details. This route is going to have an id being passed in. The url will look like this detail/:id.
 Now that the route is setup you can finish the links in the shop.html file.

 The link that points to the product detail will need to pass along the id of the item being clicked using an ui-sref.

``8``
Product-details.html will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route.
After you have that id you'll need to make an api call to http://practiceapi.devmounta.in/products/ + the id being passed in the route.
This will return the specific item based off the id you passed.
Put that item on $scope and display in the view.

``9``
Host your solution on github pages.
* Open the termal to where this assessment is
* Add and commit all of your completed code.
* Type git checkout -b gh-pages
* Type git push -u origin gh-pages
* Find your account name on github and insert it into this url http://YourGithubAccountName.github.io/angular-assessment
Open that url to make sure it works, then send that url to your assigned mentor!

# Congratulations! you have finished the assessment
