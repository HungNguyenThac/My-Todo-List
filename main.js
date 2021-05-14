//auto show time
window.onload = function(){
    setInterval(function(){
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        $('.clock').text(dateTime);
    })
}
// note popup
$('.column4').each(function(){
    this.ondblclick = function(){
        $('.addnote').toggleClass('addnoteShow');
        $('.addnote-bottom-text').val();
    column = this
    $('.addnote-confirm').click(function() {
        noteChange = $('.addnote-bottom-text').val();
        $(column).text(noteChange)
    })
}})
$('.addnote-confirm').click(function(){
    $('.addnote').removeClass('addnoteShow')
});

$('body').click(function(event) {
   if(!$(event.target).closest('.addnote').length && !$(event.target).is('.addnote')) {
     $(".addnote").removeClass('addnoteShow');
   }     
});
$('.addnote').draggable({
    containment: "document",
})

//content popup
$('.column3').each(function(){
    this.ondblclick = function(){
        $('.addwork').toggleClass('addworkShow');
        $('.addwork-bottom-text').val();
    column = this
    $('.addwork-confirm').click(function() {
        noteChange = $('.addwork-bottom-text').val();
        $(column).text(noteChange)
    })
}})
$('.addwork-confirm').click(function(){
    $('.addwork').removeClass('addworkShow')
});

$('body').click(function(event) {
   if(!$(event.target).closest('.addwork').length && !$(event.target).is('.addwork')) {
     $(".addwork").removeClass('addworkShow');
   }     
});

$('.addwork').draggable({
    containment: "document",
})

// sortAbble
$(function() {
    $('#board--parent1').sortable({})
    $('#board--parent2').sortable({})
    $('#board--parent3').sortable({})
    $('#board--parent4').sortable({})
    $('#board--parent5').sortable({})
    $('#board--parent6').sortable({})
    $('#board--parent7').sortable({})
});

//Draggable
$('.board-1').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work1');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent1",
            start: function(){
                $(this).css({
                    'background-color': 'rgb(238,174,205',
                })
                $(timeWork).css('background-color', 'rgb(238,174,205')
                $(confirmSelected).css({
                    'background-color': 'rgb(238,174,205',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': 'rgb(247,213,230)',
                })
                $(timeWork).css('background-color', 'rgb(247,213,230)')
                $(confirmSelected).css({
                    'background-color': 'rgb(247,213,230)',
                })
            }
        })
    }
})
//board2
$('.board-2').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work2');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent2",
            start: function(){
                $(this).css({
                    'background-color': '#f1aeb5',
                })
                $(timeWork).css('background-color', '#f1aeb5')
                $(confirmSelected).css({
                    'background-color': '#f1aeb5',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': '#f8d7da',
                })
                $(timeWork).css('background-color', '#f8d7da')
                $(confirmSelected).css({
                    'background-color': 'r#f8d7da',
                })
            }
        })
    }
})
//board3
$('.board-3').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work3');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent3",
            start: function(){
                $(this).css({
                    'background-color': '#feb272',
                })
                $(timeWork).css('background-color', '#feb272')
                $(confirmSelected).css({
                    'background-color': '#feb272',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': '#ffe5d0',
                })
                $(timeWork).css('background-color', '#ffe5d0')
                $(confirmSelected).css({
                    'background-color': '#ffe5d0',
                })
            }
        })
    }
})
//board4
$('.board-4').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work4');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent4",
            start: function(){
                $(this).css({
                    'background-color': 'rgb(255,218,106)',
                })
                $(timeWork).css('background-color', 'rgb(255,218,106)')
                $(confirmSelected).css({
                    'background-color': 'rgb(255,218,106)',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': 'rgb(255,243,205)',
                })
                $(timeWork).css('background-color', 'rgb(255,243,205)')
                $(confirmSelected).css({
                    'background-color': 'rgb(255,243,205)',
                })
            }
        })
    }
})
//board5
$('.board-5').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work5');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent5",
            start: function(){
                $(this).css({
                    'background-color': 'rgb(117,183,152)',
                })
                $(timeWork).css('background-color', 'rgb(117,183,152)')
                $(confirmSelected).css({
                    'background-color': 'rgb(117,183,152)',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': 'rgb(209,231,221)',
                })
                $(timeWork).css('background-color', 'rgb(209,231,221)')
                $(confirmSelected).css({
                    'background-color': 'rgb(209,231,221)',
                })
            }
        })
    }
})
//board6
$('.board-6').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work6');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent6",
            start: function(){
                $(this).css({
                    'background-color': 'rgb(163,112,247)',
                })
                $(timeWork).css('background-color', 'rgb(163,112,247)')
                $(confirmSelected).css({
                    'background-color': 'rgb(163,112,247)',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': 'rgb(224,207,252)',
                })
                $(timeWork).css('background-color', 'rgb(224,207,252)')
                $(confirmSelected).css({
                    'background-color': 'rgb(224,207,252)',
                })
            }
        })
    }
})
//board7
$('.board-7').each(function(){
    this.onmouseenter = function(){
        elementSelected = this
        timeWork = elementSelected.querySelector('.column2 .time-work7');
        confirmSelected = elementSelected.querySelector('.column5')
        $(elementSelected).draggable({
            connectToSortable: "#board--parent7",
            start: function(){
                $(this).css({
                    'background-color': 'rgb(110,223,246)',
                })
                $(timeWork).css('background-color', 'rgb(110,223,246)')
                $(confirmSelected).css({
                    'background-color': 'rgb(110,223,246)',
                })
            },
            drag: function(){
                $(this).css({
                    'z-index': '1',
                })
            },
            stop: function(){
                $(this).css({
                    'background-color': 'rgb(207,244,252)',
                })
                $(timeWork).css('background-color', 'rgb(207,244,252)')
                $(confirmSelected).css({
                    'background-color': 'rgb(207,244,252)',
                })
            }
        })
    }
})

