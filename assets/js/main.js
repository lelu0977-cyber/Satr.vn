// Nha Khoa Thẩm Mỹ Star - Main Application Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  const openModalBtns = document.querySelectorAll('.btn-open-booking');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const bookingForm = document.getElementById('bookingForm');

  if (bookingModal) {
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const service = btn.getAttribute('data-service') || '';
        const serviceSelect = document.getElementById('bookingService');
        if (serviceSelect && service) {
          serviceSelect.value = service;
        }
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('bookingName')?.value || 'Quý khách';
        const phone = document.getElementById('bookingPhone')?.value || '';
        const date = document.getElementById('bookingDate')?.value || '';
        const service = document.getElementById('bookingService')?.value || 'Khám tổng quát';

        showToast(`Cảm ơn anh/chị ${name}! Nha Khoa Thẩm Mỹ Star đã tiếp nhận lịch hẹn ngày ${date}. Bác sĩ chuyên khoa tại 57 Lê Văn Hưu sẽ liên hệ qua SĐT ${phone} trong 3 phút!`, 'success');
        bookingForm.reset();
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // Quick Consult Forms
  const heroBookingForm = document.getElementById('heroBookingForm');
  if (heroBookingForm) {
    heroBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Đã gửi thông tin! Bác sĩ Nha Khoa Thẩm Mỹ Star sẽ liên hệ tư vấn miễn phí trong 3 phút.', 'success');
      heroBookingForm.reset();
    });
  }

  const quickConsultForm = document.getElementById('quickConsultForm');
  if (quickConsultForm) {
    quickConsultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('quickPhone')?.value || '';
      showToast(`Đã ghi nhận yêu cầu tư vấn số điện thoại ${phone}. Đội ngũ bác sĩ Star Dental sẽ gọi ngay!`, 'success');
      quickConsultForm.reset();
    });
  }

  // Pricing Tabs
  const pricingTabs = document.querySelectorAll('.pricing-tab-btn');
  const pricingTables = document.querySelectorAll('.pricing-category-table');
  if (pricingTabs.length > 0) {
    pricingTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        pricingTabs.forEach(t => t.classList.remove('active'));
        pricingTables.forEach(p => p.style.display = 'none');

        tab.classList.add('active');
        const targetCategory = tab.getAttribute('data-category');
        const targetTable = document.getElementById(`pricing-${targetCategory}`);
        if (targetTable) {
          targetTable.style.display = 'block';
        }
      });
    });
  }

  // Interactive Dental Cost Calculator
  const calcForm = document.getElementById('costCalculatorForm');
  if (calcForm) {
    const serviceType = document.getElementById('calcService');
    const serviceSub = document.getElementById('calcSubtype');
    const countInput = document.getElementById('calcQuantity');
    const resultTotal = document.getElementById('calcTotalResult');
    const resultNote = document.getElementById('calcNoteResult');

    const pricingData = {
      implant: {
        'korea-biotem': { name: 'Trụ Biotem Hàn Quốc chính hãng', price: 13500000 },
        'dentium-usa': { name: 'Trụ Dentium Hoa Kỳ cao cấp', price: 17000000 },
        'neodent-swiss': { name: 'Trụ Neodent Thụy Sĩ (Tải lực tức thì)', price: 22000000 },
        'straumann-swiss': { name: 'Trụ Straumann Thụy Sĩ SLActive thượng hạng', price: 32000000 }
      },
      niengrang: {
        'mac-cai-kim-loai': { name: 'Mắc cài kim loại tự buộc thông minh', price: 28000000 },
        'mac-cai-su': { name: 'Mắc cài sứ thẩm mỹ cao cấp', price: 42000000 },
        'invisalign-us': { name: 'Khay niềng trong suốt Invisalign Hoa Kỳ', price: 75000000 }
      },
      rangsu: {
        'su-titan': { name: 'Răng sứ Titan sinh học', price: 2500000 },
        'su-zirconia': { name: 'Toàn sứ Zirconia Dmax Đức', price: 4000000 },
        'su-cercon-ht': { name: 'Toàn sứ Cercon HT cao cấp', price: 6000000 },
        'veneer-emax': { name: 'Dán sứ Veneer Emax Thụy Sĩ siêu mỏng', price: 8000000 }
      },
      nhorang: {
        'khon-ham-duoi': { name: 'Nhổ răng khôn hàm dưới sóng Piezotome', price: 2000000 },
        'khon-moc-ngam': { name: 'Nhổ răng khôn ngầm / khó Piezotome', price: 3000000 },
        'khon-ham-tren': { name: 'Nhổ răng khôn hàm trên không đau', price: 1200000 }
      }
    };

    function updateSubtypes() {
      const cat = serviceType.value;
      serviceSub.innerHTML = '';
      if (pricingData[cat]) {
        Object.keys(pricingData[cat]).forEach(key => {
          const opt = document.createElement('option');
          opt.value = key;
          opt.textContent = `${pricingData[cat][key].name} (${pricingData[cat][key].price.toLocaleString('vi-VN')} đ)`;
          serviceSub.appendChild(opt);
        });
      }
      calculateEstimate();
    }

    function calculateEstimate() {
      const cat = serviceType.value;
      const sub = serviceSub.value;
      const qty = parseInt(countInput.value, 10) || 1;

      if (pricingData[cat] && pricingData[cat][sub]) {
        const unitPrice = pricingData[cat][sub].price;
        const total = unitPrice * qty;
        resultTotal.textContent = total.toLocaleString('vi-VN') + ' VNĐ';
        resultNote.textContent = `* Đơn giá: ${unitPrice.toLocaleString('vi-VN')} đ x ${qty} đơn vị. Tặng gói chụp CT Conebeam 3D & thăm khám trực tiếp miễn phí tại 57 Lê Văn Hưu.`;
      }
    }

    if (serviceType && serviceSub && countInput) {
      serviceType.addEventListener('change', updateSubtypes);
      serviceSub.addEventListener('change', calculateEstimate);
      countInput.addEventListener('input', calculateEstimate);
      updateSubtypes();
    }
  }

  // Floating Phone Popover
  const phoneButtons = document.querySelectorAll('.float-btn-phone, .btn-trigger-call');
  let callPopover = document.getElementById('callPopover');
  if (!callPopover) {
    callPopover = document.createElement('div');
    callPopover.id = 'callPopover';
    callPopover.className = 'call-popover';
    callPopover.innerHTML = `
      <button class="call-popover-close" id="callPopoverClose" title="Đóng">&times;</button>
      <div class="call-popover-badge">
        <span class="status-dot-active"></span> Bác Sĩ Đang Trực Tuyến
      </div>
      <div class="call-popover-phone">+84 24 6666 6586</div>
      <p class="call-popover-desc">Hotline Nha Khoa Thẩm Mỹ Star - 57 Lê Văn Hưu, Hai Bà Trưng, Hà Nội</p>
      <a href="tel:02466666586" class="call-popover-btn" id="callNowAction">
        <i class="fa-solid fa-phone-volume"></i> GỌI NGAY: 024 6666 6586
      </a>
      <button type="button" class="call-copy-btn" id="callCopyBtn">
        <i class="fa-regular fa-copy"></i> Sao chép số +84 24 6666 6586
      </button>
    `;
    document.body.appendChild(callPopover);

    const closeBtn = document.getElementById('callPopoverClose');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        callPopover.classList.remove('active');
      });
    }

    const copyBtn = document.getElementById('callCopyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText('+84 24 6666 6586').then(() => {
          showToast('Đã sao chép hotline Nha Khoa Thẩm Mỹ Star: +84 24 6666 6586!', 'success');
        }).catch(() => {
          showToast('Hotline: +84 24 6666 6586', 'info');
        });
      });
    }

    document.addEventListener('click', (e) => {
      if (!callPopover.contains(e.target) && !e.target.closest('.float-btn-phone') && !e.target.closest('.btn-trigger-call')) {
        callPopover.classList.remove('active');
      }
    });
  }

  phoneButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      callPopover.classList.toggle('active');
    });
  });

  // Busy Hours Chart Switcher
  const dayPills = document.querySelectorAll('.day-pill');
  const busyDataByDay = {
    't2': [20, 45, 60, 85, 95, 40],
    't3': [15, 40, 55, 80, 90, 35], // Tuesday from prompt: 06h, 09h, 12h, 15h, 18h, 21h
    't4': [25, 50, 65, 85, 92, 45],
    't5': [20, 48, 62, 88, 96, 40],
    't6': [30, 60, 75, 90, 100, 50],
    't7': [45, 80, 95, 100, 90, 60],
    'cn': [50, 85, 90, 95, 85, 50]
  };

  if (dayPills.length > 0) {
    dayPills.forEach(pill => {
      pill.addEventListener('click', () => {
        dayPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const day = pill.getAttribute('data-day');
        const heights = busyDataByDay[day] || [20, 50, 65, 85, 95, 40];
        const bars = document.querySelectorAll('.hour-bar');
        bars.forEach((bar, idx) => {
          if (heights[idx] !== undefined) {
            bar.style.height = heights[idx] + '%';
            if (heights[idx] >= 90) {
              bar.classList.add('peak');
            } else {
              bar.classList.remove('peak');
            }
          }
        });
      });
    });
  }

  // Reviews Filtering
  const reviewFilters = document.querySelectorAll('.review-filter-btn');
  const reviewCards = document.querySelectorAll('.review-item-card');
  if (reviewFilters.length > 0 && reviewCards.length > 0) {
    reviewFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        reviewFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        const star = filter.getAttribute('data-filter');
        reviewCards.forEach(card => {
          if (star === 'all') {
            card.style.display = 'block';
          } else if (star === 'photo') {
            const hasPhoto = card.getAttribute('data-has-photo') === 'true';
            card.style.display = hasPhoto ? 'block' : 'none';
          } else {
            const cardStar = card.getAttribute('data-stars');
            card.style.display = (cardStar === star) ? 'block' : 'none';
          }
        });
      });
    });
  }

  // Toast System
  function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.style.position = 'fixed';
      toastContainer.style.bottom = '85px';
      toastContainer.style.left = '20px';
      toastContainer.style.zIndex = '99999';
      toastContainer.style.display = 'flex';
      toastContainer.style.flexDirection = 'column';
      toastContainer.style.gap = '10px';
      toastContainer.style.maxWidth = '380px';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.style.background = type === 'success' ? '#065f46' : '#08213e';
    toast.style.color = '#ffffff';
    toast.style.padding = '14px 18px';
    toast.style.borderRadius = '14px';
    toast.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
    toast.style.fontSize = '0.9rem';
    toast.style.lineHeight = '1.5';
    toast.style.display = 'flex';
    toast.style.alignItems = 'flex-start';
    toast.style.gap = '12px';
    toast.style.border = type === 'success' ? '1px solid #10b981' : '1px solid #38bdf8';
    toast.style.animation = 'fadeIn 0.3s ease forwards';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: ${type === 'success' ? '#34d399' : '#38bdf8'}; font-size: 18px; margin-top: 2px;"></i> <div>${message}</div>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 5500);
  }

  window.showToast = showToast;
});
