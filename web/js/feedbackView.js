!(function(global) {
  'use strict';

  var showFeedback,
    container,
    sendButton,
    tabHeaders,
    tabContents;

  var feedbackReportSelector = '.feedback-report';

  function showForm() {
    resetForm();
    return Modal.show(feedbackReportSelector);
  }

  function hideForm() {
    return Modal.hide(feedbackReportSelector);
  }

  var init = function() {
    container = document.querySelector(feedbackReportSelector);
    showFeedback = document.querySelector('#showFeedback');
    tabHeaders = document.querySelectorAll('.feedback-report .tab-header');
    tabContents = document.querySelectorAll('.feedback-report .tab-contents');
    // sendButton = document.querySelector('.feedback-report .send-feedback');
    // audioScore = document.querySelector('.feedback-report .audio-score');
    // videoScore = document.querySelector('.feedback-report .video-score');
    // otherInfo = document.querySelector('.feedback-report .other-info');
    // reportButton = document.querySelector('.feedback-report .report-issue');
    addHandlers();
  };

  var resetForm = function() {
    // otherInfo.value = '';
  };

  var addHandlers = function() {
    tabHeaders.forEach(function(tabHeader) {
      tabHeader.addEventListener('click', function(event) {
        var activeHeader = event.currentTarget;
        var currentTab = document.querySelector('#' + activeHeader.dataset.tab);
        tabHeaders.forEach(function(header) {
          header.classList.remove('active');
        });
        activeHeader.classList.add('active');
        debugger;
        tabContents.forEach(function(tab) {
          debugger;
          tab.classList.remove('active');
        });
        currentTab.classList.add('active');
      });
    });
    // sendButton.addEventListener('click', function(event) {
    //   event.preventDefault();

    //   Utils.sendEvent('feedbackView:sendFeedback', {
    //     audioScore: audioScore.options[audioScore.selectedIndex].value,
    //     videoScore: videoScore.options[videoScore.selectedIndex].value,
    //     description: otherInfo.value
    //   });

    //   hideForm();
    // });

    // reportButton.addEventListener('click', function(event) {
    //   event.preventDefault();

    //   Utils.sendEvent('feedbackView:reportIssue');

    //   hideForm();
    // });

    showFeedback && showFeedback.addEventListener('click', function onShowFeedbackClicked(event) {
      event.preventDefault();
      showForm();
    });
  };

  global.FeedbackView = {
    init: init
  };
}(this));