//confirm
$('.btn-confirm1').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1'
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work1')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
    })
    var removeParent = parentOfColumn5
    $(removeParent).remove()
    $('#board--parent1').append(removeParent)
})
//confirm2
$('.btn-confirm2').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work2')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent2 = parentOfColumn5
    $(removeParent2).remove()
    $('#board--parent2').append(removeParent2)
})
//confirm3
$('.btn-confirm3').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work3')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent3 = parentOfColumn5
    $(removeParent3).remove()
    $('#board--parent3').append(removeParent3)
})

//confirm4
$('.btn-confirm4').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work4')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent4 = parentOfColumn5
    $(removeParent4).remove()
    $('#board--parent4').append(removeParent4)
})
//board-5
$('.btn-confirm5').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work5')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent5 = parentOfColumn5
    $(removeParent5).remove()
    $('#board--parent5').append(removeParent5)
})
//board-6
$('.btn-confirm6').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work6')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent6 = parentOfColumn5
    $(removeParent6).remove()
    $('#board--parent6').append(removeParent6)
})
//board7
$('.btn-confirm7').click(function(){
    column5 = $(this).parent()
    parentOfColumn5 = $(column5).parent()
    $(parentOfColumn5).draggable({
        cancel: '.row1',
    })
    $(column5).css({
        'background-color' : 'rgb(120,223,192)',
    })
    $(parentOfColumn5).css({
        'background-color': 'rgb(120,223,192)'
    })
   $(parentOfColumn5).each(function(){
        column2 = this.querySelector('.column2')
        $(column2.querySelector('.time-work7')).css({
            'background-color': 'rgb(120,223,192)'
        })
        $(column2.querySelector('.far.fa-check-circle')).css({
            'display' : 'block',
        })
   })
   $(parentOfColumn5).each(function(){
    var column3 = this.querySelector('.column3')
    $(column3).off('dblclick')
})
    var removeParent7 = parentOfColumn5
    $(removeParent7).remove()
    $('#board--parent7').append(removeParent7)
})
//đổi thứ
$('.thuNoiChung').each(function(index, element){

    $(element).click(function(){

        var dayActive = document.querySelector('.thuNoiChung.active')
        $(dayActive).removeClass('active')
        var boardActive = document.querySelector('.board-body.active')
        $(boardActive).removeClass('active')

        $(this).addClass('active')
        var boardSelected = $('.board-body').eq(index)
        $(boardSelected).addClass('active')
    })
})
