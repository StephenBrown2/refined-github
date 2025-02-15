# <img src="source/icon.png" width="45" align="left"> Refined GitHub

[link-cws]: https://chrome.google.com/webstore/detail/refined-github/hlepfoohegkhhmjieoechaddaejaokhf "Version published on Chrome Web Store"
[link-amo]: https://addons.mozilla.org/en-US/firefox/addon/refined-github-/ "Version published on Mozilla Add-ons"

> Browser extension that simplifies the GitHub interface and adds useful features

We use GitHub a lot and notice many annoyances we'd like to fix. So here be dragons.

Our hope is that GitHub will notice and implement some of these much needed improvements. So if you like any of these improvements, please email [GitHub support](mailto:support@github.com) about doing it.

GitHub Enterprise is also supported. More info in the options.

---

<a href="https://entwicklerstube.com">
	<img src="https://sindresorhus.com/assets/thanks/entwicklerstube-refined-github.svg" align="right">
</a>

- [Latest changes](https://github.com/sindresorhus/refined-github/issues/1137) *(Updated regularly. Subscribe!)*
- [Product Hunt submission](https://www.producthunt.com/posts/refined-github) *(2017-07-08)*
- [What's new lately](https://blog.sindresorhus.com/whats-new-in-refined-github-836d05582df7) *(2017-06-23)*
- [Original announcement](https://blog.sindresorhus.com/refined-github-21185789685d) *(2016-03-31)*


## Install

- [**Chrome** extension][link-cws] [<img valign="middle" src="https://img.shields.io/chrome-web-store/v/hlepfoohegkhhmjieoechaddaejaokhf.svg?label=%20">][link-cws]
- [**Firefox** add-on][link-amo] [<img valign="middle" src="https://img.shields.io/amo/v/refined-github-.svg?label=%20">][link-amo]
- **Opera** extension: Use [this Opera extension](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/) to install the Chrome version.


## Highlights

<table>
	<tr>
		<th width="50%">
			Mark issues and pull requests as unread<br>
			<em>(They will reappear in Notifications)</em>
		</th>
		<th width="50%">
			Fix merge conflicts in a click
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img width="245" src="https://user-images.githubusercontent.com/1402241/27847663-963b7d7c-6171-11e7-9470-6e86d8463771.png">
		</td>
		<td>
			<img width="618" src="https://user-images.githubusercontent.com/1402241/54978791-45906080-4fdc-11e9-8fe1-45374f8ff636.png">
		</td>
	</tr>
</table>

<table>
	<tr>
		<th width="50%">
			Reaction avatars showing <i>who</i> reacted to a comment
		</th>
		<th width="50%">
			The option to wait for checks when merging a PR
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img src="https://user-images.githubusercontent.com/1402241/34438653-f66535a4-ecda-11e7-9406-2e1258050cfa.png">
		</td>
		<td>
			<img src="https://user-images.githubusercontent.com/1402241/35192861-3f4a1bf6-fecc-11e7-8b9f-35ee019c6cdf.gif">
		</td>
	</tr>
</table>

<table>
	<tr>
		<th width="50%">
			Clickable references to issues and pull requests
		</th>
		<th width="50%">
			Links to an issue's closing commit or pull request
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td>
			<img src="https://cloud.githubusercontent.com/assets/170270/25370217/61718820-29b3-11e7-89c5-2959eaf8cac8.png">
		</td>
		<td>
			<img src="https://user-images.githubusercontent.com/1402241/35973522-5c00acb6-0d08-11e8-89ca-03071de15c6f.png">
			<img src="https://user-images.githubusercontent.com/1402241/37037746-8b8eac8a-2185-11e8-94f6-4d50a9c8a152.png">
		</td>
	</tr>
</table>

### Added features

- Copy the canonical link of a file with [the <kbd>y</kbd> hotkey](https://help.github.com/articles/getting-permanent-links-to-files/).
- Indent text with <kbd>tab</kbd> inside comment fields (<kbd>shift</kbd> <kbd>tab</kbd> for original behavior).
- [Use the PR’s title and description when merging](https://github.com/sindresorhus/refined-github/issues/276) and [update the PR’s title to the merge commit title, if changed.](https://user-images.githubusercontent.com/1402241/51669708-9a712400-1ff7-11e9-913a-ac1ea1050975.png)
- [View linked gists inline in comments.](https://user-images.githubusercontent.com/6978877/33911900-c62ee968-df8b-11e7-8685-506ffafc60b4.PNG)
- [Access related pages on 404 pages.](https://user-images.githubusercontent.com/1402241/46402857-7bdada80-c733-11e8-91a1-856573078ff5.png)
- [Add co-authors when merging PRs with multiple committers.](https://user-images.githubusercontent.com/1402241/51468821-71a42100-1da2-11e9-86aa-fc2a6a29da84.png)
- [Search for issues and PRs separately in the top search.](https://user-images.githubusercontent.com/1402241/52181103-35a09f80-2829-11e9-9c6f-57f2e08fc5b2.png)
- [View the source of Markdown files.](https://user-images.githubusercontent.com/1402241/54814836-7bc39c80-4ccb-11e9-8996-9ecf4f6036cb.png)
- [Update a PR from the base branch to ensure it build correctly before merging the PR itself (same-repo branches only).](https://user-images.githubusercontent.com/1402241/57941992-f2170080-7902-11e9-8f8a-594aad983559.png)

### More actions

- [Click on branch references in pull requests.](https://github.com/sindresorhus/refined-github/issues/1)
- [Open all your notifications at once.](https://user-images.githubusercontent.com/1402241/31700005-1b3be428-b38c-11e7-90a6-8f572968993b.png)
- [Open selection in new tab with <kbd>shift</kbd> <kbd>o</kbd> when navigating via <kbd>j</kbd> and <kbd>k</kbd>.](https://github.com/sindresorhus/refined-github/issues/1110)
- [Copy a file's content.](https://cloud.githubusercontent.com/assets/170270/14453865/8abeaefe-00c1-11e6-8718-9406cee1dc0d.png)
- [Quickly access a commit's `.patch` and `.diff` files.](https://cloud.githubusercontent.com/assets/737065/13605562/22faa79e-e516-11e5-80db-2da6aa7965ac.png)
- [Navigate from PR commit to raw commit by clicking the commit hash.](https://user-images.githubusercontent.com/101152/42968387-606b23f2-8ba3-11e8-8a4b-667bddc8d33c.png)
- [Browse a repository at the time of each comment,](https://user-images.githubusercontent.com/1402241/56450896-68076680-635b-11e9-8b24-ebd11cc4e655.png) including [each link.](https://user-images.githubusercontent.com/1402241/56450895-68076680-635b-11e9-86b4-b6c2f3745d51.png)
- [Visit a user's public gists from their profile.](https://user-images.githubusercontent.com/11544418/34268306-1c974fd2-e678-11e7-9e82-861dfe7add22.png)
- [Download entire folders from repositories using the `Download folder` button.](https://user-images.githubusercontent.com/1402241/35044451-fd3e2326-fbc2-11e7-82e1-61ec7bee612b.png) *(Uses [download-directory.github.io](https://download-directory.github.io).)*
- [Collapse or expand a repository's browser file list.](https://user-images.githubusercontent.com/1402241/35480123-68b9af1a-043a-11e8-8934-3ead3cff8328.gif)
- [Quickly visit a repository's default branch and latest version tag.](https://user-images.githubusercontent.com/1402241/38107328-ccb3fb46-33bb-11e8-9654-23a6410943cc.png)
- [Open multiple issues at once in your repos.](https://user-images.githubusercontent.com/1402241/38084752-4820b0d8-3378-11e8-868c-a1582b16f915.gif)
- [Swap branches in the branch compare view.](https://user-images.githubusercontent.com/857700/42854438-821096f2-8a01-11e8-8752-76f7563b5e18.png)
- [Insert collapsible content when writing comments (via `<details>`).](https://user-images.githubusercontent.com/1402241/53678019-0c721280-3cf4-11e9-9c24-4d11a697f67c.png)
- [Filter pull requests by their build status.](https://user-images.githubusercontent.com/22439276/56372372-7733ca80-621c-11e9-8b60-a0b95aa4cd4f.png)
- [View raw version of files in PRs and commits.](https://user-images.githubusercontent.com/1402241/56484988-b99f2500-6504-11e9-9748-c944e1070cc8.png)

### More info at a glance

- [Full names of comment authors are shown next to their username.](https://cloud.githubusercontent.com/assets/170270/16172068/0a67b98c-3580-11e6-92f0-6fc930ee17d1.png)
- [Issue listing header is always visible.](https://user-images.githubusercontent.com/380914/39878141-7632e61a-542c-11e8-9c66-74fcd3a134aa.gif)
- [Merge commits are dimmed in commits list.](https://user-images.githubusercontent.com/1402241/36772362-8ddf8138-1c87-11e8-9f34-1f6b76e5499f.png)
- [Repo URLs are shortened to readable references like "_user/repo/.file@`d71718d`".](https://user-images.githubusercontent.com/1402241/27252232-8fdf8ed0-538b-11e7-8f19-12d317c9cd32.png)
- [The current repository's build/CI status is always visible next to its name.](https://user-images.githubusercontent.com/1402241/32562120-d65166e4-c4e8-11e7-90fb-cbaf36e2709f.png)
- [Review counts are shown and colored in PR lists.](https://user-images.githubusercontent.com/1402241/33474535-a814ee78-d6ad-11e7-8f08-a8b72799e376.png)
- [All available keyboard shortcuts are shown in the help modal.](https://user-images.githubusercontent.com/29176678/36999174-9f07d33e-20bf-11e8-83e3-b3a9908a4b5f.png)  *(<kbd>?</kbd> hotkey)*
- [Followers you know are shown on profile pages.](https://user-images.githubusercontent.com/2906365/42009293-b1503f62-7a57-11e8-88f5-9c2fb3651a14.png)
- [Private organizations are marked when viewing your own profile.](https://user-images.githubusercontent.com/6775216/44633467-d5dcc900-a959-11e8-9116-e6b0ffef66af.png)
- [Badge on user's profile if they follow you.](https://user-images.githubusercontent.com/3723666/45190460-03ecc380-b20c-11e8-832b-839959ee2c99.gif)
- [Significant head and base branches are added to the PR list.](https://user-images.githubusercontent.com/1402241/51428391-ae9ed500-1c35-11e9-8e54-6b6a424fede4.png)
- [Hidden comments are previewed inline.](https://user-images.githubusercontent.com/1402241/52545036-6e271700-2def-11e9-8c0c-b5e0fa6f37dd.png)
- [Your issues and PRs are highlighted.](https://user-images.githubusercontent.com/1402241/53065281-01560000-3506-11e9-9a51-0bdf69e20b4a.png)
- [SVG files in a PR default to rich-diff view.](https://user-images.githubusercontent.com/5243867/57125552-c08a2b00-6d81-11e9-9b84-cdb535baa98e.png)
- [Download count next to release assets.](https://user-images.githubusercontent.com/14323370/58944460-e1aeb480-874f-11e9-8052-2d4dc794ecab.png)
- [The most useful comment in issues is highlighted.](https://user-images.githubusercontent.com/1402241/58757449-5b238880-853f-11e9-9526-e86c41a32f00.png)

### Declutter

- [Newsfeed events take up less space and "User starred X repos" groups are now always expanded.](https://user-images.githubusercontent.com/1402241/54401114-39192780-4701-11e9-9934-7c71f01e957f.png)
- Stars on your repos and some other useless events (commits, forks, new followers) are hidden.
- The file hover effect in the repo file browser is removed.
- [Unnecessary buttons in the comment box toolbar are hidden](https://user-images.githubusercontent.com/1402241/53629083-a4fe8900-3c47-11e9-8211-bfe2d254ffcb.png) (each one has a keyboard shortcut).
- Obvious tooltips are removed.
- The `Checks` tab is hidden from PRs when there are no checks.
- The `Projects` tab is hidden from repositories and profiles when there are no projects.
    * New projects can still be created via the [`Create new…` menu](https://user-images.githubusercontent.com/1402241/34909214-18b6fb2e-f8cf-11e7-8556-bed748596d3b.png).
- [The autocomplete on the issue search field is removed.](https://user-images.githubusercontent.com/1402241/42991841-1f057e4e-8c07-11e8-909c-b051db7a2a03.png)
- [Forks and archived repos are hidden on profiles (but they can still be shown)](https://user-images.githubusercontent.com/1402241/45133648-fe21be80-b1c8-11e8-9052-e38cb443efa9.png)
- [Reaction comments ("+1", "👍", …) are hidden](https://user-images.githubusercontent.com/1402241/45543717-d45f3c00-b847-11e8-84a5-8c439d0ad1a5.png) (except the maintainers') [but they can still be shown.](https://user-images.githubusercontent.com/1402241/45543720-d628ff80-b847-11e8-9fb6-758a3102e3a9.png)
- [Tall code blocks and quotes are limited in height.](https://github.com/sindresorhus/refined-github/issues/1123)
- [Forks and watchers counters are hidden.](https://user-images.githubusercontent.com/1402241/53681077-f3328b80-3d1e-11e9-9e29-2cb017141769.png)
- [Diff signs are hidden.](https://user-images.githubusercontent.com/1402241/54807718-149cec80-4cb9-11e9-869c-e265863211e3.png)
- [Hide milestone sorter UI if you don’t have permission to use it.](https://user-images.githubusercontent.com/7753001/56913933-738a2880-6ae5-11e9-9d13-1973cbbf5df0.png)
- [Empty sections in the issue/PRs sidebar are hidden.](https://user-images.githubusercontent.com/1402241/57199809-20691780-6fb6-11e9-9672-1ad3f9e1b827.png)
- [Projects and Milestones filters are dropped if they are empty.](https://user-images.githubusercontent.com/37769974/59083449-0ef88f80-8915-11e9-8296-68af1ddcf191.png)
- [Add upload button to the comment toolbar and remove the upload message.](https://user-images.githubusercontent.com/55841/59802383-3d994180-92e9-11e9-835d-60de67611c30.png)


### UI improvements

- [Tabs in code are shown as 4 spaces instead of 8 spaces.](https://cloud.githubusercontent.com/assets/170270/14170088/d3be931e-f755-11e5-8edf-c5f864336382.png)
- [Labels are moved to the left of issue and pull request lists.](https://user-images.githubusercontent.com/1402241/28006237-070b8214-6581-11e7-94bc-2b01a007d00b.png)
- [Approve or reject reviews faster with one-click review type buttons.](https://user-images.githubusercontent.com/1402241/34326942-529cb7c0-e8f3-11e7-9bee-98b667e18a90.png)
- The news feeds automagically expands when you scroll down.
- The default sort order of milestones is changed to `Closest due date`.
- The default sort order of issues and pull requests is changed to `Recently updated`.
- Recently-pushed branches no longer cause the content to jump down ([they are moved to the header](https://user-images.githubusercontent.com/1402241/56466173-da517700-643f-11e9-8eb5-9b20017fa613.gif)).
- [The `Expand diff` button is widened.](https://user-images.githubusercontent.com/6978877/34470024-eee4f43e-ef20-11e7-9036-65094bd58960.PNG)
- [Dropdown menus are automatically closed when they’re no longer visible.](https://user-images.githubusercontent.com/1402241/37022353-531c676e-2155-11e8-96cc-80d934bb22e0.gif)
- [Inactive deployments in PR timelines are hidden.](https://github.com/sindresorhus/refined-github/issues/1144)
- [The PR/issues search box is wider.](https://user-images.githubusercontent.com/1402241/55069759-bceaf080-50bf-11e9-84d0-7707de2eb9e9.png)
- [A warning appears when trying to create a PR from the default branch.](https://user-images.githubusercontent.com/1402241/52543516-3ca94e00-2de5-11e9-9f80-ff8f9fe8bdc4.png)
- [A warning appears when unchecking `Allow edits from maintainers`.](https://user-images.githubusercontent.com/1402241/53151888-24101380-35ef-11e9-8d30-d6315ad97325.gif)
- [Comment boxes expand with their content and no longer show scroll bars.](https://user-images.githubusercontent.com/1402241/54336211-66fd5e00-4666-11e9-9c5e-111fccab004d.gif)
- [Text wrapped in backticks in issue titles and commit titles is highlighted.](https://user-images.githubusercontent.com/170270/55060505-31179b00-50a4-11e9-99a9-c3691ba38d66.png)

### More shortcuts

- [Access a repository's releases using the `Releases` tab or by pressing <kbd>g</kbd> <kbd>r</kbd>.](https://cloud.githubusercontent.com/assets/170270/13136797/16d3f0ea-d64f-11e5-8a45-d771c903038f.png)
- Create a new release on the Releases tab by pressing <kbd>c</kbd>.
- [Access `Commits`, `Branches`, `Dependencies`, and `Compare` pages from anywhere in a repository.](https://user-images.githubusercontent.com/1402241/55089736-d94f5300-50e8-11e9-9095-329ac74c1e9f.png)
- [Search for issues and PRs with the `Everything commented by you` filter.](https://user-images.githubusercontent.com/170270/27501170-f394a304-586b-11e7-92d8-d92d6922356b.png)
- [See just the issues and PRs _on your repos_ or _commented on by you_ in the global `Issues`/`Pull Requests` pages.](https://user-images.githubusercontent.com/8295888/36827126-8bfc79c4-1d37-11e8-8754-992968b082be.png)
- Access trending repositories using the `Trending` link in the global navbar or by pressing <kbd>g</kbd> <kbd>t</kbd>.
- [Quickly edit your last comment using the <kbd>↑</kbd> shortcut.](https://github.com/sindresorhus/refined-github/pull/961)
- Visit your profile by pressing <kbd>g</kbd> <kbd>m</kbd>.
- Cycle through PR tabs by pressing <kbd>g</kbd> <kbd>←</kbd> and <kbd>g</kbd> <kbd>→</kbd>, or <kbd>g</kbd> <kbd>1</kbd>, <kbd>g</kbd> <kbd>2</kbd>, <kbd>g</kbd> <kbd>3</kbd> and <kbd>g</kbd> <kbd>4</kbd>.
- [Go to the next or previous commit from the bottom of the commit page.](https://user-images.githubusercontent.com/24777/41755271-741773de-75a4-11e8-9181-fcc1c73df633.png)
- [Hide comments in fewer clicks.](https://user-images.githubusercontent.com/1402241/43039221-1ddc91f6-8d29-11e8-9ed4-93459191a510.gif)
- Use <kbd>←</kbd> and <kbd>→</kbd> to navigate through pages with pagination.
- [Find a user’s most starred repositories in their profile.](https://user-images.githubusercontent.com/1402241/48474026-43e3ae80-e82c-11e8-93de-159ad4c6f283.png)
- [Bypass the "Checks" page and go directly to build results when clicking the "Details" links on a PR](https://user-images.githubusercontent.com/2103975/49071220-c6596e80-f22d-11e8-8a1e-bdcd62aa6ece.png)
- Star/unstar a repository by pressing <kbd>g</kbd> <kbd>s</kbd>.
- [Delete a forked repo in one click after its PR has been merged.](https://user-images.githubusercontent.com/1402241/54188399-94bd9800-44ea-11e9-8d37-85170309bbef.png)
- Toggle whitespace visibility in diffs by pressing <kbd>d</kbd> <kbd>w</kbd>.
- [Change diff style and whitespace visibility in one click.](https://user-images.githubusercontent.com/1402241/54178764-d1c96080-44d1-11e9-889c-734ffd2a602d.png)
- [Press <kbd>esc</kbd> to deselect the current line when viewing files.](https://github.com/sindresorhus/refined-github/issues/1590)
- [Edit comments in one click.](https://user-images.githubusercontent.com/1402241/54864831-92372a00-4d97-11e9-8c29-efba2dde1baa.png)
- [Follow file renames in commits lists.](https://user-images.githubusercontent.com/1402241/54799957-7306a280-4c9a-11e9-86de-b9764ed93397.png)
- [Edit files straight from a repo’s list by clicking their icon.](https://user-images.githubusercontent.com/1402241/56370462-d51cde00-622d-11e9-8cd3-8a173bd3dc08.png)
- [Search or select tags from a dropdown in the `Releases` page.](https://user-images.githubusercontent.com/22439276/56373231-27ee9980-621e-11e9-9b21-601919d3dddf.png)
- [Link to file itself in the history pages](https://user-images.githubusercontent.com/22439276/57195061-b88ddf00-6f6b-11e9-8ad9-13225d09266d.png)
- [See an automatic changelog for each tag or release.](https://user-images.githubusercontent.com/1402241/57081611-ad4a7180-6d27-11e9-9cb6-c54ec1ac18bb.png)
- [Open issues to the latest comment by clicking the comments icon.](https://user-images.githubusercontent.com/14323370/57962709-7019de00-78e8-11e9-8398-7e617ba7a96f.png)
- [Format selected text with a key press when writing comments.](https://user-images.githubusercontent.com/37769974/59958878-39c51500-94cb-11e9-910a-061bf8ca6575.gif)
- [Cycle "popover lists" (labels, milestones, etc) when selecting them with the <kbd>↑</kbd> and <kbd>↓</kbd> keys.](https://user-images.githubusercontent.com/37769974/59158786-6fd2c400-8add-11e9-9db1-db80186fa6ea.gif)

### Previously part of Refined GitHub

- [Implemented by GitHub](https://github.com/blog/2304-navigate-file-history-faster-with-improved-blame-view): [Blame parent commits in blame view.](https://github.com/sindresorhus/refined-github/issues/2#issuecomment-189141373)
- [Implemented by GitHub](https://cloud.githubusercontent.com/assets/170270/25772137/6a6b678e-3296-11e7-97c7-02e31ef17743.png): [Collapse/expand files in a PR diff.](https://cloud.githubusercontent.com/assets/170270/13954167/40caa604-f072-11e5-89ba-3145217c4e28.png)
- [Implemented by GitHub](https://user-images.githubusercontent.com/1402241/31265633-779ad0fe-aa35-11e7-8c42-a3b375f8f32c.png): [Preview a issue/PR reference's title in comments.](https://user-images.githubusercontent.com/170270/30729486-2816df06-9f8a-11e7-8069-8999302e9ddd.png)
- [Implemented by GitHub](https://github.com/sindresorhus/refined-github/pull/1330): The dashboard organization switcher is moved to the right column.
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-24-button-to-edit-a-repositorys-readme-from-the-repository-root/): [Quickly edit a repository's README from the repository root.](https://user-images.githubusercontent.com/170270/27501200-31a1fa20-586c-11e7-9a3f-ce270014bf0a.png)
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-25-access-your-repositories-straight-from-the-profile-dropdown/): [Access `Your repositories` from the profile dropdown.](https://user-images.githubusercontent.com/4201088/34920280-479e2454-f996-11e7-8e24-ad69793b9d9b.png)
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-26-highlighting-of-permalinked-comments/): [Permalinked comments are highlighted.](https://user-images.githubusercontent.com/1402241/37349492-226bd37a-2709-11e8-8087-d9686b330240.png)
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-24-keyboard-shortcut-to-leave-a-single-comment-in-pull-requests-reviews/): Leave a single comment in pull request diffs instead of starting a review by pressing <kbd>shift</kbd> <kbd>enter</kbd>.
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-31-removing-files-from-a-pull-request/): [Quickly delete a file from pull requests.](https://user-images.githubusercontent.com/1402241/42529637-578587e4-847f-11e8-9705-57384a1edd24.png)
- [Implemented by GitHub](https://github.com/sindresorhus/refined-github/issues/1521): Pressing `Cancel` on an inline comment opens a prompt to prevent accidental cancelling.
- [Implemented by GitHub](https://blog.github.com/changelog/2018-07-31-unselectable-diff-markers/): The `+` and `-` signs in diffs are made unselectable for easier copy-pasting.
- [Implemented by GitHub](https://blog.github.com/changelog/2018-08-17-collapse-all-diffs-in-a-pull-request-at-once/): Toggle all [outdated PR comments](https://user-images.githubusercontent.com/25818354/33240033-3e271588-d2af-11e7-93af-13b6e325f65d.gif) or [PR/commit files](https://user-images.githubusercontent.com/1402241/35192652-6f79dc42-fec9-11e7-89ad-2b4a9c5f4f52.gif) with <kbd>alt</kbd> <kbd>click</kbd>.
- [Implemented by GitHub](https://blog.github.com/changelog/2018-11-05-related-issues/): [Avoid opening duplicate issues thanks to the list of possibly-related issues.](https://user-images.githubusercontent.com/29176678/37566899-85953e6e-2abf-11e8-9f0e-52d18c87bbe3.gif)
- [Implemented by GitHub](https://blog.github.com/changelog/2018-11-16-copy-file-paths-in-diffs/): [Copy the path of a PR file.](https://cloud.githubusercontent.com/assets/4201088/26023064/18c9c77c-37d2-11e7-8926-b0a05a2706ae.png)
- [Implemented by GitHub](https://blog.github.com/changelog/2018-11-26-searching-by-user-from-a-profile-page/): [Search a user profile page when visiting it.](https://user-images.githubusercontent.com/1402241/35185441-24ad4b1e-fe37-11e7-9e1b-0dc09fc1ada2.png)
- [Implemented by GitHub](https://user-images.githubusercontent.com/36004334/52573199-ea365480-2e19-11e9-8ebf-3ea6a7a640f8.png): [Access the `Labels` `Milestones` navigation from individual milestone pages.](https://cloud.githubusercontent.com/assets/170270/25217211/37b67aea-25d0-11e7-8482-bead2b04ee74.png)
- [Implemented by GitHub](https://github.blog/changelog/2019-02-13-comment-author-label/): [The comments of who opened an issue/PR are marked with `Original Poster` label.](https://cloud.githubusercontent.com/assets/4331946/25075520/d62fbbd0-2316-11e7-921f-ab736dc3522e.png)
- [Implemented by GitHub](https://github.blog/changelog/2019-02-14-prompt-to-clean-up-merged-forks): [Quickly delete a forked repo after its pull request has been merged.](https://cloud.githubusercontent.com/assets/170270/13520281/b2c9335c-e211-11e5-9e36-b0f325166356.png)
- [Implemented by GitHub](https://github.blog/changelog/2019-03-05-exclude-labels-from-search/): [Exclude PR/issue filters from their list](https://user-images.githubusercontent.com/1402241/48470535-493cfb00-e824-11e8-863a-964f52b62553.png) with <kbd>alt/option</kbd>-<kbd>click</kbd>.
- [Implemented by GitHub](https://github.blog/changelog/2019-03-18-sticky-file-headers-in-pull-requests/): [File headers are always visible.](https://user-images.githubusercontent.com/81981/28682784-78bac340-72fe-11e7-9386-bdbab7703693.gif)


## Customization

Most features [can be disabled](https://github.com/sindresorhus/refined-github/pull/877) if they are JavaScript-based *(Experimental)* and you can override the CSS with your own in [the extension options.](https://github.com/sindresorhus/refined-github/pull/1193)

We're happy to receive suggestions and contributions, but be aware this is a highly opinionated project. There's a very high bar for adding options. Users will always disagree with something. That being said, we're open to discussing things. If something doesn't make the cut, you can [build your customized Refined GitHub locally](https://github.com/sindresorhus/refined-github/blob/master/contributing.md#workflow), rather than installing it from the Chrome Store.


## Contribute

See the [contribution guide](contributing.md) and join the [contributors](https://github.com/sindresorhus/refined-github/graphs/contributors)!


## Related

- [Awesome browser extensions for GitHub](https://github.com/stefanbuck/awesome-browser-extensions-for-github) - Awesome list
- [Octo Linker](https://github.com/octo-linker/chrome-extension/) - Navigate across files and packages
- [Notifier for GitHub](https://github.com/sindresorhus/notifier-for-github-chrome) - Shows your notification unread count
- [Contributors on GitHub](https://github.com/hzoo/contributors-on-github) - Shows stats about contributors
- [Hide Files on GitHub](https://github.com/sindresorhus/hide-files-on-github) - Hides dotfiles from the file browser
- [Twitter for GitHub](https://github.com/bevacqua/twitter-for-github) - Shows a user's Twitter handle on their profile page
- [OctoEdit](https://github.com/DrewML/OctoEdit) - Markdown syntax highlighting in comments
- [GitHub Custom Tab Size](https://github.com/lukechilds/github-custom-tab-size) - Set custom tab size for code views *(Refined GitHub hard-codes it to 4)*
- [Show All GitHub Issues](https://github.com/sindresorhus/show-all-github-issues) - Shows both Issues and Pull Requests in the Issues tab
- [Notifications Preview for GitHub](https://github.com/tanmayrajani/notifications-preview-github) - See your notifications on hover on all pages
- [Refined Twitter](https://github.com/sindresorhus/refined-twitter) - Improves Twitter
- [GitHub Issue Link Status](https://github.com/bfred-it/github-issue-link-status) - Colorize issue and PR links to see their status (open, closed, merged)
- [Friendly GitHub](https://github.com/Hermanya/friendly-github) - Make GitHub more social
- [Sourcegraph](https://github.com/sourcegraph/browser-extensions) - Adds code intelligence to GitHub
- [Potential changes for GitHub](https://github.com/dzhavat/potential-changes-for-github) - See which pull requests contain changes related to a file

Want more? Here are some ideas you could develop!

- [Format JS code blocks with Prettier](https://github.com/sindresorhus/module-requests/issues/99)
- [Customize the font of code blocks](https://github.com/sindresorhus/module-requests/issues/97)


## License

MIT
