Ext.data.JsonP.Ext_form_field_File({
  "allMixins": [
    "Ext.form.Labelable",
    "Ext.form.field.Field",
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "deprecated": null,
  "docauthor": "Jason Johnston <jason@sencha.com>",
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeError",
        "shortDoc": "If specified, then the component will be displayed with this value as its active error when\nfirst rendered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "activeError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>If specified, then the component will be displayed with this value as its active error when\nfirst rendered. Defaults to undefined. Use <a href=\"#/api/Ext.form.field.File-method-setActiveError\" rel=\"Ext.form.field.File-method-setActiveError\" class=\"docClass\">setActiveError</a> or <a href=\"#/api/Ext.form.field.File-method-unsetActiveError\" rel=\"Ext.form.field.File-method-unsetActiveError\" class=\"docClass\">unsetActiveError</a> to\nchange it after component creation.</p>\n",
        "linenr": 206,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Ext.XTemplate",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-activeErrorsTpl",
        "shortDoc": "The template used to format the Array of error messages passed to setActiveErrors\ninto a single HTML string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "activeErrorsTpl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The template used to format the Array of error messages passed to <a href=\"#/api/Ext.form.field.File-method-setActiveErrors\" rel=\"Ext.form.field.File-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a>\ninto a single HTML string. By default this renders each message as an item in an unordered list.</p>\n",
        "linenr": 50,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-allowBlank",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "allowBlank",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Specify <tt>false</tt> to validate that the value's length is > 0 (defaults to\n<tt>true</tt>)</p>\n",
        "linenr": 126,
        "html_filename": "Text.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.form.field.File-cfg-renderTpl\" rel=\"Ext.form.field.File-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
        "linenr": 130,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-autoFitErrors",
        "shortDoc": "Whether to adjust the component's body area to make room for 'side' or 'under'\nerror messages. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "autoFitErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Whether to adjust the component's body area to make room for 'side' or 'under'\n<a href=\"#/api/Ext.form.field.File-cfg-msgTarget\" rel=\"Ext.form.field.File-cfg-msgTarget\" class=\"docClass\">error messages</a>. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 184,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.form.field.File-cfg-renderTo\" rel=\"Ext.form.field.File-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.form.field.File-event-show\" rel=\"Ext.form.field.File-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
        "linenr": 499,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
        "linenr": 172,
        "html_filename": "Component2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "shortDoc": "True to automatically show the component upon creation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.form.field.File-cfg-autoRender\" rel=\"Ext.form.field.File-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 492,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-baseBodyCls",
        "shortDoc": "The CSS class to be applied to the body content element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "baseBodyCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the body content element. Defaults to 'x-form-item-body'.</p>\n",
        "linenr": 87,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "baseCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n",
        "linenr": 273,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-blankText",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "blankText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The error text to display if the <b><tt><a href=\"#/api/Ext.form.field.File-cfg-allowBlank\" rel=\"Ext.form.field.File-cfg-allowBlank\" class=\"docClass\">allowBlank</a></tt></b> validation\nfails (defaults to <tt>'This field is required'</tt>)</p>\n",
        "linenr": 166,
        "html_filename": "Text.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "shortDoc": "Specifies the border for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 360,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "File.html#Ext-form-field-File-cfg-buttonConfig",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "buttonConfig",
        "owner": "Ext.form.field.File",
        "doc": "<p>A standard <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a> config object.</p>\n",
        "linenr": 79,
        "html_filename": "File.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "File.html#Ext-form-field-File-cfg-buttonMargin",
        "shortDoc": "The number of pixels of space reserved between the button and the text field\n(defaults to 3). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "buttonMargin",
        "owner": "Ext.form.field.File",
        "doc": "<p>The number of pixels of space reserved between the button and the text field\n(defaults to 3).  Note that this only applies if <a href=\"#/api/Ext.form.field.File-cfg-buttonOnly\" rel=\"Ext.form.field.File-cfg-buttonOnly\" class=\"docClass\">buttonOnly</a> = false.</p>\n",
        "linenr": 73,
        "html_filename": "File.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "File.html#Ext-form-field-File-cfg-buttonOnly",
        "shortDoc": "True to display the file upload field as a button with no visible\ntext field (defaults to false). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "buttonOnly",
        "owner": "Ext.form.field.File",
        "doc": "<p>True to display the file upload field as a button with no visible\ntext field (defaults to false).  If true, all inherited Text members will still be available.</p>\n",
        "linenr": 67,
        "html_filename": "File.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "File.html#Ext-form-field-File-cfg-buttonText",
        "shortDoc": "The button text to display on the upload button (defaults to\n'Browse...'). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "buttonText",
        "owner": "Ext.form.field.File",
        "doc": "<p>The button text to display on the upload button (defaults to\n'Browse...').  Note that if you supply a value for <a href=\"#/api/Ext.form.field.File-cfg-buttonConfig\" rel=\"Ext.form.field.File-cfg-buttonConfig\" class=\"docClass\">buttonConfig</a>, the buttonConfig.text\nvalue will be used instead if available.</p>\n",
        "linenr": 60,
        "html_filename": "File.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeBuffer",
        "shortDoc": "Defines a timeout in milliseconds for buffering checkChangeEvents that fire in rapid succession. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "checkChangeBuffer",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Defines a timeout in milliseconds for buffering <a href=\"#/api/Ext.form.field.File-cfg-checkChangeEvents\" rel=\"Ext.form.field.File-cfg-checkChangeEvents\" class=\"docClass\">checkChangeEvents</a> that fire in rapid succession.\nDefaults to 50 milliseconds.</p>\n",
        "linenr": 181,
        "html_filename": "Base.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-checkChangeEvents",
        "shortDoc": "A list of event names that will be listened for on the field's input element, which\nwill cause the field's value to b...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "checkChangeEvents",
        "owner": "Ext.form.field.Base",
        "doc": "<p>A list of event names that will be listened for on the field's <a href=\"#/api/Ext.form.field.File-property-inputEl\" rel=\"Ext.form.field.File-property-inputEl\" class=\"docClass\">input element</a>, which\nwill cause the field's value to be checked for changes. If a change is detected, the\n<a href=\"#/api/Ext.form.field.File-event-change\" rel=\"Ext.form.field.File-event-change\" class=\"docClass\">change event</a> will be fired, followed by validation if the <a href=\"#/api/Ext.form.field.File-cfg-validateOnChange\" rel=\"Ext.form.field.File-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>\noption is enabled.</p>\n\n\n<p>Defaults to <tt>['change', 'propertychange']</tt> in Internet Explorer, and <tt>['change', 'input',\n'textInput', 'keyup', 'dragdrop']</tt> in other browsers. This catches all the ways that field values\ncan be changed in most supported browsers; the only known exceptions at the time of writing are:</p>\n\n\n<ul>\n<li>Safari 3.2 and older: cut/paste in textareas via the context menu, and dragging text into textareas</li>\n<li>Opera 10 and 11: dragging text into text fields and textareas, and cut via the context menu in text\nfields and textareas</li>\n<li>Opera 9: Same as Opera 10 and 11, plus paste from context menu in text fields and textareas</li>\n</ul>\n\n\n<p>If you need to guarantee on-the-fly change notifications including these edge cases, you can call the\n<a href=\"#/api/Ext.form.field.File-method-checkChange\" rel=\"Ext.form.field.File-method-checkChange\" class=\"docClass\">checkChange</a> method on a repeating interval, e.g. using <a href=\"#/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a>, or if the field is\nwithin a <a href=\"#/api/Ext.form.Panel\" rel=\"Ext.form.Panel\" class=\"docClass\">Ext.form.Panel</a>, you can use the FormPanel's <a href=\"#/api/Ext.form.Panel-cfg-pollForChanges\" rel=\"Ext.form.Panel-cfg-pollForChanges\" class=\"docClass\">Ext.form.Panel.pollForChanges</a>\nconfiguration to set up such a task automatically.</p>\n\n",
        "linenr": 157,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-clearCls",
        "shortDoc": "The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "clearCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the special clearing div rendered directly after the field\ncontents wrapper to provide field clearing (defaults to <tt>'x-clear'</tt>).</p>\n",
        "linenr": 100,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 289,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
        "linenr": 283,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.form.field.File-method-setSize\" rel=\"Ext.form.field.File-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
        "linenr": 242,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.form.field.File-cfg-html\" rel=\"Ext.form.field.File-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.form.field.File-event-render\" rel=\"Ext.form.field.File-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
        "linenr": 422,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.form.field.File-cfg-tpl\" rel=\"Ext.form.field.File-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
        "linenr": 260,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-dirtyCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "dirtyCls",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The CSS class to use when the field value <a href=\"#/api/Ext.form.field.File-method-isDirty\" rel=\"Ext.form.field.File-method-isDirty\" class=\"docClass\">is dirty</a>.</p>\n",
        "linenr": 152,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-disableKeyFilter",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "disableKeyFilter",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Specify <tt>true</tt> to disable input keystroke filtering (defaults\nto <tt>false</tt>)</p>\n",
        "linenr": 121,
        "html_filename": "Text.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field.html#Ext-form-field-Field-cfg-disabled",
        "shortDoc": "True to disable the field (defaults to false). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "disabled",
        "owner": "Ext.form.field.Field",
        "doc": "<p>True to disable the field (defaults to false). Disabled Fields will not be\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a>.</p></p>\n",
        "linenr": 43,
        "html_filename": "Field.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
        "linenr": 302,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
        "linenr": 237,
        "html_filename": "Component2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyCls",
        "shortDoc": "The CSS class to apply to an empty field to style the emptyText\n(defaults to 'x-form-empty-field'). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "emptyCls",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The CSS class to apply to an empty field to style the <b><tt><a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a></tt></b>\n(defaults to <tt>'x-form-empty-field'</tt>).  This class is automatically added and removed as needed\ndepending on the current field value.</p>\n",
        "linenr": 213,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-emptyText",
        "shortDoc": "The default text to place into an empty field (defaults to undefined). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "emptyText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The default text to place into an empty field (defaults to <tt>undefined</tt>).</p>\n\n\n<p>Note that normally this value will be submitted to the server if this field is enabled; to prevent this\nyou can set the <a href=\"#/api/Ext.form.action.Action-cfg-submitEmptyText\" rel=\"Ext.form.action.Action-cfg-submitEmptyText\" class=\"docClass\">submitEmptyText</a> option of\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">Ext.form.Basic.submit</a> to <tt>false</tt>.</p>\n\n\n<p>Also note that if you use <tt><a href=\"#/api/Ext.form.field.File-cfg-inputType\" rel=\"Ext.form.field.File-cfg-inputType\" class=\"docClass\">inputType</a>:'file'</tt>, <a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a> is not\nsupported and should be avoided.</p>\n\n",
        "linenr": 203,
        "html_filename": "Text.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-enableKeyEvents",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "enableKeyEvents",
        "owner": "Ext.form.field.Text",
        "doc": "<p><tt>true</tt> to enable the proxying of key events for the HTML input field (defaults to <tt>false</tt>)</p>\n",
        "linenr": 222,
        "html_filename": "Text.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-enforceMaxLength",
        "shortDoc": "True to set the maxLength property on the underlying input field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "enforceMaxLength",
        "owner": "Ext.form.field.Text",
        "doc": "<p>True to set the maxLength property on the underlying input field. Defaults to <tt>false</tt></p>\n",
        "linenr": 145,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-errorMsgCls",
        "shortDoc": "The CSS class to be applied to the error message element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "errorMsgCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the error message element. Defaults to 'x-form-error-msg'.</p>\n",
        "linenr": 81,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "File.html#Ext-form-field-File-cfg-fieldBodyCls",
        "shortDoc": "An extra CSS class to be applied to the body content element in addition to fieldBodyCls. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "fieldBodyCls",
        "owner": "Ext.form.field.File",
        "doc": "<p>An extra CSS class to be applied to the body content element in addition to <a href=\"#/api/Ext.form.field.File-cfg-fieldBodyCls\" rel=\"Ext.form.field.File-cfg-fieldBodyCls\" class=\"docClass\">fieldBodyCls</a>.\nDefaults to 'x-form-file-wrap' for file upload field.</p>\n",
        "linenr": 105,
        "html_filename": "File.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "fieldCls",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The default CSS class for the field input (defaults to 'x-form-field')</p>\n",
        "linenr": 136,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-fieldLabel",
        "shortDoc": "The label for the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "fieldLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The label for the field. It gets appended with the <a href=\"#/api/Ext.form.field.File-cfg-labelSeparator\" rel=\"Ext.form.field.File-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>, and its position\nand sizing is determined by the <a href=\"#/api/Ext.form.field.File-cfg-labelAlign\" rel=\"Ext.form.field.File-cfg-labelAlign\" class=\"docClass\">labelAlign</a>, <a href=\"#/api/Ext.form.field.File-cfg-labelWidth\" rel=\"Ext.form.field.File-cfg-labelWidth\" class=\"docClass\">labelWidth</a>, and <a href=\"#/api/Ext.form.field.File-cfg-labelPad\" rel=\"Ext.form.field.File-cfg-labelPad\" class=\"docClass\">labelPad</a>\nconfigs. Defaults to undefined.</p>\n",
        "linenr": 113,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-fieldStyle",
        "shortDoc": "Optional CSS style(s) to be applied to the field input element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "fieldStyle",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Optional CSS style(s) to be applied to the <a href=\"#/api/Ext.form.field.File-property-inputEl\" rel=\"Ext.form.field.File-property-inputEl\" class=\"docClass\">field input element</a>.\nShould be a valid argument to <a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>. Defaults to undefined. See also the\n<a href=\"#/api/Ext.form.field.File-method-setFieldStyle\" rel=\"Ext.form.field.File-method-setFieldStyle\" class=\"docClass\">setFieldStyle</a> method for changing the style after initialization.</p>\n",
        "linenr": 141,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-floating",
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.form.field.File-method-toFront\" rel=\"Ext.form.field.File-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.form.field.File-property-ownerCt\" rel=\"Ext.form.field.File-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.form.field.File-event-show\" rel=\"Ext.form.field.File-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.form.field.File-property-floatParent\" rel=\"Ext.form.field.File-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.form.field.File-property-floatParent\" rel=\"Ext.form.field.File-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
        "linenr": 178,
        "html_filename": "Component2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-focusCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "focusCls",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The CSS class to use when the field receives focus (defaults to 'x-form-focus')</p>\n",
        "linenr": 147,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.form.field.File-event-focus\" rel=\"Ext.form.field.File-event-focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.form.field.File-method-toFront\" rel=\"Ext.form.field.File-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
        "linenr": 9,
        "html_filename": "Floating.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-formItemCls",
        "shortDoc": "A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "formItemCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>A CSS class to be applied to the outermost element to denote that it is participating in the form\nfield layout. Defaults to 'x-form-item'.</p>\n",
        "linenr": 68,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frame",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.form.field.File-property-frameSize\" rel=\"Ext.form.field.File-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n",
        "linenr": 219,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-grow",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "grow",
        "owner": "Ext.form.field.Text",
        "doc": "<p><tt>true</tt> if this field should automatically grow and shrink to its content\n(defaults to <tt>false</tt>)</p>\n",
        "linenr": 86,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-growAppend",
        "shortDoc": "A string that will be appended to the field's current value for the purposes of calculating the target\nfield size. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "growAppend",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A string that will be appended to the field's current value for the purposes of calculating the target\nfield size. Only used when the <a href=\"#/api/Ext.form.field.File-cfg-grow\" rel=\"Ext.form.field.File-cfg-grow\" class=\"docClass\">grow</a> config is <tt>true</tt>. Defaults to a single capital \"W\"\n(the widest character in common fonts) to leave enough space for the next typed character and avoid the\nfield value shifting before the width is adjusted.</p>\n",
        "linenr": 103,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-growMax",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "growMax",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The maximum width to allow when <code><b><a href=\"#/api/Ext.form.field.File-cfg-grow\" rel=\"Ext.form.field.File-cfg-grow\" class=\"docClass\">grow</a></b> = true</code> (defaults\nto <tt>800</tt>)</p>\n",
        "linenr": 97,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-growMin",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "growMin",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The minimum width to allow when <code><b><a href=\"#/api/Ext.form.field.File-cfg-grow\" rel=\"Ext.form.field.File-cfg-grow\" class=\"docClass\">grow</a></b> = true</code> (defaults\nto <tt>30</tt>)</p>\n",
        "linenr": 91,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n",
        "linenr": 355,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 378,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideEmptyLabel",
        "shortDoc": "When set to true, the label element (fieldLabel and labelSeparator) will be\nautomatically hidden if the fieldLabel is...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "hideEmptyLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>When set to <tt>true</tt>, the label element (<a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.File-cfg-labelSeparator\" rel=\"Ext.form.field.File-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>) will be\nautomatically hidden if the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> is empty. Setting this to <tt>false</tt> will cause the empty\nlabel element to be rendered and space to be reserved for it; this is useful if you want a field without a label\nto line up with other labeled fields in the same form. Defaults to <tt>true</tt>.</p>\n\n\n<p>If you wish to unconditionall hide the label even if a non-empty fieldLabel is configured, then set\nthe <a href=\"#/api/Ext.form.field.File-cfg-hideLabel\" rel=\"Ext.form.field.File-cfg-hideLabel\" class=\"docClass\">hideLabel</a> config to <tt>true</tt>.</p>\n\n",
        "linenr": 166,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-hideLabel",
        "shortDoc": "Set to true to completely hide the label element (fieldLabel and labelSeparator). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "hideLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Set to <tt>true</tt> to completely hide the label element (<a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and <a href=\"#/api/Ext.form.field.File-cfg-labelSeparator\" rel=\"Ext.form.field.File-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>).\nDefaults to <tt>false</tt>.</p>\n\n\n<p>Also see <a href=\"#/api/Ext.form.field.File-cfg-hideEmptyLabel\" rel=\"Ext.form.field.File-cfg-hideEmptyLabel\" class=\"docClass\">hideEmptyLabel</a>, which controls whether space will be reserved for an empty fieldLabel.</p>\n\n",
        "linenr": 158,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
        "linenr": 409,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.form.field.File-event-render\" rel=\"Ext.form.field.File-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.form.field.File-cfg-contentEl\" rel=\"Ext.form.field.File-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
        "linenr": 440,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.form.field.File-method-getId\" rel=\"Ext.form.field.File-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.form.field.File-cfg-itemId\" rel=\"Ext.form.field.File-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.form.field.File-cfg-itemId\" rel=\"Ext.form.field.File-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.form.field.File-property-ownerCt\" rel=\"Ext.form.field.File-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
        "linenr": 50,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-inputId",
        "shortDoc": "The id that will be given to the generated input DOM element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "inputId",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The id that will be given to the generated input DOM element. Defaults to an automatically generated id.\nIf you configure this manually, you must make sure it is unique in the document.</p>\n",
        "linenr": 206,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-inputType",
        "shortDoc": "The type attribute for input fields -- e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "inputType",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The type attribute for input fields -- e.g. radio, text, password, file (defaults to <tt>'text'</tt>).\nThe extended types supported by HTML5 inputs (url, email, etc.) may also be used, though using them\nwill cause older browsers to fall back to 'text'.</p>\n\n\n<p>The type 'password' must be used to render that field type currently -- there is no separate <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>\ncomponent for that. You can use <a href=\"#/api/Ext.form.field.File\" rel=\"Ext.form.field.File\" class=\"docClass\">Ext.form.field.File</a> which creates a custom-rendered file upload\nfield, but if you want a plain unstyled file input you can use a BaseField with inputType:'file'.</p>\n\n",
        "linenr": 114,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-invalidCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "invalidCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to use when marking the component invalid (defaults to 'x-form-invalid')</p>\n",
        "linenr": 107,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-invalidText",
        "shortDoc": "The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field i...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "invalidText",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The error text to use when marking a field invalid and no message is provided\n(defaults to 'The value in this field is invalid')</p>\n",
        "linenr": 130,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.form.field.File-cfg-id\" rel=\"Ext.form.field.File-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.form.field.File-cfg-id\" rel=\"Ext.form.field.File-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.form.field.File-cfg-id\" rel=\"Ext.form.field.File-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.form.field.File-cfg-renderTo\" rel=\"Ext.form.field.File-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.form.field.File-property-ownerCt\" rel=\"Ext.form.field.File-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.form.field.File-cfg-id\" rel=\"Ext.form.field.File-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.form.field.File-property-ownerCt\" rel=\"Ext.form.field.File-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
        "linenr": 66,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelAlign",
        "shortDoc": "Controls the position and alignment of the fieldLabel. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelAlign",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Controls the position and alignment of the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a>. Valid values are:</p>\n\n\n<ul>\n<li><tt>\"left\"</tt> (the default) - The label is positioned to the left of the field, with its text\naligned to the left. Its width is determined by the <a href=\"#/api/Ext.form.field.File-cfg-labelWidth\" rel=\"Ext.form.field.File-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n<li><tt>\"top\"</tt> - The label is positioned above the field.</li>\n<li><tt>\"right\"</tt> - The label is positioned to the left of the field, with its text aligned\nto the right. Its width is determined by the <a href=\"#/api/Ext.form.field.File-cfg-labelWidth\" rel=\"Ext.form.field.File-cfg-labelWidth\" class=\"docClass\">labelWidth</a> config.</li>\n</ul>\n\n",
        "linenr": 121,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelCls",
        "shortDoc": "The CSS class to be applied to the label element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelCls",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The CSS class to be applied to the label element. Defaults to 'x-form-item-label'.</p>\n",
        "linenr": 75,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelPad",
        "shortDoc": "The amount of space in pixels between the fieldLabel and the input field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelPad",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The amount of space in pixels between the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> and the input field. Defaults to <tt>5</tt>.</p>\n",
        "linenr": 141,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelSeparator",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelSeparator",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Character(s) to be inserted at the end of the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">label text</a>.</p>\n",
        "linenr": 147,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelStyle",
        "shortDoc": "A CSS style specification string to apply directly to this field's label. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelStyle",
        "owner": "Ext.form.Labelable",
        "doc": "<p>A CSS style specification string to apply directly to this field's label. Defaults to undefined.</p>\n\n",
        "linenr": 153,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelWidth",
        "shortDoc": "The width of the fieldLabel in pixels. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelWidth",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The width of the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> in pixels. Only applicable if the <a href=\"#/api/Ext.form.field.File-cfg-labelAlign\" rel=\"Ext.form.field.File-cfg-labelAlign\" class=\"docClass\">labelAlign</a> is set\nto \"left\" or \"right\". Defaults to <tt>100</tt>.</p>\n",
        "linenr": 134,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Array/String/Ext.XTemplate",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-labelableRenderTpl",
        "shortDoc": "The rendering template for the field decorations. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelableRenderTpl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The rendering template for the field decorations. Component classes using this mixin should include\nlogic to use this as their <a href=\"#/api/Ext.AbstractComponent-cfg-renderTpl\" rel=\"Ext.AbstractComponent-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, and implement the\n<a href=\"#/api/Ext.form.field.File-method-getSubTplMarkup\" rel=\"Ext.form.field.File-method-getSubTplMarkup\" class=\"docClass\">getSubTplMarkup</a> method to generate the field body content.</p>\n",
        "linenr": 29,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "type": "Ext.ComponentLoader/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
        "linenr": 483,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
        "linenr": 259,
        "html_filename": "Component2.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "shortDoc": "Specifies the margin for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 372,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-maskRe",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "maskRe",
        "owner": "Ext.form.field.Text",
        "doc": "<p>An input mask regular expression that will be used to filter keystrokes that do\nnot match (defaults to <tt>undefined</tt>)</p>\n",
        "linenr": 116,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 472,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLength",
        "shortDoc": "Maximum input field length allowed by validation (defaults to Number.MAX_VALUE). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "maxLength",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Maximum input field length allowed by validation (defaults to Number.MAX_VALUE).\nThis behavior is intended to provide instant feedback to the user by improving usability to allow pasting\nand editing or overtyping and back tracking. To restrict the maximum number of characters that can be\nentered into the field use the <tt><b><a href=\"#/api/Ext.form.field.Text-cfg-enforceMaxLength\" rel=\"Ext.form.field.Text-cfg-enforceMaxLength\" class=\"docClass\">enforceMaxLength</a></b></tt> option.</p>\n",
        "linenr": 137,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-maxLengthText",
        "shortDoc": "Error text to display if the maximum length\nvalidation fails (defaults to 'The maximum length for this field is {maxL...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "maxLengthText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Error text to display if the <b><tt><a href=\"#/api/Ext.form.field.File-cfg-maxLength\" rel=\"Ext.form.field.File-cfg-maxLength\" class=\"docClass\">maximum length</a></tt></b>\nvalidation fails (defaults to <tt>'The maximum length for this field is {maxLength}'</tt>)</p>\n",
        "linenr": 155,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 477,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 462,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-minLength",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "minLength",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Minimum input field length required (defaults to <tt>0</tt>)</p>\n",
        "linenr": 132,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-minLengthText",
        "shortDoc": "Error text to display if the minimum length\nvalidation fails (defaults to 'The minimum length for this field is {minL...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "minLengthText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Error text to display if the <b><tt><a href=\"#/api/Ext.form.field.File-cfg-minLength\" rel=\"Ext.form.field.File-cfg-minLength\" class=\"docClass\">minimum length</a></tt></b>\nvalidation fails (defaults to <tt>'The minimum length for this field is {minLength}'</tt>)</p>\n",
        "linenr": 149,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 467,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-msgTarget",
        "shortDoc": "The location where the error message text should display. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "msgTarget",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The location where the error message text should display.\nMust be one of the following values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>qtip</code> Display a quick tip containing the message when the user hovers over the field. This is the default.\n<div class=\"subdesc\"><b><a href=\"#/api/Ext.tip.QuickTipManager-method-init\" rel=\"Ext.tip.QuickTipManager-method-init\" class=\"docClass\">Ext.tip.QuickTipManager.init</a> must have been called for this setting to work.</b></div></li>\n<li><code>title</code> Display the message in a default browser title attribute popup.</li>\n<li><code>under</code> Add a block div beneath the field containing the error message.</li>\n<li><code>side</code> Add an error icon to the right of the field, displaying the message in a popup on hover.</li>\n<li><code>none</code> Don't display any error message. This might be useful if you are implementing custom error display.</li>\n<li><code>[element id]</code> Add the error message directly to the innerHTML of the specified element.</li>\n</ul></div>\n\n",
        "linenr": 191,
        "html_filename": "Labelable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-name",
        "shortDoc": "The name of the field (defaults to undefined). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "name",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The name of the field (defaults to undefined). This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>. If no name is\nconfigured, it falls back to the <a href=\"#/api/Ext.form.field.File-cfg-inputId\" rel=\"Ext.form.field.File-cfg-inputId\" class=\"docClass\">inputId</a>. To prevent the field from being included in the\nform submit, set <a href=\"#/api/Ext.form.field.File-cfg-submitValue\" rel=\"Ext.form.field.File-cfg-submitValue\" class=\"docClass\">submitValue</a> to <tt>false</tt>.</p>\n",
        "linenr": 107,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 295,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Number/String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "shortDoc": "Specifies the padding for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 366,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Object/Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
        "linenr": 512,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Labelable.html#Ext-form-Labelable-cfg-preventMark",
        "shortDoc": "true to disable displaying any error message set on this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "preventMark",
        "owner": "Ext.form.Labelable",
        "doc": "<p><tt>true</tt> to disable displaying any <a href=\"#/api/Ext.form.field.File-method-setActiveError\" rel=\"Ext.form.field.File-method-setActiveError\" class=\"docClass\">error message</a> set on this object.\nDefaults to <tt>false</tt>.</p>\n",
        "linenr": 177,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-readOnly",
        "shortDoc": "true to mark the field as readOnly in HTML\n(defaults to false). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "readOnly",
        "owner": "Ext.form.field.Base",
        "doc": "<p><tt>true</tt> to mark the field as readOnly in HTML\n(defaults to <tt>false</tt>).</p>\n\n<br><p><b>Note</b>: this only sets the element's readOnly DOM attribute.\n\n\n<p>Setting <code>readOnly=true</code>, for example, will not disable triggering a\nComboBox or Date; it gives you the option of forcing the user to choose\nvia the trigger without typing in the text box. To hide the trigger use\n<code><a href=\"#/api/Ext.form.field.Trigger-cfg-hideTrigger\" rel=\"Ext.form.field.Trigger-cfg-hideTrigger\" class=\"docClass\">hideTrigger</a></code>.</p></p>\n",
        "linenr": 190,
        "html_filename": "Base.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-readOnlyCls",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "readOnlyCls",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The CSS class applied to the component's main element when it is <a href=\"#/api/Ext.form.field.File-cfg-readOnly\" rel=\"Ext.form.field.File-cfg-readOnly\" class=\"docClass\">readOnly</a>.</p>\n",
        "linenr": 201,
        "html_filename": "Base.html"
      },
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-regex",
        "shortDoc": "A JavaScript RegExp object to be tested against the field value during validation\n(defaults to undefined). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "regex",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A JavaScript RegExp object to be tested against the field value during validation\n(defaults to <tt>undefined</tt>). If the test fails, the field will be marked invalid using\n<b><tt><a href=\"#/api/Ext.form.field.File-cfg-regexText\" rel=\"Ext.form.field.File-cfg-regexText\" class=\"docClass\">regexText</a></tt></b>.</p>\n",
        "linenr": 191,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-regexText",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "regexText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>The error text to display if <b><tt><a href=\"#/api/Ext.form.field.File-cfg-regex\" rel=\"Ext.form.field.File-cfg-regex\" class=\"docClass\">regex</a></tt></b> is used and the\ntest fails during validation (defaults to <tt>''</tt>)</p>\n",
        "linenr": 197,
        "html_filename": "Text.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.form.field.File-cfg-renderTpl\" rel=\"Ext.form.field.File-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n",
        "linenr": 179,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.File-event-render\" rel=\"Ext.form.field.File-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
        "linenr": 204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.form.field.File-cfg-renderSelectors\" rel=\"Ext.form.field.File-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
        "linenr": 164,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
        "linenr": 157,
        "html_filename": "Component2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
        "linenr": 166,
        "html_filename": "Component2.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
        "linenr": 74,
        "html_filename": "Stateful.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-selectOnFocus",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "selectOnFocus",
        "owner": "Ext.form.field.Text",
        "doc": "<p><tt>true</tt> to automatically select any existing field text when the field\nreceives input focus (defaults to <tt>false</tt>)</p>\n",
        "linenr": 161,
        "html_filename": "Text.html"
      },
      {
        "type": "String/Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to\n<tt>true</tt> to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to <tt>false</tt> to disable the shadow.\n(Defaults to <tt>'sides'</tt>.)</p>\n",
        "linenr": 16,
        "html_filename": "Floating.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-size",
        "shortDoc": "An initial value for the 'size' attribute on the text input element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "size",
        "owner": "Ext.form.field.Text",
        "doc": "<p>An initial value for the 'size' attribute on the text input element. This is only\nused if the field has no configured <a href=\"#/api/Ext.form.field.File-cfg-width\" rel=\"Ext.form.field.File-cfg-width\" class=\"docClass\">width</a> and is not given a width by its container's layout.\nDefaults to <tt>20</tt>.</p>\n",
        "linenr": 79,
        "html_filename": "Text.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.form.field.File-cfg-stateful\" rel=\"Ext.form.field.File-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
        "linenr": 64,
        "html_filename": "Stateful.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.form.field.File-cfg-stateful\" rel=\"Ext.form.field.File-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
        "linenr": 58,
        "html_filename": "Stateful.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.form.field.File-cfg-stateId\" rel=\"Ext.form.field.File-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.form.field.File-cfg-stateEvents\" rel=\"Ext.form.field.File-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.form.field.File-method-getState\" rel=\"Ext.form.field.File-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.form.field.File-cfg-stateId\" rel=\"Ext.form.field.File-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.form.field.File-cfg-stateId\" rel=\"Ext.form.field.File-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.form.field.File-method-applyState\" rel=\"Ext.form.field.File-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.form.field.File-method-applyState\" rel=\"Ext.form.field.File-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.form.field.File-event-beforestaterestore\" rel=\"Ext.form.field.File-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.form.field.File-event-staterestore\" rel=\"Ext.form.field.File-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.form.field.File-event-beforestatesave\" rel=\"Ext.form.field.File-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.form.field.File-event-statesave\" rel=\"Ext.form.field.File-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
        "linenr": 18,
        "html_filename": "Stateful.html"
      },
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-stripCharsRe",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "stripCharsRe",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A JavaScript RegExp object used to strip unwanted content from the value\nbefore validation (defaults to <tt>undefined</tt>).</p>\n",
        "linenr": 74,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
        "linenr": 321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
        "linenr": 455,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
        "linenr": 448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field.html#Ext-form-field-Field-cfg-submitValue",
        "shortDoc": "Setting this to false will prevent the field from being\nsubmitted even when it is not disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "submitValue",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Setting this to <tt>false</tt> will prevent the field from being\n<a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitted</a> even when it is not disabled. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 49,
        "html_filename": "Field.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-tabIndex",
        "shortDoc": "The tabIndex for this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "tabIndex",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The tabIndex for this field. Note this only applies to fields that are rendered,\nnot those which are built via applyTo (defaults to undefined).</p>\n",
        "linenr": 125,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.form.field.File-method-toFront\" rel=\"Ext.form.field.File-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.form.field.File-event-show\" rel=\"Ext.form.field.File-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
        "linenr": 202,
        "html_filename": "Component2.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tpl",
        "shortDoc": "An Ext.Template, Ext.XTemplate\nor an array of strings to form an Ext.XTemplate. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <bold><a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></bold>, <bold><a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></bold>\nor an array of strings to form an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.\nUsed in conjunction with the <code><a href=\"#/api/Ext.form.field.File-cfg-data\" rel=\"Ext.form.field.File-cfg-data\" class=\"docClass\">data</a></code> and\n<code><a href=\"#/api/Ext.form.field.File-cfg-tplWriteMode\" rel=\"Ext.form.field.File-cfg-tplWriteMode\" class=\"docClass\">tplWriteMode</a></code> configurations.</p>\n",
        "linenr": 252,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
        "linenr": 266,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "String/Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "shortDoc": "A set style for a component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
        "linenr": 308,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Base.html#Ext-form-field-Base-cfg-validateOnBlur",
        "shortDoc": "Whether the field should validate when it loses focus (defaults to true). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "validateOnBlur",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Whether the field should validate when it loses focus (defaults to <tt>true</tt>). This will cause fields\nto be validated as the user steps through the fields in the form regardless of whether they are making\nchanges to those fields along the way. See also <a href=\"#/api/Ext.form.field.File-cfg-validateOnChange\" rel=\"Ext.form.field.File-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a>.</p>\n",
        "linenr": 212,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field.html#Ext-form-field-Field-cfg-validateOnChange",
        "shortDoc": "Specifies whether this field should be validated immediately whenever a change in its value is detected. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "validateOnChange",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Specifies whether this field should be validated immediately whenever a change in its value is detected.\nDefaults to <tt>true</tt>. If the validation results in a change in the field's validity, a\n<a href=\"#/api/Ext.form.field.File-event-validitychange\" rel=\"Ext.form.field.File-event-validitychange\" class=\"docClass\">validitychange</a> event will be fired. This allows the field to show feedback about the\nvalidity of its contents immediately as the user is typing.</p>\n\n\n<p>When set to <tt>false</tt>, feedback will not be immediate. However the form will still be validated\nbefore submitting if the <tt>clientValidation</tt> option to <a href=\"#/api/Ext.form.Basic-method-doAction\" rel=\"Ext.form.Basic-method-doAction\" class=\"docClass\">Ext.form.Basic.doAction</a> is\nenabled, or if the field or form are validated manually.</p>\n\n\n<p>See also <a href=\"#/api/Ext.form.field.Base-cfg-checkChangeEvents\" rel=\"Ext.form.field.Base-cfg-checkChangeEvents\" class=\"docClass\">Ext.form.field.Base.checkChangeEvents</a>for controlling how changes to the field's value are detected.</p>\n\n",
        "linenr": 55,
        "html_filename": "Field.html"
      },
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-validator",
        "shortDoc": "A custom validation function to be called during field validation (getErrors)\n(defaults to undefined). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "validator",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A custom validation function to be called during field validation (<a href=\"#/api/Ext.form.field.File-method-getErrors\" rel=\"Ext.form.field.File-method-getErrors\" class=\"docClass\">getErrors</a>)\n(defaults to <tt>undefined</tt>). If specified, this function will be called first, allowing the\ndeveloper to override the default validation process.</p>\n\n\n<br><p>This function will be passed the following Parameters:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>value</code>: <i>Mixed</i>\n<div class=\"sub-desc\">The current field value</div></li>\n</ul></div>\n\n\n<br><p>This function is to Return:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>true</code>: <i>Boolean</i>\n<div class=\"sub-desc\"><code>true</code> if the value is valid</div></li>\n<li><code>msg</code>: <i>String</i>\n<div class=\"sub-desc\">An error message if the value is invalid</div></li>\n</ul></div>\n\n",
        "linenr": 172,
        "html_filename": "Text.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Field.html#Ext-form-field-Field-cfg-value",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "value",
        "owner": "Ext.form.field.Field",
        "doc": "<p>A value to initialize this field with (defaults to undefined).</p>\n",
        "linenr": 33,
        "html_filename": "Field.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-vtype",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "vtype",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A validation type name as defined in <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">Ext.form.field.VTypes</a> (defaults to <tt>undefined</tt>)</p>\n",
        "linenr": 112,
        "html_filename": "Text.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Text.html#Ext-form-field-Text-cfg-vtypeText",
        "shortDoc": "A custom error message to display in place of the default message provided\nfor the vtype currently set for this field...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "name": "vtypeText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>A custom error message to display in place of the default message provided\nfor the <b><code><a href=\"#/api/Ext.form.field.File-cfg-vtype\" rel=\"Ext.form.field.File-cfg-vtype\" class=\"docClass\">vtype</a></code></b> currently set for this field (defaults to <tt>undefined</tt>).\n<b>Note</b>: only applies if <b><code><a href=\"#/api/Ext.form.field.File-cfg-vtype\" rel=\"Ext.form.field.File-cfg-vtype\" class=\"docClass\">vtype</a></code></b> is set, else ignored.</p>\n",
        "linenr": 68,
        "html_filename": "Text.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n",
        "linenr": 350,
        "html_filename": "AbstractComponent.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Component2.html#Ext-Component-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Component. ...",
        "static": false,
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "doc": "<p>Creates new Component.</p>\n",
        "owner": "Ext.Component",
        "name": "File",
        "html_filename": "Component2.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 1
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-addCls\" rel=\"Ext.picker.Color-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2328,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2306,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "name": "skip"
          }
        ],
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.File-method-addUIClsToElement\" rel=\"Ext.form.field.File-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
        "linenr": 1463,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.File-method-fireEvent\" rel=\"Ext.form.field.File-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
        "linenr": 159,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to remove from the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
        "linenr": 1534,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
        "shortDoc": " ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n",
        "linenr": 2699,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must\nbe a omponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "linenr": 173,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "shortDoc": "Perform custom animation on this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "linenr": 207,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
        "shortDoc": "Applies the state to the object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
        "linenr": 225,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-autoSize",
        "shortDoc": "Automatically grows the field to accomodate the width of the text up to the maximum field width allowed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [

        ],
        "name": "autoSize",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Automatically grows the field to accomodate the width of the text up to the maximum field width allowed.\nThis only takes effect if <tt><a href=\"#/api/Ext.form.field.File-cfg-grow\" rel=\"Ext.form.field.File-cfg-grow\" class=\"docClass\">grow</a> = true</tt>, and fires the <a href=\"#/api/Ext.form.field.File-event-autosize\" rel=\"Ext.form.field.File-event-autosize\" class=\"docClass\">autosize</a> event if the\nwidth changes.</p>\n",
        "linenr": 633,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-batchChanges",
        "shortDoc": "A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent e...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A function containing the transaction code</p>\n",
            "name": "fn"
          }
        ],
        "name": "batchChanges",
        "owner": "Ext.form.field.Field",
        "doc": "<p>A utility for grouping a set of modifications which may trigger value changes into a single\ntransaction, to prevent excessive firing of <a href=\"#/api/Ext.form.field.File-event-change\" rel=\"Ext.form.field.File-event-change\" class=\"docClass\">change</a> events. This is useful for instance\nif the field has sub-fields which are being updated as a group; you don't want the container\nfield to check its own changed state for each subfield change.</p>\n",
        "linenr": 348,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
        "shortDoc": "Occurs before componentLayout is run. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
        "linenr": 2709,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-bubble",
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "name": "args"
          }
        ],
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 1007,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-capture",
        "shortDoc": "Starts capture on the specified Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to capture events from.</p>\n",
            "name": "o"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when an event is fired.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to\nthe Observable firing the event.</p>\n",
            "name": "scope"
          }
        ],
        "name": "capture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Starts capture on the specified Observable. All events will be passed to the supplied function with the event\nname + standard signature of the event <strong>before</strong> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
        "linenr": 54,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-center",
        "shortDoc": "Center this Component in its container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [

        ],
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n",
        "linenr": 251,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-checkChange",
        "shortDoc": "Checks whether the value of the field has changed since the last time it was checked. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "checkChange",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Checks whether the value of the field has changed since the last time it was checked. If the value\nhas changed, it:</p>\n\n\n<ol>\n<li>Fires the <a href=\"#/api/Ext.form.field.File-event-change\" rel=\"Ext.form.field.File-event-change\" class=\"docClass\">change event</a>,</li>\n<li>Performs validation if the <a href=\"#/api/Ext.form.field.File-cfg-validateOnChange\" rel=\"Ext.form.field.File-cfg-validateOnChange\" class=\"docClass\">validateOnChange</a> config is enabled, firing the\nvalidationchange event if the validity has changed, and</li>\n<li>Checks the <a href=\"#/api/Ext.form.field.File-method-isDirty\" rel=\"Ext.form.field.File-method-isDirty\" class=\"docClass\">dirty state</a> of the field and fires the <a href=\"#/api/Ext.form.field.File-event-dirtychange\" rel=\"Ext.form.field.File-event-dirtychange\" class=\"docClass\">dirtychange event</a>\nif it has changed.</li>\n</ol>\n\n",
        "linenr": 235,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-checkDirty",
        "shortDoc": "Checks the isDirty state of the field and if it has changed since the last time\nit was checked, fires the dirtychange...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "checkDirty",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Checks the <a href=\"#/api/Ext.form.field.File-method-isDirty\" rel=\"Ext.form.field.File-method-isDirty\" class=\"docClass\">isDirty</a> state of the field and if it has changed since the last time\nit was checked, fires the <a href=\"#/api/Ext.form.field.File-event-dirtychange\" rel=\"Ext.form.field.File-event-dirtychange\" class=\"docClass\">dirtychange</a> event.</p>\n",
        "linenr": 286,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-clearInvalid",
        "shortDoc": "Clear any invalid styles/messages for this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "clearInvalid",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Clear any invalid styles/messages for this field.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.File-method-isValid\" rel=\"Ext.form.field.File-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>true</code> if the value does not <i>pass</i> validation. So simply clearing a field's errors\nwill not necessarily allow submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "linenr": 741,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "linenr": 947,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "shortDoc": "Destroys the Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n",
        "linenr": 2891,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
        "shortDoc": "Disable the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n",
        "linenr": 2245,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "shortDoc": "Handles autoRender. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
        "linenr": 920,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "width"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isSetSize"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callingContainer"
          }
        ],
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "linenr": 2630,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
            "name": "constrainTo"
          }
        ],
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
        "linenr": 135,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
        "shortDoc": "Enable the component ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n",
        "linenr": 2222,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-extractFileInput",
        "shortDoc": "Only relevant if the instance's isFileUpload method returns true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "extractFileInput",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Only relevant if the instance's <a href=\"#/api/Ext.form.field.File-method-isFileUpload\" rel=\"Ext.form.field.File-method-isFileUpload\" class=\"docClass\">isFileUpload</a> method returns true. Returns a reference\nto the file input DOM element holding the user's selected file. The input will be appended into\nthe submission form and will not be returned, so this method should also create a replacement.</p>\n",
        "linenr": 373,
        "return": {
          "type": "HTMLInputElement",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "linenr": 876,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "linenr": 978,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "linenr": 992,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.form.field.File-method-enableBubble\" rel=\"Ext.form.field.File-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-focus",
        "shortDoc": "Try to focus this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "name": "selectText"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "name": "delay"
          }
        ],
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n",
        "linenr": 856,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
        "linenr": 2673,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 377,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveError",
        "shortDoc": "Gets the active error message for this component, if any. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "getActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Gets the active error message for this component, if any. This does not trigger\nvalidation on its own, it merely returns any message that the component may already hold.</p>\n",
        "linenr": 330,
        "return": {
          "type": "String",
          "doc": "<p>The active error message on the component; if there is no error, an empty string is returned.</p>\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-getActiveErrors",
        "shortDoc": "Gets an Array of any active error messages currently applied to the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "getActiveErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Gets an Array of any active error messages currently applied to the field. This does not trigger\nvalidation on its own, it merely returns any messages that the component may already hold.</p>\n",
        "linenr": 365,
        "return": {
          "type": "Array",
          "doc": "<p>The active error messages on the component; if there are no errors, an empty Array is returned.</p>\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-getBodyNaturalWidth",
        "shortDoc": "override\nTo get the natural width of the inputEl, we do a simple calculation based on the\n'size' config. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [

        ],
        "name": "getBodyNaturalWidth",
        "owner": "Ext.form.field.Text",
        "doc": "<p>override\nTo get the natural width of the inputEl, we do a simple calculation based on the\n'size' config. We use hard-coded numbers to approximate what browsers do natively,\nto avoid having to read any styles which would hurt performance.</p>\n",
        "linenr": 656,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getBox",
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 541,
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "linenr": 2443,
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "linenr": 2059,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-getErrors",
        "shortDoc": "Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to validate. The processed raw value will be used if nothing is passed</p>\n",
            "name": "value"
          }
        ],
        "name": "getErrors",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Validates a value according to the field's validation rules and returns an array of errors\nfor any failing validations. Validation rules are processed in the following order:</p>\n\n<ol>\n<li><p><strong>Field specific validator</strong></p>\n\n<p> A validator offers a way to customize and reuse a validation specification.\n If a field is configured with a <code><a href=\"#/api/Ext.form.field.File-cfg-validator\" rel=\"Ext.form.field.File-cfg-validator\" class=\"docClass\">validator</a></code>\n function, it will be passed the current field value.  The <code><a href=\"#/api/Ext.form.field.File-cfg-validator\" rel=\"Ext.form.field.File-cfg-validator\" class=\"docClass\">validator</a></code>\n function is expected to return either:</p>\n\n<ul>\n<li>Boolean <code>true</code>  if the value is valid (validation continues).</li>\n<li>a String to represent the invalid message if invalid (validation halts).</li>\n</ul>\n</li>\n<li><p><strong>Basic Validation</strong></p>\n\n<p> If the <code><a href=\"#/api/Ext.form.field.File-cfg-validator\" rel=\"Ext.form.field.File-cfg-validator\" class=\"docClass\">validator</a></code> has not halted validation,\n basic validation proceeds as follows:</p>\n\n<ul>\n<li><p><code><a href=\"#/api/Ext.form.field.File-cfg-allowBlank\" rel=\"Ext.form.field.File-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a></code>)</p>\n\n<p>  Depending on the configuration of <code><a href=\"#/api/Ext.form.field.File-cfg-allowBlank\" rel=\"Ext.form.field.File-cfg-allowBlank\" class=\"docClass\">allowBlank</a></code>, a\n  blank field will cause validation to halt at this step and return\n  Boolean true or false accordingly.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.File-cfg-minLength\" rel=\"Ext.form.field.File-cfg-minLength\" class=\"docClass\">minLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.File-cfg-minLengthText\" rel=\"Ext.form.field.File-cfg-minLengthText\" class=\"docClass\">minLengthText</a></code>)</p>\n\n<p>  If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.File-cfg-minLength\" rel=\"Ext.form.field.File-cfg-minLength\" class=\"docClass\">minLength</a></code>\n  specified, validation halts.</p></li>\n<li><p><code><a href=\"#/api/Ext.form.field.File-cfg-maxLength\" rel=\"Ext.form.field.File-cfg-maxLength\" class=\"docClass\">maxLength</a></code> : (Invalid message = <code><a href=\"#/api/Ext.form.field.File-cfg-maxLengthText\" rel=\"Ext.form.field.File-cfg-maxLengthText\" class=\"docClass\">maxLengthText</a></code>)</p>\n\n<p> If the passed value does not satisfy the <code><a href=\"#/api/Ext.form.field.File-cfg-maxLength\" rel=\"Ext.form.field.File-cfg-maxLength\" class=\"docClass\">maxLength</a></code>\n specified, validation halts.</p></li>\n</ul>\n</li>\n<li><p><strong>Preconfigured Validation Types (VTypes)</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field\n configured with a <code><a href=\"#/api/Ext.form.field.File-cfg-vtype\" rel=\"Ext.form.field.File-cfg-vtype\" class=\"docClass\">vtype</a></code> will utilize the\n corresponding <a href=\"#/api/Ext.form.field.VTypes\" rel=\"Ext.form.field.VTypes\" class=\"docClass\">VTypes</a> validation function.\n If invalid, either the field's <code><a href=\"#/api/Ext.form.field.File-cfg-vtypeText\" rel=\"Ext.form.field.File-cfg-vtypeText\" class=\"docClass\">vtypeText</a></code> or\n the VTypes vtype Text property will be used for the invalid message.\n Keystrokes on the field will be filtered according to the VTypes\n vtype Mask property.</p></li>\n<li><p><strong>Field specific regex test</strong></p>\n\n<p> If none of the prior validation steps halts validation, a field's\n configured <code><a href=\"#/api/Ext.form.field.File-cfg-regex\" rel=\"Ext.form.field.File-cfg-regex\" class=\"docClass\">regex</a></code> test will be processed.\n The invalid message for this test is configured with <code><a href=\"#/api/Ext.form.field.File-cfg-regexText\" rel=\"Ext.form.field.File-cfg-regexText\" class=\"docClass\">regexText</a></code></p></li>\n</ol>\n\n",
        "linenr": 496,
        "return": {
          "type": "Array",
          "doc": "<p>Array of any validation errors</p>\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-getFieldLabel",
        "shortDoc": "Returns the label for the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "getFieldLabel",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Returns the label for the field. Defaults to simply returning the <a href=\"#/api/Ext.form.field.File-cfg-fieldLabel\" rel=\"Ext.form.field.File-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a> config. Can be\noverridden to provide</p>\n",
        "linenr": 232,
        "return": {
          "type": "String",
          "doc": "<p>The configured field label, or empty string if not defined</p>\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
        "linenr": 2798,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "shortDoc": "Retrieves the id of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
        "linenr": 2047,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-getInputId",
        "shortDoc": "Returns the input id for this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getInputId",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Returns the input id for this field. If none was specified via the <a href=\"#/api/Ext.form.field.File-cfg-inputId\" rel=\"Ext.form.field.File-cfg-inputId\" class=\"docClass\">inputId</a> config,\nthen an id will be automatically generated.</p>\n",
        "linenr": 294,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "linenr": 1674,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableRenderData",
        "shortDoc": "Generates the arguments for the field decorations rendering template. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "getLabelableRenderData",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Generates the arguments for the field decorations <a href=\"#/api/Ext.form.field.File-cfg-labelableRenderTpl\" rel=\"Ext.form.field.File-cfg-labelableRenderTpl\" class=\"docClass\">rendering template</a>.</p>\n",
        "linenr": 241,
        "return": {
          "type": "Object",
          "doc": "<p>The template arguments</p>\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-getLabelableSelectors",
        "shortDoc": "Returns the additional Ext.AbstractComponent.renderSelectors for selecting the field\ndecoration elements from the ren...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "getLabelableSelectors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Returns the additional <a href=\"#/api/Ext.AbstractComponent-cfg-renderSelectors\" rel=\"Ext.AbstractComponent-cfg-renderSelectors\" class=\"docClass\">Ext.AbstractComponent.renderSelectors</a> for selecting the field\ndecoration elements from the rendered <a href=\"#/api/Ext.form.field.File-cfg-labelableRenderTpl\" rel=\"Ext.form.field.File-cfg-labelableRenderTpl\" class=\"docClass\">labelableRenderTpl</a>. Component classes using this mixin should\nbe sure and merge this method's result into the component's <a href=\"#/api/Ext.AbstractComponent-cfg-renderSelectors\" rel=\"Ext.AbstractComponent-cfg-renderSelectors\" class=\"docClass\">Ext.AbstractComponent.renderSelectors</a>\nbefore rendering.</p>\n",
        "linenr": 277,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "linenr": 2806,
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-getModelData",
        "shortDoc": "Returns the value(s) that should be saved to the Ext.data.Model instance for this field, when\nExt.form.Basic.updateRe...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "getModelData",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns the value(s) that should be saved to the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance for this field, when\n<a href=\"#/api/Ext.form.Basic-method-updateRecord\" rel=\"Ext.form.Basic-method-updateRecord\" class=\"docClass\">Ext.form.Basic.updateRecord</a> is called. Typically this will be an object with a single name-value\npair, the name being this field's <a href=\"#/api/Ext.form.field.File-method-getName\" rel=\"Ext.form.field.File-method-getName\" class=\"docClass\">name</a> and the value being its current data value. More\nadvanced field implementations may return more than one name-value pair. The returned values will be\nsaved to the corresponding field names in the Model.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "linenr": 190,
        "return": {
          "type": "Object",
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-getName",
        "shortDoc": "Returns the name attribute of the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns the <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a> attribute of the field. This is used as the parameter\nname when including the field value in a <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit()</a>.</p>\n",
        "linenr": 128,
        "return": {
          "type": "String",
          "doc": "<p>name The field <a href=\"#/api/Ext.form.field.Field-cfg-name\" rel=\"Ext.form.field.Field-cfg-name\" class=\"docClass\">name</a></p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "linenr": 2934,
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getPosition",
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "linenr": 606,
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-getRawValue",
        "shortDoc": "Returns the raw String value of the field, without performing any normalization, conversion, or validation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [

        ],
        "name": "getRawValue",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Returns the raw String value of the field, without performing any normalization, conversion, or validation.\nGets the current value of the input element if the field has been rendered, ignoring the value if it is the\n<a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a>. To get a normalized and converted value see <a href=\"#/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">getValue</a>.</p>\n",
        "linenr": 461,
        "return": {
          "type": "String",
          "doc": "<p>value The raw String value of the field</p>\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "linenr": 2782,
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.form.field.File-cfg-stateId\" rel=\"Ext.form.field.File-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
        "linenr": 750,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "shortDoc": "Gets the state id for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [

        ],
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n",
        "linenr": 237,
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplData",
        "shortDoc": "Creates and returns the data object to be used when rendering the fieldSubTpl. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getSubTplData",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Creates and returns the data object to be used when rendering the fieldSubTpl.</p>\n",
        "linenr": 302,
        "return": {
          "type": "Object",
          "doc": "<p>The template data</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-getSubTplMarkup",
        "shortDoc": "Gets the markup to be inserted into the outer template's bodyEl. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getSubTplMarkup",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Gets the markup to be inserted into the outer template's bodyEl. For fields this is the\nactual input element.</p>\n",
        "linenr": 323,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-getSubmitData",
        "shortDoc": "Returns the parameter(s) that would be included in a standard form submit for this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "getSubmitData",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns the parameter(s) that would be included in a standard form submit for this field. Typically this\nwill be an object with a single name-value pair, the name being this field's <a href=\"#/api/Ext.form.field.File-method-getName\" rel=\"Ext.form.field.File-method-getName\" class=\"docClass\">name</a> and the\nvalue being its current stringified value. More advanced field implementations may return more than one\nname-value pair.</p>\n\n\n<p>Note that the values returned from this method are not guaranteed to have been successfully\n<a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "linenr": 169,
        "return": {
          "type": "Object",
          "doc": "<p>A mapping of submit parameter names to values; each value should be a string, or an array\nof strings if that particular name has multiple values. It can also return <tt>null</tt> if there are no\nparameters to be submitted.</p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-getSubmitValue",
        "shortDoc": "Returns the value that would be included in a standard form submit for this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getSubmitValue",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Returns the value that would be included in a standard form submit for this field. This will be combined\nwith the field's name to form a <tt>name=value</tt> pair in the <a href=\"#/api/Ext.form.field.File-method-getSubmitData\" rel=\"Ext.form.field.File-method-getSubmitData\" class=\"docClass\">submitted parameters</a>.\nIf an empty string is returned then just the <tt>name=</tt> will be submitted; if <tt>null</tt> is returned\nthen nothing will be submitted.</p>\n\n\n<p>Note that the value returned will have been <a href=\"#/api/Ext.form.field.File-method-processRawValue\" rel=\"Ext.form.field.File-method-processRawValue\" class=\"docClass\">processed</a> but may or may not have\nbeen successfully <a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validated</a>.</p>\n\n",
        "linenr": 436,
        "return": {
          "type": "String",
          "doc": "<p>The value to be submitted, or <tt>null</tt>.</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-getValue",
        "shortDoc": "Returns the current data value of the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getValue",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Returns the current data value of the field. The type of value returned is particular to the type of the\nparticular field (e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>), as the result of calling <a href=\"#/api/Ext.form.field.File-method-rawToValue\" rel=\"Ext.form.field.File-method-rawToValue\" class=\"docClass\">rawToValue</a> on\nthe field's <a href=\"#/api/Ext.form.field.File-method-processRawValue\" rel=\"Ext.form.field.File-method-processRawValue\" class=\"docClass\">processed</a> String value. To return the raw String value, see <a href=\"#/api/Ext.form.field.File-method-getRawValue\" rel=\"Ext.form.field.File-method-getRawValue\" class=\"docClass\">getRawValue</a>.</p>\n",
        "linenr": 520,
        "return": {
          "type": "Mixed",
          "doc": "<p>value The field value</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
        "linenr": 2790,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-getXType",
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [

        ],
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "linenr": 965,
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "linenr": 2105,
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-hasActiveError",
        "shortDoc": "Tells whether the field currently has an active error message. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "hasActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Tells whether the field currently has an active error message. This does not trigger\nvalidation on its own, it merely looks for any message that the component may already hold.</p>\n",
        "linenr": 339,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-getActiveAnimation\" rel=\"Ext.picker.Color-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 369,
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
        "linenr": 1523,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-hide",
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Element/Component",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.form.field.File-cfg-hideMode\" rel=\"Ext.form.field.File-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "linenr": 751,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-initField",
        "shortDoc": "Initializes this Field mixin on the current instance. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "initField",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Initializes this Field mixin on the current instance. Components using this mixin should call\nthis method during their own initialization process.</p>\n",
        "linenr": 73,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-initLabelable",
        "shortDoc": "Performs initialization of this mixin. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "initLabelable",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
        "linenr": 214,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-initValue",
        "shortDoc": "Initializes the field's value based on the initial config. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "initValue",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Initializes the field's value based on the initial config.</p>\n",
        "linenr": 106,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "linenr": 1886,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "linenr": 2950,
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-isDirty",
        "shortDoc": "Returns true if the value of this Field has been changed from its originalValue. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "isDirty",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns true if the value of this Field has been changed from its <a href=\"#/api/Ext.form.field.File-property-originalValue\" rel=\"Ext.form.field.File-property-originalValue\" class=\"docClass\">originalValue</a>.\nWill always return false if the field is disabled.</p>\n\n\n<p>Note that if the owning <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">form</a> was configured with\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nthen the <a href=\"#/api/Ext.form.field.File-property-originalValue\" rel=\"Ext.form.field.File-property-originalValue\" class=\"docClass\">originalValue</a> is updated when the values are loaded by\n<a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a>.</p>\n\n",
        "linenr": 271,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this field has been changed from its original value (and\nis not disabled), false otherwise.</p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "linenr": 2282,
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "linenr": 2459,
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "linenr": 2467,
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-isEqual",
        "shortDoc": "Returns whether two field values are logically equal. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The first value to compare</p>\n",
            "name": "value1"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The second value to compare</p>\n",
            "name": "value2"
          }
        ],
        "name": "isEqual",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns whether two field <a href=\"#/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">values</a> are logically equal. Field implementations may override\nthis to provide custom comparison logic appropriate for the particular field's data type.</p>\n",
        "linenr": 158,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the values are equal, false if inequal.</p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-isFileUpload",
        "shortDoc": "Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for submitti...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "isFileUpload",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns whether this Field is a file upload field; if it returns true, forms will use\nspecial techniques for <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">submitting the form</a> via AJAX. See\n<a href=\"#/api/Ext.form.Basic-method-hasUpload\" rel=\"Ext.form.Basic-method-hasUpload\" class=\"docClass\">Ext.form.Basic.hasUpload</a> for details. If this returns true, the <a href=\"#/api/Ext.form.field.File-method-extractFileInput\" rel=\"Ext.form.field.File-method-extractFileInput\" class=\"docClass\">extractFileInput</a>\nmethod must also be implemented to return the corresponding file input element.</p>\n",
        "linenr": 362,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "linenr": 2451,
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [

        ],
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "linenr": 2298,
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-isValid",
        "shortDoc": "Returns whether or not the field value is currently valid by\nvalidating the processed raw value\nof the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [

        ],
        "name": "isValid",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Returns whether or not the field value is currently valid by\n<a href=\"#/api/Ext.form.field.File-method-getErrors\" rel=\"Ext.form.field.File-method-getErrors\" class=\"docClass\">validating</a> the <a href=\"#/api/Ext.form.field.File-method-processRawValue\" rel=\"Ext.form.field.File-method-processRawValue\" class=\"docClass\">processed raw value</a>\nof the field. <b>Note</b>: <a href=\"#/api/Ext.form.field.File-cfg-disabled\" rel=\"Ext.form.field.File-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n",
        "linenr": 687,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is valid, else false</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "shortDoc": "Returns true if this component is visible. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "linenr": 2182,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The xtype to check for this Component</p>\n",
            "name": "xtype"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "name": "shallow"
          }
        ],
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "linenr": 2074,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-markInvalid",
        "shortDoc": "Display one or more error messages associated with this field, using msgTarget to determine how to\ndisplay the messag...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The validation message(s) to display.</p>\n",
            "name": "errors"
          }
        ],
        "name": "markInvalid",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Display one or more error messages associated with this field, using <a href=\"#/api/Ext.form.field.File-cfg-msgTarget\" rel=\"Ext.form.field.File-cfg-msgTarget\" class=\"docClass\">msgTarget</a> to determine how to\ndisplay the messages and applying <a href=\"#/api/Ext.form.field.File-cfg-invalidCls\" rel=\"Ext.form.field.File-cfg-invalidCls\" class=\"docClass\">invalidCls</a> to the field's UI element.</p>\n\n\n<p><b>Note</b>: this method does not cause the Field's <a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validate</a> or <a href=\"#/api/Ext.form.field.File-method-isValid\" rel=\"Ext.form.field.File-method-isValid\" class=\"docClass\">isValid</a> methods to\nreturn <code>false</code> if the value does <i>pass</i> validation. So simply marking a Field as invalid\nwill not prevent submission of forms submitted with the <a href=\"#/api/Ext.form.action.Submit-cfg-clientValidation\" rel=\"Ext.form.action.Submit-cfg-clientValidation\" class=\"docClass\">Ext.form.action.Submit.clientValidation</a>\noption set.</p>\n\n",
        "linenr": 722,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.File-method-addManagedListener\" rel=\"Ext.form.field.File-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.File-method-removeManagedListener\" rel=\"Ext.form.field.File-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.File-method-mon\" rel=\"Ext.form.field.File-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.File-method-nextSibling\" rel=\"Ext.form.field.File-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "linenr": 2012,
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "shortDoc": "Returns the next sibling of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.File-method-nextNode\" rel=\"Ext.form.field.File-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "linenr": 1916,
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-observe",
        "shortDoc": "Sets observability on the passed class constructor. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The class constructor to make observable.</p>\n",
            "name": "c"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
            "name": "listeners"
          }
        ],
        "name": "observe",
        "owner": "Ext.util.Observable",
        "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
        "linenr": 69,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.form.field.File-method-fireEvent\" rel=\"Ext.form.field.File-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.form.field.File-method-previousSibling\" rel=\"Ext.form.field.File-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "linenr": 1976,
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.form.field.File-method-previousNode\" rel=\"Ext.form.field.File-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "linenr": 1946,
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-processRawValue",
        "shortDoc": "Performs any necessary manipulation of a raw String value to prepare it for conversion\nand/or validation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The unprocessed string value</p>\n",
            "name": "value"
          }
        ],
        "name": "processRawValue",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Performs any necessary manipulation of a raw String value to prepare it for conversion\nand/or <a href=\"#/api/Ext.form.field.File-method-validate\" rel=\"Ext.form.field.File-method-validate\" class=\"docClass\">validation</a>. For text fields this applies the configured <a href=\"#/api/Ext.form.field.File-cfg-stripCharsRe\" rel=\"Ext.form.field.File-cfg-stripCharsRe\" class=\"docClass\">stripCharsRe</a> to the\nraw value.</p>\n",
        "linenr": 325,
        "return": {
          "type": "String",
          "doc": "<p>The processed string value</p>\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-rawToValue",
        "shortDoc": "Converts a raw input field value into a mixed-type value that is suitable for this particular field type. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "rawValue"
          }
        ],
        "name": "rawToValue",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Converts a raw input field value into a mixed-type value that is suitable for this particular field type.\nThis allows controlling the normalization and conversion of user-entered values into field-type-appropriate\nvalues, e.g. a Date object for <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, and is invoked by <a href=\"#/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">getValue</a>.</p>\n\n\n<p>It is up to individual implementations to decide how to handle raw values that cannot be successfully\nconverted to the desired object type.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.File-method-valueToRaw\" rel=\"Ext.form.field.File-method-valueToRaw\" class=\"docClass\">valueToRaw</a> for the opposite conversion.</p>\n\n\n<p>The base implementation does no conversion, returning the raw value untouched.</p>\n\n",
        "linenr": 494,
        "return": {
          "type": "Mixed",
          "doc": "<p>The converted value.</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
        "shortDoc": "Removes all added captures from the Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to release</p>\n",
            "name": "o"
          }
        ],
        "name": "releaseCapture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes <strong>all</strong> added captures from the Observable.</p>\n",
        "linenr": 44,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "linenr": 2338,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "skip"
          }
        ],
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.form.field.File-method-removeUIClsFromElement\" rel=\"Ext.form.field.File-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
        "linenr": 1494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.form.field.File-method-mon\" rel=\"Ext.form.field.File-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to add to the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
        "linenr": 1574,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-reset",
        "shortDoc": "Resets the current field value to the originally-loaded value and clears any validation messages. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [

        ],
        "name": "reset",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Resets the current field value to the originally-loaded value and clears any validation messages.\nAlso adds <tt><b><a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a></b></tt> and <tt><b><a href=\"#/api/Ext.form.field.File-cfg-emptyCls\" rel=\"Ext.form.field.File-cfg-emptyCls\" class=\"docClass\">emptyCls</a></b></tt> if the\noriginal value was blank.</p>\n",
        "linenr": 375,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-resetOriginalValue",
        "shortDoc": "Resets the field's originalValue property so it matches the current value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "resetOriginalValue",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Resets the field's <a href=\"#/api/Ext.form.field.File-property-originalValue\" rel=\"Ext.form.field.File-property-originalValue\" class=\"docClass\">originalValue</a> property so it matches the current <a href=\"#/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">value</a>.\nThis is called by <a href=\"#/api/Ext.form.Basic\" rel=\"Ext.form.Basic\" class=\"docClass\">Ext.form.Basic</a>.<a href=\"#/api/Ext.form.Basic-method-setValues\" rel=\"Ext.form.Basic-method-setValues\" class=\"docClass\">setValues</a> if the form's\n<a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a> property is set to true.</p>\n",
        "linenr": 225,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.form.field.File-method-suspendEvents\" rel=\"Ext.form.field.File-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-selectText",
        "shortDoc": "Selects text in this field ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index where the selection should start (defaults to 0)</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index where the selection should end (defaults to the text length)</p>\n",
            "name": "end"
          }
        ],
        "name": "selectText",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Selects text in this field</p>\n",
        "linenr": 601,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.form.field.File-method-syncFx\" rel=\"Ext.form.field.File-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "linenr": 357,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-setActive",
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "name": "active"
          },
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "name": "newActive"
          }
        ],
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.form.field.File-event-activate\" rel=\"Ext.form.field.File-event-activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.form.field.File-event-deactivate\" rel=\"Ext.form.field.File-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
        "linenr": 218,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveError",
        "shortDoc": "Sets the active error message to the given string. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The error message</p>\n",
            "name": "msg"
          }
        ],
        "name": "setActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Sets the active error message to the given string. This replaces the entire error message\ncontents with the given string. Also see <a href=\"#/api/Ext.form.field.File-method-setActiveErrors\" rel=\"Ext.form.field.File-method-setActiveErrors\" class=\"docClass\">setActiveErrors</a> which accepts an Array of\nmessages and formats them according to the <a href=\"#/api/Ext.form.field.File-cfg-activeErrorsTpl\" rel=\"Ext.form.field.File-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "linenr": 348,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-setActiveErrors",
        "shortDoc": "Set the active error message to an Array of error messages. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The error messages</p>\n",
            "name": "errors"
          }
        ],
        "name": "setActiveErrors",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Set the active error message to an Array of error messages. The messages are formatted into\na single message string using the <a href=\"#/api/Ext.form.field.File-cfg-activeErrorsTpl\" rel=\"Ext.form.field.File-cfg-activeErrorsTpl\" class=\"docClass\">activeErrorsTpl</a>. Also see <a href=\"#/api/Ext.form.field.File-method-setActiveError\" rel=\"Ext.form.field.File-method-setActiveError\" class=\"docClass\">setActiveError</a>\nwhich allows setting the entire error contents with a single string.</p>\n\n<p>Note that this only updates the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-markInvalid\" rel=\"Ext.form.field.Base-method-markInvalid\" class=\"docClass\">markInvalid</a> instead.</p>\n",
        "linenr": 374,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "linenr": 362,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
        "shortDoc": "Enable or disable the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n",
        "linenr": 2290,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dock"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "layoutParent"
          }
        ],
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "linenr": 2865,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-setFieldDefaults",
        "shortDoc": "Applies a set of default configuration values to this Labelable instance. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The defaults to apply to the object.</p>\n",
            "name": "defaults"
          }
        ],
        "name": "setFieldDefaults",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Applies a set of default configuration values to this Labelable instance. For each of the\nproperties in the given object, check if this component hasOwnProperty that config; if not\nthen it's inheriting a default value from its prototype and we should apply the default value.</p>\n",
        "linenr": 431,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-setFieldStyle",
        "shortDoc": "Set the CSS style of the field input element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object/Function",
            "optional": false,
            "doc": "<p>The style(s) to apply. Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n",
            "name": "style"
          }
        ],
        "name": "setFieldStyle",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Set the <a href=\"#/api/Ext.form.field.File-cfg-fieldStyle\" rel=\"Ext.form.field.File-cfg-fieldStyle\" class=\"docClass\">CSS style</a> of the <a href=\"#/api/Ext.form.field.File-property-inputEl\" rel=\"Ext.form.field.File-property-inputEl\" class=\"docClass\">field input element</a>.</p>\n",
        "linenr": 344,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "shortDoc": "Sets the height of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.form.field.File-event-resize\" rel=\"Ext.form.field.File-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2769,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean/Object/String",
            "optional": false,
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "name": "load"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "name": "targetEl"
          }
        ],
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "linenr": 2830,
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "shortDoc": "Sets the page XY position of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
            "name": "animate"
          }
        ],
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.form.field.File-method-setPosition\" rel=\"Ext.form.field.File-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.File-event-move\" rel=\"Ext.form.field.File-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 504,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-setPosition",
        "shortDoc": "Sets the left and top of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new left</p>\n",
            "name": "left"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new top</p>\n",
            "name": "top"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "name": "animate"
          }
        ],
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.form.field.File-method-setPagePosition\" rel=\"Ext.form.field.File-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.form.field.File-event-move\" rel=\"Ext.form.field.File-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 420,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-setRawValue",
        "shortDoc": "Sets the field's raw value directly, bypassing value conversion, change detection, and\nvalidation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to set</p>\n",
            "name": "value"
          }
        ],
        "name": "setRawValue",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Sets the field's raw value directly, bypassing <a href=\"#/api/Ext.form.field.File-method-valueToRaw\" rel=\"Ext.form.field.File-method-valueToRaw\" class=\"docClass\">value conversion</a>, change detection, and\nvalidation. To set the value with these additional inspections see <a href=\"#/api/Ext.form.field.File-method-setValue\" rel=\"Ext.form.field.File-method-setValue\" class=\"docClass\">setValue</a>.</p>\n",
        "linenr": 461,
        "return": {
          "type": "Mixed",
          "doc": "<p>value The field value that is set</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-setReadOnly",
        "shortDoc": "Sets the read only state of this field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether the field should be read only.</p>\n",
            "name": "readOnly"
          }
        ],
        "name": "setReadOnly",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Sets the read only state of this field.</p>\n",
        "linenr": 566,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "shortDoc": "Sets the width and height of this Component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.form.field.File-event-resize\" rel=\"Ext.form.field.File-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "linenr": 2507,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
        "shortDoc": "Sets the UI for the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
        "linenr": 1417,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Text.html#Ext-form-field-Text-method-setValue",
        "shortDoc": "Sets a data value into the field and runs the change detection and validation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to set</p>\n",
            "name": "value"
          }
        ],
        "name": "setValue",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Sets a data value into the field and runs the change detection and validation. Also applies any configured\n<a href=\"#/api/Ext.form.field.File-cfg-emptyText\" rel=\"Ext.form.field.File-cfg-emptyText\" class=\"docClass\">emptyText</a> for text fields. To set the value directly without these inspections see <a href=\"#/api/Ext.form.field.File-method-setRawValue\" rel=\"Ext.form.field.File-method-setRawValue\" class=\"docClass\">setRawValue</a>.</p>\n",
        "linenr": 476,
        "return": {
          "type": "Ext.form.field.Text",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "linenr": 2173,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "shortDoc": "Sets the width of the component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.form.field.File-method-getEl\" rel=\"Ext.form.field.File-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.form.field.File-event-resize\" rel=\"Ext.form.field.File-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2757,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-show",
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "String/Element",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "name": "show",
        "owner": "Ext.Component",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.form.field.File-cfg-autoRender\" rel=\"Ext.form.field.File-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.form.field.File-property-zIndexManager\" rel=\"Ext.form.field.File-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "linenr": 648,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 335,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Color-method-stopAnimation\" rel=\"Ext.picker.Color-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 326,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.form.field.File-method-resumeEvents\" rel=\"Ext.form.field.File-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.form.field.File-method-resumeEvents\" rel=\"Ext.form.field.File-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "params": [

        ],
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.form.field.File-method-sequenceFx\" rel=\"Ext.form.field.File-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "linenr": 345,
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Animate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [

        ],
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "linenr": 242,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
        "linenr": 190,
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Floating.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.form.field.File-method-addListener\" rel=\"Ext.form.field.File-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.form.field.File-method-removeListener\" rel=\"Ext.form.field.File-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Labelable.html#Ext-form-Labelable-method-unsetActiveError",
        "shortDoc": "Clears the active error message(s). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [

        ],
        "name": "unsetActiveError",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Clears the active error message(s).</p>\n\n<p>Note that this only clears the error message element's text and attributes, you'll have\nto call doComponentLayout to actually update the field's layout to match. If the field extends\n<a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> you should call <a href=\"#/api/Ext.form.field.Base-method-clearInvalid\" rel=\"Ext.form.field.Base-method-clearInvalid\" class=\"docClass\">clearInvalid</a> instead.</p>\n",
        "linenr": 391,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "linenr": 1895,
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
        "shortDoc": "Update the content area of a component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
            "name": "htmlOrData"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "name": "loadScripts"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "name": "callback"
          }
        ],
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n",
        "linenr": 2141,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Component2.html#Ext-Component-method-updateBox",
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 554,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Component2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Field.html#Ext-form-field-Field-method-validate",
        "shortDoc": "Returns whether or not the field value is currently valid by validating the\nfield's current value, and fires the vali...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [

        ],
        "name": "validate",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Returns whether or not the field value is currently valid by <a href=\"#/api/Ext.form.field.File-method-getErrors\" rel=\"Ext.form.field.File-method-getErrors\" class=\"docClass\">validating</a> the\nfield's current value, and fires the <a href=\"#/api/Ext.form.field.File-event-validitychange\" rel=\"Ext.form.field.File-event-validitychange\" class=\"docClass\">validitychange</a> event if the field's validity has\nchanged since the last validation. <b>Note</b>: <a href=\"#/api/Ext.form.field.File-cfg-disabled\" rel=\"Ext.form.field.File-cfg-disabled\" class=\"docClass\">disabled</a> fields are always treated as valid.</p>\n\n\n<p>Custom implementations of this method are allowed to have side-effects such as triggering error\nmessage display. To validate without side-effects, use <a href=\"#/api/Ext.form.field.File-method-isValid\" rel=\"Ext.form.field.File-method-isValid\" class=\"docClass\">isValid</a>.</p>\n\n",
        "linenr": 330,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is valid, else false</p>\n"
        },
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-validateValue",
        "shortDoc": "Uses getErrors to build an array of validation errors. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "name": "validateValue",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Uses <a href=\"#/api/Ext.form.field.File-method-getErrors\" rel=\"Ext.form.field.File-method-getErrors\" class=\"docClass\">getErrors</a> to build an array of validation errors. If any errors are found, they are passed\nto <a href=\"#/api/Ext.form.field.File-method-markInvalid\" rel=\"Ext.form.field.File-method-markInvalid\" class=\"docClass\">markInvalid</a> and false is returned, otherwise true is returned.</p>\n\n\n<p>Previously, subclasses were invited to provide an implementation of this to process validations - from 3.2\nonwards <a href=\"#/api/Ext.form.field.File-method-getErrors\" rel=\"Ext.form.field.File-method-getErrors\" class=\"docClass\">getErrors</a> should be overridden instead.</p>\n\n",
        "linenr": 699,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if all validations passed, false if one or more failed</p>\n"
        },
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base.html#Ext-form-field-Base-method-valueToRaw",
        "shortDoc": "Converts a mixed-type value to a raw representation suitable for displaying in the field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The mixed-type value to convert to the raw representation.</p>\n",
            "name": "value"
          }
        ],
        "name": "valueToRaw",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Converts a mixed-type value to a raw representation suitable for displaying in the field. This allows\ncontrolling how value objects passed to <a href=\"#/api/Ext.form.field.File-method-setValue\" rel=\"Ext.form.field.File-method-setValue\" class=\"docClass\">setValue</a> are shown to the user, including localization.\nFor instance, for a <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a>, this would control how a Date object passed to <a href=\"#/api/Ext.form.field.File-method-setValue\" rel=\"Ext.form.field.File-method-setValue\" class=\"docClass\">setValue</a>\nwould be converted to a String for display in the field.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.File-method-rawToValue\" rel=\"Ext.form.field.File-method-rawToValue\" class=\"docClass\">rawToValue</a> for the opposite conversion.</p>\n\n\n<p>The base implementation simply does a standard toString conversion, and converts\n<a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">empty values</a> to an empty string.</p>\n\n",
        "linenr": 479,
        "return": {
          "type": "Mixed",
          "doc": "<p>The converted raw value.</p>\n"
        },
        "html_filename": "Base.html"
      }
    ],
    "property": [
      {
        "type": "Ext.core.Element",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Labelable.html#Ext-form-Labelable-property-bodyEl",
        "shortDoc": "The div Element wrapping the component's contents. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "bodyEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The div Element wrapping the component's contents. Only available after the component has been rendered.</p>\n",
        "linenr": 293,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Ext.button.Button",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "File.html#Ext-form-field-File-property-button",
        "shortDoc": "A reference to the trigger Button component created for this upload field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "button",
        "owner": "Ext.form.field.File",
        "doc": "<p>A reference to the trigger Button component created for this upload field. Only\npopulated after this component is rendered.</p>\n",
        "linenr": 98,
        "html_filename": "File.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
        "linenr": 395,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Ext.core.Element",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Labelable.html#Ext-form-Labelable-property-errorEl",
        "shortDoc": "The div Element that will contain the component's error message(s). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "errorEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The div Element that will contain the component's error message(s). Note that depending on the\nconfigured <a href=\"#/api/Ext.form.field.File-cfg-msgTarget\" rel=\"Ext.form.field.File-cfg-msgTarget\" class=\"docClass\">msgTarget</a>, this element may be hidden in favor of some other form of\npresentation, but will always be present in the DOM for use by assistive technologies.</p>\n",
        "linenr": 300,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Ext.core.Element",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "File.html#Ext-form-field-File-property-fileInputEl",
        "shortDoc": "A reference to the invisible file input element created for this upload field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "name": "fileInputEl",
        "owner": "Ext.form.field.File",
        "doc": "<p>A reference to the invisible file input element created for this upload field. Only\npopulated after this component is rendered.</p>\n",
        "linenr": 91,
        "html_filename": "File.html"
      },
      {
        "type": "Ext.Container",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Component2.html#Ext-Component-property-floatParent",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.File-property-zIndexManager\" rel=\"Ext.form.field.File-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
        "linenr": 224,
        "html_filename": "Component2.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.form.field.File-cfg-frame\" rel=\"Ext.form.field.File-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
        "linenr": 228,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Ext.core.Element",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Base.html#Ext-form-field-Base-property-inputEl",
        "shortDoc": "The input Element for this Field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "name": "inputEl",
        "owner": "Ext.form.field.Base",
        "doc": "<p>The input Element for this Field. Only available after the field has been rendered.</p>\n",
        "linenr": 367,
        "html_filename": "Base.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Labelable.html#Ext-form-Labelable-property-isFieldLabelable",
        "shortDoc": "Flag denoting that this object is labelable as a field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "isFieldLabelable",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Flag denoting that this object is labelable as a field. Always true.</p>\n",
        "linenr": 61,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Field.html#Ext-form-field-Field-property-isFormField",
        "shortDoc": "Flag denoting that this component is a Field. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "isFormField",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Flag denoting that this component is a Field. Always true.</p>\n",
        "linenr": 26,
        "html_filename": "Field.html"
      },
      {
        "type": "Ext.core.Element",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Labelable.html#Ext-form-Labelable-property-labelEl",
        "shortDoc": "The label Element for this component. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "name": "labelEl",
        "owner": "Ext.form.Labelable",
        "doc": "<p>The label Element for this component. Only available after the component has been rendered.</p>\n",
        "linenr": 286,
        "html_filename": "Labelable.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
        "linenr": 534,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Field.html#Ext-form-field-Field-property-originalValue",
        "shortDoc": "The original value of the field as configured in the value configuration, or as loaded by\nthe last form load operatio...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "name": "originalValue",
        "owner": "Ext.form.field.Field",
        "doc": "<p>The original value of the field as configured in the <a href=\"#/api/Ext.form.field.File-cfg-value\" rel=\"Ext.form.field.File-cfg-value\" class=\"docClass\">value</a> configuration, or as loaded by\nthe last form load operation if the form's <a href=\"#/api/Ext.form.Basic-cfg-trackResetOnLoad\" rel=\"Ext.form.Basic-cfg-trackResetOnLoad\" class=\"docClass\">trackResetOnLoad</a>\nsetting is <code>true</code>.</p>\n",
        "linenr": 113,
        "html_filename": "Field.html"
      },
      {
        "type": "Ext.Container",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.form.field.File-cfg-itemId\" rel=\"Ext.form.field.File-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
        "linenr": 102,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
        "linenr": 521,
        "html_filename": "AbstractComponent.html"
      },
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "type": "Ext.ZIndexManager",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "shortDoc": "Optional. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.form.field.File-method-toFront\" rel=\"Ext.form.field.File-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.form.field.File-method-toBack\" rel=\"Ext.form.field.File-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.form.field.File-cfg-floating\" rel=\"Ext.form.field.File-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.form.field.File-property-floatParent\" rel=\"Ext.form.field.File-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
        "linenr": 209,
        "html_filename": "Component2.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n",
        "linenr": 565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Parent Container</p>\n",
            "name": "container"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>position of Component</p>\n",
            "name": "pos"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
        "linenr": 585,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "shortDoc": "Fires after the component rendering is finished. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.form.field.File-property-rendered\" rel=\"Ext.form.field.File-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
        "linenr": 652,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Text.html#Ext-form-field-Text-event-autosize",
        "shortDoc": "Fires when the autoSize function is triggered and the field is\nresized according to the grow/growMin/growMax configs ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Text",
            "optional": false,
            "doc": "<p>This text field</p>\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new field width</p>\n",
            "name": "width"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "autosize",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Fires when the <tt><b><a href=\"#/api/Ext.form.field.File-method-autoSize\" rel=\"Ext.form.field.File-method-autoSize\" class=\"docClass\">autoSize</a></b></tt> function is triggered and the field is\nresized according to the <a href=\"#/api/Ext.form.field.File-cfg-grow\" rel=\"Ext.form.field.File-cfg-grow\" class=\"docClass\">grow</a>/<a href=\"#/api/Ext.form.field.File-cfg-growMin\" rel=\"Ext.form.field.File-cfg-growMin\" class=\"docClass\">growMin</a>/<a href=\"#/api/Ext.form.field.File-cfg-growMax\" rel=\"Ext.form.field.File-cfg-growMax\" class=\"docClass\">growMax</a> configs as a result.\nThis event provides a hook for the developer to apply additional logic at runtime to resize the\nfield if needed.</p>\n",
        "linenr": 231,
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
        "linenr": 557,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
        "linenr": 571,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "shortDoc": "Fires before the component is destroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.File-event-destroy\" rel=\"Ext.form.field.File-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.form.field.File-event-destroy\" rel=\"Ext.form.field.File-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
        "linenr": 660,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.form.field.File-event-hide\" rel=\"Ext.form.field.File-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
        "linenr": 618,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "shortDoc": "Fires before the component is rendered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.form.field.File-property-rendered\" rel=\"Ext.form.field.File-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.form.field.File-event-render\" rel=\"Ext.form.field.File-event-render\" class=\"docClass\">render</a>.</p>\n",
        "linenr": 639,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.form.field.File-event-show\" rel=\"Ext.form.field.File-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
        "linenr": 605,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "shortDoc": "Fires before the state of the object is restored. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
        "linenr": 101,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
        "linenr": 122,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Base.html#Ext-form-field-Base-event-blur",
        "shortDoc": "Fires when this field loses input focus. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Base",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "blur",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Fires when this field loses input focus.</p>\n",
        "linenr": 242,
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "File.html#Ext-form-field-File-event-change",
        "shortDoc": "Fires when the underlying file input field's value has changed from the user\nselecting a new file from the system fil...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
        "private": false,
        "params": [
          {
            "type": "Ext.ux.form.FileUploadField",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The file value returned by the underlying file input field</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "change",
        "owner": "Ext.form.field.File",
        "doc": "<p>Fires when the underlying file input field's value has changed from the user\nselecting a new file from the system file selection dialog.</p>\n",
        "linenr": 83,
        "html_filename": "File.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
        "linenr": 579,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "shortDoc": "Fires after the component is destroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.form.field.File-event-destroy\" rel=\"Ext.form.field.File-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
        "linenr": 666,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Field.html#Ext-form-field-Field-event-dirtychange",
        "shortDoc": "Fires when a change in the field's isDirty state is detected. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Field",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the field is now dirty</p>\n",
            "name": "isDirty"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "dirtychange",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Fires when a change in the field's <a href=\"#/api/Ext.form.field.File-method-isDirty\" rel=\"Ext.form.field.File-method-isDirty\" class=\"docClass\">isDirty</a> state is detected.</p>\n",
        "linenr": 94,
        "html_filename": "Field.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "shortDoc": "Fires after the component is disabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n",
        "linenr": 593,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "shortDoc": "Fires after the component is enabled. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n",
        "linenr": 599,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Labelable.html#Ext-form-Labelable-event-errorchange",
        "shortDoc": "Fires when the active error message is changed via setActiveError. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/Labelable.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.Labelable",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The active error message</p>\n",
            "name": "error"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "errorchange",
        "owner": "Ext.form.Labelable",
        "doc": "<p>Fires when the active error message is changed via <a href=\"#/api/Ext.form.field.File-method-setActiveError\" rel=\"Ext.form.field.File-method-setActiveError\" class=\"docClass\">setActiveError</a>.</p>\n",
        "linenr": 222,
        "html_filename": "Labelable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Base.html#Ext-form-field-Base-event-focus",
        "shortDoc": "Fires when this field receives input focus. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Base",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "focus",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Fires when this field receives input focus.</p>\n",
        "linenr": 236,
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "shortDoc": "Fires after the component is hidden. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.form.field.File-event-hide\" rel=\"Ext.form.field.File-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
        "linenr": 625,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Text.html#Ext-form-field-Text-event-keydown",
        "shortDoc": "Keydown input field event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Text",
            "optional": false,
            "doc": "<p>This text field</p>\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "keydown",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Keydown input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.File-cfg-enableKeyEvents\" rel=\"Ext.form.field.File-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "linenr": 242,
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Text.html#Ext-form-field-Text-event-keypress",
        "shortDoc": "Keypress input field event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Text",
            "optional": false,
            "doc": "<p>This text field</p>\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "keypress",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Keypress input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.File-cfg-enableKeyEvents\" rel=\"Ext.form.field.File-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "linenr": 258,
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Text.html#Ext-form-field-Text-event-keyup",
        "shortDoc": "Keyup input field event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Text.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Text",
            "optional": false,
            "doc": "<p>This text field</p>\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "keyup",
        "owner": "Ext.form.field.Text",
        "doc": "<p>Keyup input field event. This event only fires if <tt><b><a href=\"#/api/Ext.form.field.File-cfg-enableKeyEvents\" rel=\"Ext.form.field.File-cfg-enableKeyEvents\" class=\"docClass\">enableKeyEvents</a></b></tt>\nis set to true.</p>\n",
        "linenr": 250,
        "html_filename": "Text.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "shortDoc": "Fires after the component is moved. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n",
        "linenr": 680,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Container which holds the component</p>\n",
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n",
        "linenr": 632,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "shortDoc": "Fires after the component markup is rendered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.form.field.File-property-rendered\" rel=\"Ext.form.field.File-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
        "linenr": 646,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "shortDoc": "Fires after the component is resized. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is resized.</p>\n",
        "linenr": 672,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.form.field.File-event-show\" rel=\"Ext.form.field.File-event-show\" class=\"docClass\">show</a> method.</p>\n",
        "linenr": 612,
        "html_filename": "AbstractComponent.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Base.html#Ext-form-field-Base-event-specialkey",
        "shortDoc": "Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Base.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Base",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "specialkey",
        "owner": "Ext.form.field.Base",
        "doc": "<p>Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed.\nTo handle other keys see Ext.panel.Panel.keys or <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a>.\nYou can check <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">Ext.EventObject.getKey</a> to determine which key was pressed.\nFor example:</p>\n\n<pre><code>var form = new Ext.form.Panel({\n    ...\n    items: [{\n            fieldLabel: 'Field 1',\n            name: 'field1',\n            allowBlank: false\n        },{\n            fieldLabel: 'Field 2',\n            name: 'field2',\n            listeners: {\n                specialkey: function(field, e){\n                    // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,\n                    // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN\n                    if (e.<a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> == e.ENTER) {\n                        var form = field.up('form').getForm();\n                        form.submit();\n                    }\n                }\n            }\n        }\n    ],\n    ...\n});\n</code></pre>\n\n",
        "linenr": 248,
        "html_filename": "Base.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "shortDoc": "Fires after the state of the object is restored. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n",
        "linenr": 112,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
        "linenr": 133,
        "html_filename": "Stateful.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "Field.html#Ext-form-field-Field-event-validitychange",
        "shortDoc": "Fires when a change in the field's validity is detected. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/Field.js",
        "private": false,
        "params": [
          {
            "type": "Ext.form.field.Field",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the field is now valid</p>\n",
            "name": "isValid"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "validitychange",
        "owner": "Ext.form.field.Field",
        "doc": "<p>Fires when a change in the field's validity is detected.</p>\n",
        "linenr": 87,
        "html_filename": "Field.html"
      }
    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.form.field.Base",
    "Ext.form.field.Text"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "File.html#Ext-form-field-File",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": true,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/File.js",
  "private": false,
  "alternateClassNames": [
    "Ext.form.FileUploadField",
    "Ext.ux.form.FileUploadField",
    "Ext.form.File"
  ],
  "name": "Ext.form.field.File",
  "doc": "<p>A file upload field which has custom styling and allows control over the button text and other\nfeatures of <a href=\"#/api/Ext.form.field.Text\" rel=\"Ext.form.field.Text\" class=\"docClass\">text fields</a> like <a href=\"#/api/Ext.form.field.Text-cfg-emptyText\" rel=\"Ext.form.field.Text-cfg-emptyText\" class=\"docClass\">empty text</a>.\nIt uses a hidden file input element behind the scenes to allow user selection of a file and to\nperform the actual upload during <a href=\"#/api/Ext.form.Basic-method-submit\" rel=\"Ext.form.Basic-method-submit\" class=\"docClass\">form submit</a>.</p>\n\n<p>Because there is no secure cross-browser way to programmatically set the value of a file input,\nthe standard Field <code>setValue</code> method is not implemented. The <code><a href=\"#/api/Ext.form.field.File-method-getValue\" rel=\"Ext.form.field.File-method-getValue\" class=\"docClass\">getValue</a></code> method will return\na value that is browser-dependent; some have just the file name, some have a full path, some use\na fake path.\n<p><img src=\"doc-resources/Ext.form.File/Ext.form.File.png\" alt=\"Ext.form.File component\"></p></p>\n\n<h1>Example Usage:</h1>\n\n<pre><code>Ext.create('Ext.form.Panel', {\n    title: 'Upload a Photo',\n    width: 400,\n    bodyPadding: 10,\n    frame: true,\n    renderTo: Ext.getBody(),    \n    items: [{\n        xtype: 'filefield',\n        name: 'photo',\n        fieldLabel: 'Photo',\n        labelWidth: 50,\n        msgTarget: 'side',\n        allowBlank: false,\n        anchor: '100%',\n        buttonText: 'Select Photo...'\n    }],\n\n    buttons: [{\n        text: 'Upload',\n        handler: function() {\n            var form = this.up('form').getForm();\n            if(form.isValid()){\n                form.submit({\n                    url: 'photo-upload.php',\n                    waitMsg: 'Uploading your photo...',\n                    success: function(fp, o) {\n                        Ext.Msg.alert('Success', 'Your photo \"' + o.result.file + '\" has been uploaded.');\n                    }\n                });\n            }\n        }\n    }]\n});\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [
    "filefield",
    "fileuploadfield"
  ],
  "html_filename": "File.html",
  "extends": "Ext.form.field.Text"
});