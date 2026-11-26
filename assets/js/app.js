    /* ===================== DATA DEFINITIONS ===================== */
    const VOCAB_CATEGORIES = [
      { id: 'all', label: 'Tất cả' },
      { id: 'land', label: 'Lục quân & Pháo binh' },
      { id: 'air', label: 'Không quân & UAV' },
      { id: 'naval', label: 'Hải quân & Ngầm' },
      { id: 'cyber', label: 'AI, Mạng & Mô phỏng' },
      { id: 'logistics', label: 'Hậu cần, Công binh & CBRN' },
      { id: 'industry', label: 'Công nghiệp QP & B2B' },
      { id: 'protocol', label: 'Đối ngoại & Nghi thức' },
      { id: 'ops', label: 'Vận hành & An ninh' },
      { id: 'org', label: 'Cơ cấu Đơn vị (VN & Quốc tế)' },
      { id: 'ranks_vocab', label: 'Quân hàm Đầy đủ (VN & Quốc tế)' },
      { id: 'mil_titles', label: 'Chức danh & Cơ quan Quân đội' },
      { id: 'party_state', label: 'Đảng, Nhà nước & Chính quyền' },
      { id: 'specs', label: 'Thông số Kỹ – Chiến thuật' },
      { id: 'procurement', label: 'Đấu thầu, Nghiệm thu & B2B' },
      { id: 'strategy', label: 'Ngoại giao Chiến lược' },
      { id: 'infodesk_vocab', label: 'Quầy Thông tin & Hậu cần Sự kiện' },
      { id: 'custom', label: 'Từ của đơn vị' }
    ];

    const BASE_VOCAB_DATA = [
      // Land Systems (9)
      { id: 'v1', cat: 'land', en: 'Self-propelled howitzer', ipa: '/ˌself.prəˈpeld ˈhaʊ.ɪt.sər/', vi: 'Pháo tự hành', exEn: 'The locally developed PTH-01 self-propelled howitzer is displayed in the outdoor area.', exVi: 'Pháo tự hành PTH-01 do trong nước phát triển được trưng bày tại khu ngoài trời.' },
      { id: 'v2', cat: 'land', en: 'Infantry fighting vehicle (IFV)', ipa: '/ˈɪn.fən.tri ˈfaɪ.tɪŋ ˈviː.ə.kəl/', vi: 'Xe chiến đấu bộ binh', exEn: 'This infantry fighting vehicle combines high mobility with an automated turret.', exVi: 'Xe chiến đấu bộ binh này kết hợp tính cơ động cao với tháp pháo tự động.' },
      { id: 'v3', cat: 'land', en: 'Armoured personnel carrier (APC)', ipa: '/ˈɑːr.mərd ˌpɜːr.sənˈel ˈkær.i.ər/', vi: 'Xe thiết giáp chở quân', exEn: 'Our amphibious APC is designed for rapid troop deployment across river terrain.', exVi: 'Xe thiết giáp chở quân lội nước của chúng tôi được thiết kế cho địa hình sông nước.' },
      { id: 'v4', cat: 'land', en: 'Fire control system (FCS)', ipa: '/faɪər kənˈtroʊl ˈsɪs.təm/', vi: 'Hệ thống điều khiển hỏa lực', exEn: 'The digital fire control system significantly improves first-round hit probability.', exVi: 'Hệ thống điều khiển hỏa lực số giúp tăng đáng kể xác suất bắn trúng phát đầu.' },
      { id: 'v5', cat: 'land', en: 'Reactive armor', ipa: '/riˈæk.tɪv ˈɑːr.mər/', vi: 'Giáp phản ứng nổ', exEn: 'Modular reactive armor kits enhance survivability against anti-tank rounds.', exVi: 'Bộ giáp phản ứng nổ mô-đun nâng cao khả năng sống sót trước đạn chống tăng.' },
      { id: 'v6', cat: 'land', en: 'Tactical mobility', ipa: '/ˈtæk.tɪ.kəl moʊˈbɪl.ə.ti/', vi: 'Khả năng cơ động chiến thuật', exEn: 'The upgraded chassis offers superior tactical mobility in mountainous regions.', exVi: 'Khung gầm nâng cấp mang lại khả năng cơ động chiến thuật vượt trội ở vùng núi.' },
      { id: 'v7', cat: 'land', en: 'Ballistic protection', ipa: '/bəˈlɪs.tɪk prəˈtek.ʃən/', vi: 'Bảo vệ chống đạn / Chống mảnh', exEn: 'The armoured cabin meets NATO STANAG Level 3 ballistic protection standards.', exVi: 'Khoang bọc thép đáp ứng tiêu chuẩn bảo vệ chống đạn STANAG cấp độ 3 của NATO.' },
      { id: 'v43', cat: 'land', en: 'Main battle tank (MBT)', ipa: '/meɪn ˈbæt.əl tæŋk/', vi: 'Xe tăng chiến đấu chủ lực', exEn: 'Upgraded main battle tanks feature thermal imaging sights and digital comms.', exVi: 'Xe tăng chiến đấu chủ lực nâng cấp được trang bị kính ngắm ảnh nhiệt và thông tin số.' },
      { id: 'v44', cat: 'land', en: 'Multiple launch rocket system (MLRS)', ipa: '/ˈmʌl.tɪ.pəl lɔːntʃ ˈrɒk.ɪt/', vi: 'Hệ thống pháo phản lực phóng loạt', exEn: 'The wheeled MLRS can shoot and scoot within three minutes of firing.', exVi: 'Hệ thống pháo phản lực bánh lốp có thể bắn và cơ động rời trận địa trong vòng 3 phút.' },

      // Air, Air Defense & UAV (9)
      { id: 'v8', cat: 'air', en: 'Unmanned aerial vehicle (UAV)', ipa: '/ʌnˈmænd ˈer.i.əl ˈviː.ə.kəl/', vi: 'Máy bay không người lái', exEn: 'Vietnam Defence Expo 2026 features multi-role reconnaissance and strike UAVs.', exVi: 'Triển lãm Quốc phòng Việt Nam 2026 trưng bày các mẫu UAV trinh sát và tấn công đa năng.' },
      { id: 'v9', cat: 'air', en: 'Glide bomb', ipa: '/ɡlaɪd bɒm/', vi: 'Bom lượn dẫn đường', exEn: 'New domestic UAVs capable of carrying precision glide bombs attracted wide interest.', exVi: 'Các mẫu UAV nội địa mới mang bom lượn chính xác thu hút sự quan tâm lớn.' },
      { id: 'v10', cat: 'air', en: 'Loitering munition', ipa: '/ˈlɔɪ.tər.ɪŋ mjuːˈnɪʃ.ən/', vi: 'Đạn tuần kích (UAV cảm tử)', exEn: 'Loitering munitions provide real-time target acquisition and precision strike.', exVi: 'Đạn tuần kích cung cấp khả năng trinh sát mục tiêu thời gian thực và đánh trúng chính xác.' },
      { id: 'v11', cat: 'air', en: 'Surface-to-air missile (SAM)', ipa: '/ˈsɜːr.fɪs tuː er ˈmɪs.aɪl/', vi: 'Tên lửa phòng không (đất đối không)', exEn: 'The medium-range SAM battery integrates seamlessly with national radar networks.', exVi: 'Tổ hợp tên lửa phòng không tầm trung tích hợp đồng bộ với mạng lưới radar quốc gia.' },
      { id: 'v12', cat: 'air', en: 'Phased-array radar', ipa: '/feɪzd əˈreɪ ˈreɪ.dɑːr/', vi: 'Radar mảng pha', exEn: 'This 3D phased-array radar can track multiple low-altitude targets simultaneously.', exVi: 'Radar mảng pha 3D này có thể bám bắt đồng thời nhiều mục tiêu bay thấp.' },
      { id: 'v13', cat: 'air', en: 'Electronic warfare (EW)', ipa: '/ɪˌlekˈtrɒn.ɪk ˈwɔːr.fer/', vi: 'Tác chiến điện tử', exEn: 'Our electronic warfare suite provides both jamming and signal intelligence capabilities.', exVi: 'Tổ hợp tác chiến điện tử của chúng tôi cung cấp cả năng lực gây nhiễu và trinh sát tín hiệu.' },
      { id: 'v14', cat: 'air', en: 'Counter-UAS system', ipa: '/ˈkaʊn.tər juː.eɪˈes ˈsɪs.təm/', vi: 'Hệ thống chống UAV', exEn: 'Portable counter-UAS systems are deployed to safeguard critical infrastructure.', exVi: 'Hệ thống chống UAV di động được triển khai để bảo vệ các công trình trọng yếu.' },
      { id: 'v45', cat: 'air', en: 'Multirole fighter aircraft', ipa: '/ˌmʌl.tiˈroʊl ˈfaɪ.tər ˈer.kræft/', vi: 'Tiêm kích đa năng', exEn: 'Multirole fighter aircraft performed an aerial welcome flypast at the opening ceremony.', exVi: 'Các tiêm kích đa năng thực hiện màn bay chào mừng tại lễ khai mạc.' },
      { id: 'v46', cat: 'air', en: 'Beyond-visual-range (BVR) missile', ipa: '/bɪˈjɒnd ˈvɪʒ.u.əl reɪndʒ/', vi: 'Tên lửa ngoài tầm nhìn', exEn: 'Modern air-to-air BVR missiles rely on mid-course datalink updates.', exVi: 'Tên lửa không đối không ngoài tầm nhìn hiện đại dựa vào cập nhật đường truyền dữ liệu giữa hành trình.' },

      // Naval & Maritime (9)
      { id: 'v15', cat: 'naval', en: 'Unmanned underwater vehicle (UUV)', ipa: '/ʌnˈmænd ˌʌn.dərˈwɔː.tər ˈviː.ə.kəl/', vi: 'Phương tiện ngầm không người lái', exEn: 'Autonomous UUVs are showcased for seabed mapping and maritime security missions.', exVi: 'Các phương tiện ngầm không người lái tự hành được giới thiệu cho nhiệm vụ khảo sát đáy biển và an ninh hàng hải.' },
      { id: 'v16', cat: 'naval', en: 'Coastal defense missile', ipa: '/ˈkoʊ.stəl dɪˈfens ˈmɪs.aɪl/', vi: 'Tên lửa phòng thủ bờ biển', exEn: 'Mobile coastal defense missile complexes protect key maritime approaches.', exVi: 'Các tổ hợp tên lửa phòng thủ bờ biển cơ động giúp bảo vệ các hướng tiếp cận trên biển.' },
      { id: 'v17', cat: 'naval', en: 'Patrol corvette', ipa: '/pəˈtroʊl kɔːrˈvet/', vi: 'Tàu hộ vệ tuần tra', exEn: 'The shipyard unveiled scale models of its next-generation patrol corvette.', exVi: 'Nhà máy đóng tàu ra mắt mô hình tỷ lệ của tàu hộ vệ tuần tra thế hệ mới.' },
      { id: 'v18', cat: 'naval', en: 'Anti-ship missile', ipa: '/ˌæn.tiˈʃɪp ˈmɪs.aɪl/', vi: 'Tên lửa chống hạm', exEn: 'The sea-skimming anti-ship missile features an active radar seeker.', exVi: 'Tên lửa chống hạm bay bám mặt biển được trang bị đầu tự dẫn radar chủ động.' },
      { id: 'v19', cat: 'naval', en: 'Sonar array', ipa: '/ˈsoʊ.nɑːr əˈreɪ/', vi: 'Hệ thống định vị thủy âm (Sonar)', exEn: 'A towed sonar array enhances submarine detection in shallow littoral waters.', exVi: 'Hệ thống sonar kéo giúp tăng cường phát hiện tàu ngầm tại vùng biển ven bờ.' },
      { id: 'v20', cat: 'naval', en: 'Maritime domain awareness', ipa: '/ˈmær.ɪ.taɪm doʊˈmeɪn əˈwer.nəs/', vi: 'Nhận thức tình hình trên biển', exEn: 'Satellite and coastal radar integration strengthens maritime domain awareness.', exVi: 'Tích hợp vệ tinh và radar bờ biển giúp củng cố khả năng kiểm soát tình hình trên biển.' },
      { id: 'v21', cat: 'naval', en: 'Search and rescue (SAR)', ipa: '/sɜːrtʃ ænd ˈres.kjuː/', vi: 'Tìm kiếm cứu nạn', exEn: 'Dual-use naval vessels also support humanitarian search and rescue operations.', exVi: 'Các tàu hải quân lưỡng dụng còn hỗ trợ hoạt động tìm kiếm cứu nạn nhân đạo.' },
      { id: 'v47', cat: 'naval', en: 'Anti-submarine warfare (ASW)', ipa: '/ˌæn.ti.sʌb.məˈriːn ˈwɔːr.fer/', vi: 'Tác chiến chống ngầm', exEn: 'The frigate is equipped with onboard helicopters for anti-submarine warfare.', exVi: 'Tàu hộ vệ tên lửa được trang bị trực thăng trên boong cho nhiệm vụ tác chiến chống ngầm.' },
      { id: 'v48', cat: 'naval', en: 'Amphibious landing ship', ipa: '/æmˈfɪb.i.əs ˈlæn.dɪŋ ʃɪp/', vi: 'Tàu đổ bộ', exEn: 'Amphibious landing ships play a dual role in naval transport and disaster relief.', exVi: 'Tàu đổ bộ đóng vai trò kép trong vận tải hải quân và cứu trợ thiên tai.' },

      // Cyber, AI & Simulation (10)
      { id: 'v49', cat: 'cyber', en: 'Cyber resilience', ipa: '/ˈsaɪ.bər rɪˈzɪl.jəns/', vi: 'Khả năng chống chịu không gian mạng', exEn: 'Cyber resilience is essential for safeguarding military command networks.', exVi: 'Khả năng chống chịu không gian mạng là yếu tố thiết yếu bảo vệ mạng chỉ huy quân sự.' },
      { id: 'v50', cat: 'cyber', en: 'Encrypted datalink', ipa: '/ɪnˈkrɪp.tɪd ˈdeɪ.tə.lɪŋk/', vi: 'Đường truyền dữ liệu mã hóa', exEn: 'The UAV communicates with the ground station over a jam-resistant encrypted datalink.', exVi: 'UAV liên lạc với trạm mặt đất qua đường truyền dữ liệu mã hóa chống nhiễu.' },
      { id: 'v51', cat: 'cyber', en: 'Autonomous drone swarm', ipa: '/ɔːˈtɒn.ə.məs droʊn swɔːrm/', vi: 'Bầy đàn UAV tự hành', exEn: 'AI algorithms coordinate an autonomous drone swarm for wide-area reconnaissance.', exVi: 'Thuật toán AI điều phối bầy đàn UAV tự hành phục vụ trinh sát diện rộng.' },
      { id: 'v52', cat: 'cyber', en: 'Combat training simulator', ipa: '/ˈkɒm.bæt ˈtreɪ.nɪŋ ˈsɪm.jə.leɪ.tər/', vi: 'Hệ thống mô phỏng huấn luyện tác chiến', exEn: 'Visitors can test the VR combat training simulator in the interactive zone.', exVi: 'Khách tham quan có thể trải nghiệm hệ thống mô phỏng huấn luyện VR tại khu tương tác.' },
      { id: 'v53', cat: 'cyber', en: 'AI-assisted surveillance', ipa: '/eɪ.aɪ əˈsɪs.tɪd sɜːrˈveɪ.ləns/', vi: 'Giám sát an ninh ứng dụng AI', exEn: 'AI-assisted surveillance and drone monitoring strengthen perimeter security at the expo.', exVi: 'Giám sát ứng dụng AI và flycam giúp tăng cường an ninh vành đai tại triển lãm.' },
      { id: 'v54', cat: 'cyber', en: 'Command and control (C2)', ipa: '/kəˈmænd ænd kənˈtroʊl/', vi: 'Chỉ huy và kiểm soát', exEn: 'An integrated C2 center fuses real-time feeds from radars, UAVs, and field units.', exVi: 'Trung tâm chỉ huy kiểm soát tích hợp tổng hợp dữ liệu thời gian thực từ radar, UAV và đơn vị thực địa.' },
      { id: 'v55', cat: 'cyber', en: 'Electronic countermeasure (ECM)', ipa: '/ɪˌlekˈtrɒn.ɪk ˈkaʊn.tər.meʒ.ər/', vi: 'Biện pháp đối kháng điện tử', exEn: 'Onboard ECM pods disrupt enemy tracking radars during contested flights.', exVi: 'Cụm đối kháng điện tử trên khoang làm gián đoạn radar bám bắt của đối phương.' },
      { id: 'v56', cat: 'cyber', en: 'Satellite reconnaissance', ipa: '/ˈsæt.əl.aɪt rɪˈkɒn.ɪ.səns/', vi: 'Trinh sát vệ tinh', exEn: 'High-resolution satellite reconnaissance supports both border security and flood monitoring.', exVi: 'Trinh sát vệ tinh độ phân giải cao hỗ trợ cả an ninh biên giới và giám sát lũ lụt.' },
      { id: 'v57', cat: 'cyber', en: 'Battlefield management system (BMS)', ipa: '/ˈbæt.əl.fiːld ˈmæn.ɪdʒ.mənt/', vi: 'Hệ thống quản lý chiến trường', exEn: 'The digital BMS shares friendly unit positions across armoured battalions.', exVi: 'Hệ thống quản lý chiến trường số chia sẻ vị trí lực lượng bạn giữa các tiểu đoàn tăng thiết giáp.' },
      { id: 'v58', cat: 'cyber', en: 'Interoperability', ipa: '/ˌɪn.tərˌɒp.ər.əˈbɪl.ə.ti/', vi: 'Khả năng tương tác / đồng bộ hệ thống', exEn: 'Open communication standards ensure interoperability during multinational peacekeeping.', exVi: 'Tiêu chuẩn thông tin mở đảm bảo khả năng tương tác trong hoạt động gìn giữ hòa bình đa quốc gia.' },

      // Logistics, Engineering & CBRN (9)
      { id: 'v59', cat: 'logistics', en: 'Tactical logistics', ipa: '/ˈtæk.tɪ.kəl ləˈdʒɪs.tɪks/', vi: 'Hậu cần chiến thuật', exEn: 'All-terrain cargo trucks ensure resilient tactical logistics in remote areas.', exVi: 'Xe tải địa hình đảm bảo công tác hậu cần chiến thuật thông suốt tại vùng sâu vùng xa.' },
      { id: 'v60', cat: 'logistics', en: 'CBRN defence', ipa: '/siː.biː.ɑːrˈen dɪˈfens/', vi: 'Phòng hóa (Hóa học, Sinh học, Phóng xạ, Hạt nhân)', exEn: 'Specialized decontamination units showcased mobile CBRN defence equipment.', exVi: 'Lực lượng phòng hóa giới thiệu trang bị tiêu tẩy CBRN cơ động.' },
      { id: 'v61', cat: 'logistics', en: 'Mine-clearing system', ipa: '/maɪn ˈklɪər.ɪŋ ˈsɪs.təm/', vi: 'Hệ thống rà phá bom mìn', exEn: 'Remote-controlled mine-clearing systems protect engineering personnel during demining.', exVi: 'Hệ thống rà phá bom mìn điều khiển từ xa bảo vệ lực lượng công binh khi làm nhiệm vụ.' },
      { id: 'v62', cat: 'logistics', en: 'Mobile field hospital', ipa: '/ˈmoʊ.baɪl fiːld ˈhɒs.pɪ.təl/', vi: 'Bệnh viện dã chiến cơ động', exEn: 'Vietnam has deployed Level-2 mobile field hospitals for UN peacekeeping missions.', exVi: 'Việt Nam đã triển khai các bệnh viện dã chiến cấp 2 tham gia gìn giữ hòa bình Liên Hợp Quốc.' },
      { id: 'v63', cat: 'logistics', en: 'Pontoon bridge', ipa: '/pɒnˈtuːn brɪdʒ/', vi: 'Cầu phao quân sự', exEn: 'Combat engineers can assemble a heavy-load pontoon bridge in under 45 minutes.', exVi: 'Bộ đội công binh có thể lắp ghép cầu phao hạng nặng trong chưa đầy 45 phút.' },
      { id: 'v64', cat: 'logistics', en: 'Tactical communications', ipa: '/ˈtæk.tɪ.kəl kəˌmjuː.nɪˈkeɪ.ʃənz/', vi: 'Thông tin liên lạc chiến thuật', exEn: 'Software-defined radios deliver secure tactical communications over rugged terrain.', exVi: 'Máy vô tuyến định nghĩa bằng phần mềm mang lại liên lạc chiến thuật an toàn trên địa hình hiểm trở.' },
      { id: 'v65', cat: 'logistics', en: 'Night-vision goggle (NVG)', ipa: '/naɪt ˈvɪʒ.ən ˈɡɒɡ.əl/', vi: 'Kính nhìn đêm', exEn: 'Lightweight binocular NVGs enhance situational awareness during night operations.', exVi: 'Kính nhìn đêm hai mắt trọng lượng nhẹ tăng cường khả năng quan sát trong tác chiến ban đêm.' },
      { id: 'v66', cat: 'logistics', en: 'Ballistic vest / Body armor', ipa: '/bəˈlɪs.tɪk vest/', vi: 'Áo giáp chống đạn', exEn: 'Ceramic-plate ballistic vests reduce soldier fatigue without compromising protection.', exVi: 'Áo giáp chống đạn tấm gốm giúp giảm mệt mỏi cho chiến sĩ mà vẫn đảm bảo mức bảo vệ.' },
      { id: 'v67', cat: 'logistics', en: 'Humanitarian assistance & disaster relief (HADR)', ipa: '/hjuːˌmæn.ɪˈter.i.ən əˈsɪs.təns/', vi: 'Hỗ trợ nhân đạo & Cứu trợ thiên tai', exEn: 'Regional armed forces frequently cooperate on HADR training and logistics.', exVi: 'Quân đội các nước trong khu vực thường xuyên hợp tác huấn luyện và hậu cần cứu trợ thiên tai.' },

      // Defence Industry & B2B (9)
      { id: 'v22', cat: 'industry', en: 'Technology transfer', ipa: '/tekˈnɒl.ə.dʒi ˈtræns.fɜːr/', vi: 'Chuyển giao công nghệ', exEn: 'We welcome partnerships involving co-production and technology transfer.', exVi: 'Chúng tôi hoan nghênh các quan hệ đối tác gắn với hợp tác sản xuất và chuyển giao công nghệ.' },
      { id: 'v23', cat: 'industry', en: 'Dual-use technology', ipa: '/ˈduː.əl juːs tekˈnɒl.ə.dʒi/', vi: 'Công nghệ lưỡng dụng (quân sự & dân sự)', exEn: 'The pavilion highlights dual-use technologies for disaster response and telecommunications.', exVi: 'Gian hàng nhấn mạnh các công nghệ lưỡng dụng phục vụ ứng phó thiên tai và viễn thông.' },
      { id: 'v24', cat: 'industry', en: 'Indigenous production', ipa: '/ɪnˈdɪdʒ.ə.nəs prəˈdʌk.ʃən/', vi: 'Sản xuất tự chủ trong nước', exEn: 'Indigenous production reflects Vietnam’s growing self-reliance in defence industry.', exVi: 'Năng lực sản xuất trong nước thể hiện tính tự chủ ngày càng cao của công nghiệp quốc phòng Việt Nam.' },
      { id: 'v25', cat: 'industry', en: 'Joint venture', ipa: '/dʒɔɪnt ˈven.tʃər/', vi: 'Liên doanh', exEn: 'Both companies are exploring a joint venture for optical component manufacturing.', exVi: 'Hai doanh nghiệp đang tìm hiểu khả năng thành lập liên doanh sản xuất linh kiện quang học.' },
      { id: 'v26', cat: 'industry', en: 'Defence procurement', ipa: '/dɪˈfens prəˈkjʊər.mənt/', vi: 'Mua sắm quốc phòng', exEn: 'Transparency and lifecycle value are key criteria in modern defence procurement.', exVi: 'Tính minh bạch và giá trị vòng đời là tiêu chí then chốt trong mua sắm quốc phòng hiện đại.' },
      { id: 'v27', cat: 'industry', en: 'Lifecycle maintenance (MRO)', ipa: '/ˈlaɪf.saɪ.kəl ˈmeɪn.tən.əns/', vi: 'Bảo trì, sửa chữa theo vòng đời', exEn: 'Our package includes operator training and 15-year lifecycle maintenance.', exVi: 'Gói giải pháp của chúng tôi bao gồm huấn luyện vận hành và bảo trì vòng đời 15 năm.' },
      { id: 'v28', cat: 'industry', en: 'Offset agreement', ipa: '/ˈɒf.set əˈɡriː.mənt/', vi: 'Thỏa thuận bù trừ thương mại', exEn: 'The contract includes an offset agreement supporting local supply chains.', exVi: 'Hợp đồng bao gồm thỏa thuận bù trừ nhằm hỗ trợ chuỗi cung ứng nội địa.' },
      { id: 'v68', cat: 'industry', en: 'End-user certificate (EUC)', ipa: '/end ˈjuː.zər sɜːrˈtɪf.ɪ.kət/', vi: 'Giấy chứng nhận người sử dụng cuối cùng', exEn: 'International defence exports strictly require a verified end-user certificate.', exVi: 'Hoạt động xuất khẩu quốc phòng quốc tế bắt buộc phải có giấy chứng nhận người dùng cuối hợp lệ.' },
      { id: 'v69', cat: 'industry', en: 'Export control compliance', ipa: '/ˈek.spɔːrt kənˈtroʊl kəmˈplaɪ.əns/', vi: 'Tuân thủ kiểm soát xuất khẩu', exEn: 'Our legal team handles all export control compliance for dual-use components.', exVi: 'Bộ phận pháp chế của chúng tôi phụ trách toàn bộ thủ tục kiểm soát xuất khẩu linh kiện lưỡng dụng.' },

      // Defence Diplomacy & Protocol (9)
      { id: 'v29', cat: 'protocol', en: 'Defence attaché', ipa: '/dɪˈfens əˈtæʃ.eɪ/', vi: 'Tùy viên quốc phòng', exEn: 'Please escort the Defence Attaché to the VIP lounge on the second floor.', exVi: 'Vui lòng hộ tống Ngài Tùy viên Quốc phòng lên phòng chờ VIP ở tầng hai.' },
      { id: 'v30', cat: 'protocol', en: 'Bilateral meeting', ipa: '/baɪˈlæt.ər.əl ˈmiː.tɪŋ/', vi: 'Cuộc gặp song phương', exEn: 'The bilateral meeting between the two delegations is scheduled for 10:30 AM.', exVi: 'Cuộc gặp song phương giữa hai đoàn đại biểu được lên lịch lúc 10:30 sáng.' },
      { id: 'v31', cat: 'protocol', en: 'Memorandum of Understanding (MoU)', ipa: '/ˌmem.əˈræn.dəm əv ˌʌn.dərˈstæn.dɪŋ/', vi: 'Bản ghi nhớ hợp tác', exEn: 'Both sides signed an MoU on maritime security and technical cooperation.', exVi: 'Hai bên đã ký Bản ghi nhớ về an ninh hàng hải và hợp tác kỹ thuật.' },
      { id: 'v32', cat: 'protocol', en: 'Liaison officer', ipa: '/liˈeɪ.zɒn ˈɒf.ɪ.sər/', vi: 'Sĩ quan liên lạc', exEn: 'Each foreign delegation is assigned a dedicated English-speaking liaison officer.', exVi: 'Mỗi đoàn đại biểu nước ngoài được bố trí một sĩ quan liên lạc nói tiếng Anh riêng.' },
      { id: 'v33', cat: 'protocol', en: 'Courtesy call', ipa: '/ˈkɜːr.tə.si kɔːl/', vi: 'Chào xã giao', exEn: 'The visiting Chief of General Staff paid a courtesy call on the Minister.', exVi: 'Tổng Tham mưu trưởng nước bạn đã đến chào xã giao Bộ trưởng.' },
      { id: 'v34', cat: 'protocol', en: 'Head of Delegation', ipa: '/hed əv ˌdel.ɪˈɡeɪ.ʃən/', vi: 'Trưởng đoàn đại biểu', exEn: 'May I introduce our Head of Delegation to the exhibition organizing committee?', exVi: 'Xin phép giới thiệu Trưởng đoàn đại biểu của chúng tôi với Ban Tổ chức triển lãm.' },
      { id: 'v35', cat: 'protocol', en: 'Guard of Honor', ipa: '/ɡɑːrd əv ˈɒn.ər/', vi: 'Đội Danh dự / Tiêu binh danh dự', exEn: 'The Guard of Honor stood in formation during the opening ceremony.', exVi: 'Đội Danh dự đứng nghiêm trang trong suốt lễ khai mạc.' },
      { id: 'v70', cat: 'protocol', en: 'Joint military exercise', ipa: '/dʒɔɪnt ˈmɪl.ɪ.ter.i ˈek.sər.saɪz/', vi: 'Diễn tập quân sự chung', exEn: 'Both navies discussed plans for a joint military exercise on maritime search and rescue.', exVi: 'Hải quân hai nước đã thảo luận kế hoạch diễn tập chung về tìm kiếm cứu nạn trên biển.' },
      { id: 'v71', cat: 'protocol', en: 'Defence policy of self-defence', ipa: '/dɪˈfens ˈpɒl.ə.si əv self dɪˈfens/', vi: 'Chính sách quốc phòng mang tính tự vệ', exEn: 'Vietnam consistently upholds a peaceful and self-defence national defence policy.', exVi: 'Việt Nam nhất quán duy trì chính sách quốc phòng hòa bình và tự vệ.' },

      // Expo Operations & Security (8)
      { id: 'v36', cat: 'ops', en: 'Static display', ipa: '/ˈstæt.ɪk dɪˈspleɪ/', vi: 'Khu trưng bày tĩnh', exEn: 'Heavy armoured vehicles and aircraft are located at the outdoor static display.', exVi: 'Xe thiết giáp hạng nặng và máy bay được bố trí tại khu trưng bày tĩnh ngoài trời.' },
      { id: 'v37', cat: 'ops', en: 'Live demonstration', ipa: '/laɪv ˌdem.ənˈstreɪ.ʃən/', vi: 'Trình diễn thực tế / Thao diễn', exEn: 'The special forces live demonstration will begin right after the opening speech.', exVi: 'Màn trình diễn thực tế của lực lượng đặc công sẽ bắt đầu ngay sau bài phát biểu khai mạc.' },
      { id: 'v38', cat: 'ops', en: 'Accreditation badge', ipa: '/əˌkred.ɪˈteɪ.ʃən bædʒ/', vi: 'Thẻ ra vào / Thẻ đại biểu', exEn: 'Kindly keep your accreditation badge visible at all security checkpoints.', exVi: 'Vui lòng đeo thẻ đại biểu ở nơi dễ thấy tại mọi chốt kiểm soát an ninh.' },
      { id: 'v39', cat: 'ops', en: 'Restricted zone', ipa: '/rɪˈstrɪk.tɪd zoʊn/', vi: 'Khu vực hạn chế', exEn: 'Photography is strictly prohibited inside this restricted zone.', exVi: 'Nghiêm cấm chụp ảnh bên trong khu vực hạn chế này.' },
      { id: 'v40', cat: 'ops', en: 'Security screening', ipa: '/sɪˈkjʊər.ə.ti ˈskriː.nɪŋ/', vi: 'Kiểm tra soi chiếu an ninh', exEn: 'All trade visitors must pass through security screening at Gate A.', exVi: 'Tất cả khách thương mại phải đi qua cổng kiểm tra an ninh tại Cổng A.' },
      { id: 'v41', cat: 'ops', en: 'Technical briefing', ipa: '/ˈtek.nɪ.kəl ˈbriː.fɪŋ/', vi: 'Báo cáo / Thuyết minh kỹ thuật', exEn: 'Our chief engineer will host a 15-minute technical briefing at Booth B12.', exVi: 'Kỹ sư trưởng của chúng tôi sẽ chủ trì buổi thuyết minh kỹ thuật 15 phút tại Gian B12.' },
      { id: 'v42', cat: 'ops', en: 'Shuttle service', ipa: '/ˈʃʌt.əl ˈsɜːr.vɪs/', vi: 'Xe buýt trung chuyển', exEn: 'A complimentary shuttle service connects the main parking area to the exhibition halls.', exVi: 'Xe buýt trung chuyển miễn phí kết nối bãi đỗ xe chính với các nhà trưng bày.' },
      { id: 'v72', cat: 'ops', en: 'Media briefing / Press kit', ipa: '/ˈmiː.di.ə ˈbriː.fɪŋ/', vi: 'Họp báo / Bộ tài liệu báo chí', exEn: 'Accredited journalists can collect the official press kit at the Media Centre.', exVi: 'Phóng viên có thẻ tác nghiệp có thể nhận bộ tài liệu báo chí chính thức tại Trung tâm Báo chí.' },

      // Unit Structure: Vietnam & Foreign/NATO (20)
      { id: 'v73', cat: 'org', en: 'Central Military Commission (CMC)', ipa: '/ˈsen.trəl ˈmɪl.ɪ.ter.i kəˈmɪʃ.ən/', vi: 'Quân ủy Trung ương', exEn: 'The Central Military Commission directs national defence strategy and modernization.', exVi: 'Quân ủy Trung ương chỉ đạo chiến lược quốc phòng và hiện đại hóa quân đội.' },
      { id: 'v74', cat: 'org', en: 'Ministry of National Defence (MND)', ipa: '/ˈmɪn.ɪ.stri əv ˈnæʃ.ən.əl dɪˈfens/', vi: 'Bộ Quốc phòng', exEn: 'The Ministry of National Defence of Vietnam hosts the 2026 International Defence Expo.', exVi: 'Bộ Quốc phòng Việt Nam là đơn vị chủ trì Triển lãm Quốc phòng quốc tế 2026.' },
      { id: 'v75', cat: 'org', en: 'General Staff', ipa: '/ˈdʒen.ər.əl stæf/', vi: 'Bộ Tổng Tham mưu', exEn: 'Officers from the General Staff oversee joint operational planning and readiness.', exVi: 'Sĩ quan Bộ Tổng Tham mưu phụ trách hoạch định tác chiến chung và sẵn sàng chiến đấu.' },
      { id: 'v76', cat: 'org', en: 'General Political Department (GPD)', ipa: '/ˈdʒen.ər.əl pəˈlɪt.ɪ.kəl dɪˈpɑːrt.mənt/', vi: 'Tổng cục Chính trị', exEn: 'The General Political Department coordinates cultural and propaganda spaces at the expo.', exVi: 'Tổng cục Chính trị điều phối không gian văn hóa và tuyên truyền tại triển lãm.' },
      { id: 'v77', cat: 'org', en: 'General Department of Defence Industry (GDDI)', ipa: '/ˈdʒen.ər.əl dɪˈpɑːrt.mənt əv dɪˈfens ˈɪn.də.stri/', vi: 'Tổng cục Công nghiệp Quốc phòng', exEn: 'Factories under the GDDI unveiled new domestic artillery and unmanned platforms.', exVi: 'Các nhà máy thuộc Tổng cục Công nghiệp Quốc phòng ra mắt pháo tự hành và khí tài không người lái nội địa mới.' },
      { id: 'v78', cat: 'org', en: 'General Department of Logistics and Engineering', ipa: '/ləˈdʒɪs.tɪks ænd ˌen.dʒɪˈnɪər.ɪŋ/', vi: 'Tổng cục Hậu cần – Kỹ thuật', exEn: 'The General Department of Logistics and Engineering manages technical assurance and supply.', exVi: 'Tổng cục Hậu cần – Kỹ thuật quản lý bảo đảm kỹ thuật và cung ứng vật tư.' },
      { id: 'v79', cat: 'org', en: 'Military Region (MR)', ipa: '/ˈmɪl.ɪ.ter.i ˈriː.dʒən/', vi: 'Quân khu', exEn: 'Each Military Region is responsible for territorial defence across several provinces.', exVi: 'Mỗi Quân khu chịu trách nhiệm phòng thủ khu vực trên địa bàn nhiều tỉnh, thành.' },
      { id: 'v80', cat: 'org', en: 'Army Corps', ipa: '/ˈɑːr.mi kɔːr/', vi: 'Quân đoàn (lực lượng chủ lực cơ động)', exEn: 'The main-force Army Corps comprises multiple infantry, armored, and artillery divisions.', exVi: 'Quân đoàn chủ lực gồm nhiều sư đoàn bộ binh, tăng thiết giáp và pháo binh.' },
      { id: 'v81', cat: 'org', en: 'Armed Service (Army / Navy / Air Force)', ipa: '/ɑːrmd ˈsɜːr.vɪs/', vi: 'Quân chủng (Lục quân / Hải quân / PK-KQ)', exEn: 'All armed services of the Vietnam People’s Army participate in the static and live displays.', exVi: 'Các quân chủng của QĐND Việt Nam đều tham gia khu trưng bày tĩnh và trình diễn thực tế.' },
      { id: 'v82', cat: 'org', en: 'Combat Arm / Branch', ipa: '/ˈkɒm.bæt ɑːrm/', vi: 'Binh chủng (Đặc công, Pháo binh, Công binh...)', exEn: 'The Special Forces branch will perform a live demonstration on opening day.', exVi: 'Binh chủng Đặc công sẽ thực hiện màn thao diễn thực tế vào ngày khai mạc.' },
      { id: 'v83', cat: 'org', en: 'Division', ipa: '/dɪˈvɪʒ.ən/', vi: 'Sư đoàn (10.000–15.000 quân)', exEn: 'An infantry division operates independently with organic artillery and logistics support.', exVi: 'Một sư đoàn bộ binh có thể tác chiến độc lập với pháo binh và hậu cần biên chế kèm theo.' },
      { id: 'v84', cat: 'org', en: 'Brigade', ipa: '/brɪˈɡeɪd/', vi: 'Lữ đoàn (3.000–5.000 quân)', exEn: 'Naval Brigade 679 prepared its coastal missile launchers for the exhibition.', exVi: 'Lữ đoàn 679 Hải quân đã chuẩn bị các tổ hợp tên lửa bờ cho triển lãm.' },
      { id: 'v85', cat: 'org', en: 'Regiment', ipa: '/ˈredʒ.ɪ.mənt/', vi: 'Trung đoàn (1.500–3.000 quân)', exEn: 'The air defence regiment operates medium-range SAM batteries and radar stations.', exVi: 'Trung đoàn phòng không vận hành các tiểu đoàn tên lửa tầm trung và trạm radar.' },
      { id: 'v86', cat: 'org', en: 'Battalion', ipa: '/bəˈtæl.jən/', vi: 'Tiểu đoàn (300–1.000 quân)', exEn: 'A mechanized infantry battalion is typically commanded by a Lieutenant Colonel or Major.', exVi: 'Một tiểu đoàn bộ binh cơ giới thường do Trung tá hoặc Thiếu tá chỉ huy.' },
      { id: 'v87', cat: 'org', en: 'Company / Battery / Squadron', ipa: '/ˈkʌm.pə.ni / ˈbæt.ər.i / ˈskwɒd.rən/', vi: 'Đại đội (Bộ binh) / Khẩu đội (Pháo) / Phi đội', exEn: 'In artillery units, a company-sized formation is called a battery, while in air forces it is a squadron.', exVi: 'Trong pháo binh, cấp tương đương đại đội gọi là battery; trong không quân gọi là squadron.' },
      { id: 'v88', cat: 'org', en: 'Platoon', ipa: '/pləˈtuːn/', vi: 'Trung đội (25–40 quân)', exEn: 'A platoon is usually led by a First or Second Lieutenant assisted by a senior NCO.', exVi: 'Một trung đội thường do Trung úy hoặc Thiếu úy chỉ huy cùng một hạ sĩ quan giàu kinh nghiệm.' },
      { id: 'v89', cat: 'org', en: 'Squad / Section', ipa: '/skwɒd / ˈsek.ʃən/', vi: 'Tiểu đội (8–12 quân)', exEn: 'The squad is the smallest tactical infantry unit, led by a Sergeant or Corporal.', exVi: 'Tiểu đội là đơn vị chiến thuật bộ binh nhỏ nhất, do Trung sĩ hoặc Hạ sĩ chỉ huy.' },
      { id: 'v90', cat: 'org', en: 'Naval Fleet / Task Force', ipa: '/ˈneɪ.vəl fliːt / tɑːsk fɔːrs/', vi: 'Hạm đội / Biên đội đặc nhiệm hải quân', exEn: 'Foreign naval delegations often represent regional fleets or maritime task forces.', exVi: 'Các đoàn hải quân nước ngoài thường đại diện cho các hạm đội khu vực hoặc biên đội đặc nhiệm.' },
      { id: 'v91', cat: 'org', en: 'Air Wing', ipa: '/er wɪŋ/', vi: 'Không đoàn / Sư đoàn Không quân (nước ngoài)', exEn: 'In Western air forces, an Air Wing consists of multiple flying and maintenance squadrons.', exVi: 'Trong không quân phương Tây, một Không đoàn gồm nhiều phi đội bay và phi đội kỹ thuật.' },
      { id: 'v92', cat: 'org', en: 'Joint Command / Combatant Command', ipa: '/dʒɔɪnt kəˈmænd/', vi: 'Bộ Tư lệnh Liên quân / Bộ Tư lệnh Tác chiến', exEn: 'A Joint Command integrates land, maritime, air, and cyber forces under one headquarters.', exVi: 'Bộ Tư lệnh Liên quân phối hợp lực lượng lục quân, hải quân, không quân và tác chiến mạng dưới một sở chỉ huy.' },

      // Ranks & Command Titles (10)
      { id: 'v93', cat: 'mil_titles', en: 'Chief of the General Staff (CGS)', ipa: '/tʃiːf əv ðə ˈdʒen.ər.əl stæf/', vi: 'Tổng Tham mưu trưởng', exEn: 'The Chief of the General Staff welcomed visiting military chiefs at the opening ceremony.', exVi: 'Tổng Tham mưu trưởng đã đón tiếp các trưởng đoàn quân sự nước bạn tại lễ khai mạc.' },
      { id: 'v94', cat: 'mil_titles', en: 'Political Commissar', ipa: '/pəˈlɪt.ɪ.kəl ˈkɒm.ɪ.sɑːr/', vi: 'Chính ủy / Chính trị viên', exEn: 'The Brigade Political Commissar oversees morale, political education, and unit cohesion.', exVi: 'Chính ủy Lữ đoàn phụ trách công tác tư tưởng, giáo dục chính trị và đoàn kết nội bộ.' },
      { id: 'v95', cat: 'mil_titles', en: 'Commanding Officer (CO)', ipa: '/kəˈmæn.dɪŋ ˈɒf.ɪ.sər/', vi: 'Sĩ quan Chỉ huy trưởng đơn vị', exEn: 'May I introduce the Commanding Officer of our Naval Engineering Battalion?', exVi: 'Xin phép giới thiệu Chỉ huy trưởng Tiểu đoàn Công binh Hải quân của chúng tôi.' },
      { id: 'v96', cat: 'mil_titles', en: 'Chief of Staff (COS)', ipa: '/tʃiːf əv stæf/', vi: 'Tham mưu trưởng (cấp Quân khu/Quân chủng/Sư đoàn)', exEn: 'The Chief of Staff coordinated the exhibition schedule with foreign military attachés.', exVi: 'Tham mưu trưởng đã điều phối lịch trình triển lãm cùng các tùy viên quân sự nước ngoài.' },
      { id: 'v97', cat: 'ranks_vocab', en: 'General Officer / Flag Officer', ipa: '/ˈdʒen.ər.əl / flæɡ ˈɒf.ɪ.sər/', vi: 'Sĩ quan cấp Tướng / Cấp Đô đốc (Hải quân)', exEn: 'All visiting General Officers and Flag Officers are seated in VIP Section A.', exVi: 'Toàn bộ sĩ quan cấp Tướng và cấp Đô đốc khách mời được bố trí ngồi tại Khu VIP A.' },
      { id: 'v98', cat: 'ranks_vocab', en: 'Field-grade Officer', ipa: '/fiːld ɡreɪd ˈɒf.ɪ.sər/', vi: 'Sĩ quan cấp Tá (Thiếu tá đến Đại tá)', exEn: 'Field-grade officers typically lead battalions, regiments, brigades, and staff departments.', exVi: 'Sĩ quan cấp Tá thường chỉ huy tiểu đoàn, trung đoàn, lữ đoàn và các phòng ban tham mưu.' },
      { id: 'v99', cat: 'ranks_vocab', en: 'Company-grade Officer', ipa: '/ˈkʌm.pə.ni ɡreɪd ˈɒf.ɪ.sər/', vi: 'Sĩ quan cấp Úy (Thiếu úy đến Đại úy)', exEn: 'Many company-grade officers serve as liaison officers and technical booth presenters.', exVi: 'Nhiều sĩ quan cấp Úy đảm nhiệm vai trò sĩ quan liên lạc và thuyết minh kỹ thuật tại gian hàng.' },
      { id: 'v100', cat: 'ranks_vocab', en: 'Non-commissioned Officer (NCO)', ipa: '/nɒn kəˈmɪʃ.ənd ˈɒf.ɪ.sər/', vi: 'Hạ sĩ quan (Hạ sĩ, Trung sĩ, Thượng sĩ)', exEn: 'Experienced NCOs form the backbone of daily unit training and equipment maintenance.', exVi: 'Đội ngũ hạ sĩ quan giàu kinh nghiệm là nòng cốt trong huấn luyện và bảo quản khí tài hằng ngày.' },
      { id: 'v101', cat: 'ranks_vocab', en: 'Warrant Officer (WO)', ipa: '/ˈwɒr.ənt ˈɒf.ɪ.sər/', vi: 'Quân nhân chuyên nghiệp / Chuẩn úy kỹ thuật', exEn: 'Technical Warrant Officers specialize in maintaining avionics, radars, and missile launchers.', exVi: 'Quân nhân chuyên nghiệp kỹ thuật chuyên sâu về bảo dưỡng điện tử hàng không, radar và bệ phóng tên lửa.' },
      { id: 'v102', cat: 'ranks_vocab', en: 'Enlisted Personnel / Servicemen', ipa: '/ɪnˈlɪs.tɪd ˌpɜːr.sənˈel/', vi: 'Chiến sĩ / Binh sĩ tại ngũ', exEn: 'Both officers and enlisted personnel worked tirelessly to prepare the outdoor display.', exVi: 'Cả sĩ quan và chiến sĩ đều nỗ lực hết mình chuẩn bị cho khu trưng bày ngoài trời.' },

      // Technical Specs & Performance Metrics (12)
      { id: 'v103', cat: 'specs', en: 'Caliber', ipa: '/ˈkæl.ɪ.bər/', vi: 'Cỡ nòng súng / pháo', exEn: 'The howitzer can be configured for either 152mm or NATO-standard 155mm caliber.', exVi: 'Khẩu pháo có thể cấu hình cho cỡ nòng 152mm hoặc chuẩn 155mm của NATO.' },
      { id: 'v104', cat: 'specs', en: 'Rate of fire (ROF)', ipa: '/reɪt əv faɪər/', vi: 'Tốc độ bắn (phát/phút)', exEn: 'Its autoloader enables a sustained rate of fire of six rounds per minute.', exVi: 'Hệ thống nạp đạn tự động cho phép tốc độ bắn duy trì 6 phát/phút.' },
      { id: 'v105', cat: 'specs', en: 'Muzzle velocity', ipa: '/ˈmʌz.əl vəˈlɒs.ə.ti/', vi: 'Sơ tốc đầu nòng', exEn: 'Higher muzzle velocity extends effective range and improves armor penetration.', exVi: 'Sơ tốc đầu nòng cao hơn giúp tăng tầm bắn hiệu quả và khả năng xuyên giáp.' },
      { id: 'v106', cat: 'specs', en: 'Effective / Maximum range', ipa: '/ɪˈfek.tɪv / ˈmæk.sɪ.məm reɪndʒ/', vi: 'Tầm bắn hiệu quả / Tầm bắn tối đa', exEn: 'With rocket-assisted projectiles, maximum range reaches over 40 kilometers.', exVi: 'Với đạn tăng tầm, tầm bắn tối đa đạt trên 40 km.' },
      { id: 'v107', cat: 'specs', en: 'Circular Error Probable (CEP)', ipa: '/ˈsɜːr.kjə.lər ˈer.ər ˈprɒb.ə.bəl/', vi: 'Bán kính lệch vòng tròn (độ chính xác đạn/tên lửa)', exEn: 'Laser guidance reduces the glide bomb’s CEP to under five meters.', exVi: 'Dẫn đường laser giúp giảm bán kính lệch vòng tròn (CEP) của bom lượn xuống dưới 5 mét.' },
      { id: 'v108', cat: 'specs', en: 'Payload capacity', ipa: '/ˈpeɪ.loʊd kəˈpæs.ə.ti/', vi: 'Tải trọng mang (khí tài / cảm biến)', exEn: 'This medium-altitude UAV offers a 150-kilogram payload capacity for EO/IR and SAR pods.', exVi: 'Mẫu UAV tầm trung này có tải trọng mang 150 kg cho cụm cảm biến quang điện tử và radar.' },
      { id: 'v109', cat: 'specs', en: 'Service ceiling', ipa: '/ˈsɜːr.vɪs ˈsiː.lɪŋ/', vi: 'Trần bay thực tế', exEn: 'The reconnaissance UAV operates at a service ceiling of 6,000 meters (nearly 20,000 feet).', exVi: 'UAV trinh sát hoạt động ở trần bay 6.000 mét (gần 20.000 feet).' },
      { id: 'v110', cat: 'specs', en: 'Endurance', ipa: '/ɪnˈdjʊər.əns/', vi: 'Thời gian hoạt động / bay liên tục', exEn: 'Extended fuel tanks give the maritime patrol UAV an endurance of 18 hours.', exVi: 'Bình nhiên liệu mở rộng mang lại cho UAV tuần tra biển thời gian bay liên tục 18 giờ.' },
      { id: 'v111', cat: 'specs', en: 'Displacement', ipa: '/dɪˈspleɪs.mənt/', vi: 'Lượng giãn nước (tàu chiến)', exEn: 'The new patrol corvette has a full-load displacement of approximately 2,000 metric tons.', exVi: 'Tàu hộ vệ tuần tra mới có lượng giãn nước đầy tải khoảng 2.000 tấn.' },
      { id: 'v112', cat: 'specs', en: 'Mean Time Between Failures (MTBF)', ipa: '/miːn taɪm bɪˈtwiːn ˈfeɪl.jərz/', vi: 'Thời gian trung bình giữa hai lần hỏng hóc', exEn: 'Solid-state radar modules significantly increase MTBF in humid tropical climates.', exVi: 'Mô-đun radar bán dẫn giúp tăng đáng kể chỉ số MTBF trong khí hậu nhiệt đới ẩm.' },
      { id: 'v113', cat: 'specs', en: 'Radar cross-section (RCS)', ipa: '/ˈreɪ.dɑːr krɒs ˈsek.ʃən/', vi: 'Diện tích phản xạ radar (tính tàng hình)', exEn: 'Composite airframe shaping minimizes the drone’s radar cross-section.', exVi: 'Thiết kế khung thân composite giúp giảm thiểu diện tích phản xạ radar của UAV.' },
      { id: 'v114', cat: 'specs', en: 'Combat radius', ipa: '/ˈkɒm.bæt ˈreɪ.di.əs/', vi: 'Bán kính tác chiến', exEn: 'Combat radius measures how far an aircraft can fly on a mission and return safely.', exVi: 'Bán kính tác chiến đo khoảng cách xa nhất máy bay có thể thực hiện nhiệm vụ rồi quay về an toàn.' },

      // Procurement, Testing & B2B Contracting (10)
      { id: 'v115', cat: 'procurement', en: 'Request for Information / Proposal (RFI / RFP)', ipa: '/rɪˈkwest fɔːr prəˈpoʊ.zəl/', vi: 'Yêu cầu cung cấp thông tin / Hồ sơ mời thầu', exEn: 'Following today’s briefing, our procurement office will issue a formal RFI next month.', exVi: 'Sau buổi thuyết minh hôm nay, phòng mua sắm của chúng tôi sẽ gửi thư yêu cầu thông tin (RFI) vào tháng tới.' },
      { id: 'v116', cat: 'procurement', en: 'Live-fire trial / Field evaluation', ipa: '/laɪv faɪər ˈtraɪ.əl/', vi: 'Thử nghiệm bắn đạn thật / Đánh giá thực địa', exEn: 'The artillery system successfully completed all live-fire trials under extreme weather.', exVi: 'Hệ thống pháo binh đã hoàn thành xuất sắc toàn bộ bài thử nghiệm bắn đạn thật trong thời tiết khắc nghiệt.' },
      { id: 'v117', cat: 'procurement', en: 'Factory Acceptance Test (FAT)', ipa: '/ˈfæk.tər.i əkˈsep.təns test/', vi: 'Nghiệm thu tại nhà máy sản xuất', exEn: 'Customer engineers will witness the Factory Acceptance Test prior to shipment.', exVi: 'Kỹ sư phía khách hàng sẽ chứng kiến quá trình nghiệm thu tại nhà máy (FAT) trước khi xuất xưởng.' },
      { id: 'v118', cat: 'procurement', en: 'Site Acceptance Test (SAT)', ipa: '/saɪt əkˈsep.təns test/', vi: 'Nghiệm thu tại hiện trường / đơn vị sử dụng', exEn: 'Final payment is tied to passing the Site Acceptance Test after installation.', exVi: 'Đợt thanh toán cuối gắn với việc hoàn tất nghiệm thu tại hiện trường (SAT) sau khi lắp đặt.' },
      { id: 'v119', cat: 'procurement', en: 'Integrated Logistics Support (ILS)', ipa: '/ˈɪn.tɪ.ɡreɪ.tɪd ləˈdʒɪs.tɪks/', vi: 'Bảo đảm hậu cần kỹ thuật tích hợp', exEn: 'Our ILS package covers technical manuals, test benches, and depot-level training.', exVi: 'Gói bảo đảm hậu cần tích hợp (ILS) bao gồm tài liệu kỹ thuật, bàn kiểm thử và đào tạo cấp xưởng.' },
      { id: 'v120', cat: 'procurement', en: 'Combat-proven', ipa: '/ˈkɒm.bæt ˈpruː.vən/', vi: 'Đã qua kiểm chứng thực chiến', exEn: 'Buyers often ask whether the electronic countermeasure suite is field-tested or combat-proven.', exVi: 'Khách hàng thường hỏi liệu tổ hợp đối kháng điện tử đã qua thử nghiệm thực địa hay kiểm chứng thực chiến chưa.' },
      { id: 'v121', cat: 'procurement', en: 'Export variant', ipa: '/ˈek.spɔːrt ˈveə.ri.ənt/', vi: 'Phiên bản xuất khẩu', exEn: 'This export variant complies fully with international arms control regimes.', exVi: 'Phiên bản xuất khẩu này tuân thủ đầy đủ các cơ chế kiểm soát vũ khí quốc tế.' },
      { id: 'v122', cat: 'procurement', en: 'Licensed production & IP rights', ipa: '/ˈlaɪ.sənst prəˈdʌk.ʃən/', vi: 'Sản xuất theo giấy phép & Quyền sở hữu trí tuệ', exEn: 'Both sides are negotiating licensed production terms and shared intellectual property rights.', exVi: 'Hai bên đang đàm phán điều khoản sản xuất theo giấy phép và quyền sở hữu trí tuệ chung.' },
      { id: 'v123', cat: 'procurement', en: 'Lead time', ipa: '/liːd taɪm/', vi: 'Thời gian sản xuất và bàn giao', exEn: 'What is the estimated delivery lead time for an initial batch of twenty units?', exVi: 'Thời gian bàn giao dự kiến cho lô đầu tiên gồm 20 tổ hợp là bao lâu?' },
      { id: 'v124', cat: 'procurement', en: 'Spare-parts provisioning', ipa: '/speər pɑːrts prəˈvɪʒ.ən.ɪŋ/', vi: 'Cung ứng phụ tùng vật tư dự phòng', exEn: 'Long-term spare-parts provisioning guarantees high fleet operational availability.', exVi: 'Cung ứng phụ tùng dài hạn đảm bảo hệ số sẵn sàng kỹ thuật cao cho đội khí tài.' },

      // Strategic Diplomacy & Multilateral Security (8)
      { id: 'v125', cat: 'strategy', en: '“Four No’s” Defence Policy', ipa: '/fɔːr noʊz dɪˈfens ˈpɒl.ə.si/', vi: 'Chính sách Quốc phòng “4 Không” của Việt Nam', exEn: 'Vietnam steadfastly upholds its “Four No’s” defence policy for regional peace and stability.', exVi: 'Việt Nam kiên định chính sách quốc phòng “4 Không” vì hòa bình và ổn định khu vực.' },
      { id: 'v126', cat: 'strategy', en: 'Confidence-Building Measures (CBMs)', ipa: '/ˈkɒn.fɪ.dəns ˈbɪl.dɪŋ ˈmeʒ.ərz/', vi: 'Các biện pháp xây dựng lòng tin', exEn: 'International defence expos serve as practical confidence-building measures among militaries.', exVi: 'Triển lãm quốc phòng quốc tế đóng vai trò là biện pháp xây dựng lòng tin thiết thực giữa quân đội các nước.' },
      { id: 'v127', cat: 'strategy', en: 'Strategic trust', ipa: '/strəˈtiː.dʒɪk trʌst/', vi: 'Lòng tin chiến lược', exEn: 'Open dialogue and transparency deepen strategic trust across the Indo-Pacific.', exVi: 'Đối thoại cởi mở và minh bạch giúp củng cố lòng tin chiến lược tại khu vực.' },
      { id: 'v128', cat: 'strategy', en: 'ASEAN Centrality', ipa: '/ˈɑː.si.ɑːn senˈtræl.ə.ti/', vi: 'Vai trò trung tâm của ASEAN', exEn: 'Vietnam actively supports ASEAN centrality in regional security architectures.', exVi: 'Việt Nam tích cực ủng hộ vai trò trung tâm của ASEAN trong cấu trúc an ninh khu vực.' },
      { id: 'v129', cat: 'strategy', en: 'ADMM / ADMM-Plus', ipa: '/eɪ.diː.em.em plʌs/', vi: 'Hội nghị Bộ trưởng Quốc phòng ASEAN / Mở rộng', exEn: 'Many delegations attending the expo also cooperate within the ADMM-Plus framework.', exVi: 'Nhiều đoàn đại biểu dự triển lãm cũng hợp tác chặt chẽ trong khuôn khổ ADMM-Plus.' },
      { id: 'v130', cat: 'strategy', en: 'Defence hotline', ipa: '/dɪˈfens ˈhɒt.laɪn/', vi: 'Đường dây nóng quốc phòng', exEn: 'Direct defence hotlines help prevent miscalculation and manage maritime incidents.', exVi: 'Đường dây nóng quốc phòng trực tiếp giúp ngăn ngừa tính toán sai lầm và xử lý kịp thời sự cố trên biển.' },
      { id: 'v131', cat: 'strategy', en: 'UNCLOS 1982', ipa: '/ˈʌn.klɒs/', vi: 'Công ước Liên Hợp Quốc về Luật Biển 1982', exEn: 'We advocate resolving maritime disputes peacefully in accordance with international law, including UNCLOS 1982.', exVi: 'Chúng tôi chủ trương giải quyết tranh chấp trên biển bằng biện pháp hòa bình phù hợp luật pháp quốc tế, trong đó có UNCLOS 1982.' },
      { id: 'v132', cat: 'strategy', en: 'Order of precedence', ipa: '/ˈɔːr.dər əv ˈpres.ɪ.dəns/', vi: 'Thứ tự lễ tân / Thứ tự ưu tiên ngoại giao', exEn: 'Protocol officers arrange seating and national flags strictly by the official order of precedence.', exVi: 'Cán bộ lễ tân sắp xếp chỗ ngồi và quốc kỳ tuân thủ nghiêm ngặt thứ tự ưu tiên ngoại giao.' },

      // Full Individual Military & Naval Ranks (22)
      { id: 'v133', cat: 'ranks_vocab', en: 'Private (Pvt)', ipa: '/ˈpraɪ.vət/', vi: 'Binh nhì (Hải quân: Seaman / Không quân: Airman)', exEn: 'Every Private undergoes rigorous basic military and physical training.', exVi: 'Mỗi chiến sĩ Binh nhì đều trải qua khóa huấn luyện quân sự và thể lực cơ bản nghiêm ngặt.' },
      { id: 'v134', cat: 'ranks_vocab', en: 'Private First Class (PFC)', ipa: '/ˈpraɪ.vət fɜːrst klɑːs/', vi: 'Binh nhất', exEn: 'Private First Class Nguyen serves in the Guard of Honor battalion.', exVi: 'Binh nhất Nguyễn đang công tác tại tiểu đoàn Đội Danh dự.' },
      { id: 'v135', cat: 'ranks_vocab', en: 'Corporal (Cpl)', ipa: '/ˈkɔːr.pər.əl/', vi: 'Hạ sĩ', exEn: 'A Corporal often acts as deputy squad leader or technical specialist.', exVi: 'Hạ sĩ thường đảm nhiệm vị trí phó tiểu đội trưởng hoặc nhân viên kỹ thuật.' },
      { id: 'v136', cat: 'ranks_vocab', en: 'Sergeant (Sgt)', ipa: '/ˈsɑːr.dʒənt/', vi: 'Trung sĩ', exEn: 'Sergeant Minh leads the vehicle crew preparing the outdoor armoured display.', exVi: 'Trung sĩ Minh chỉ huy kíp xe chuẩn bị khu trưng bày thiết giáp ngoài trời.' },
      { id: 'v137', cat: 'ranks_vocab', en: 'Sergeant Major / Master Sergeant', ipa: '/ˈsɑːr.dʒənt ˈmeɪ.dʒər/', vi: 'Thượng sĩ (Hạ sĩ quan cao nhất)', exEn: 'The Sergeant Major oversees discipline and readiness across the company.', exVi: 'Thượng sĩ phụ trách kỷ luật và nề nếp sẵn sàng chiến đấu trong đại đội.' },
      { id: 'v138', cat: 'ranks_vocab', en: 'Warrant Officer / Officer Designate (Chuẩn úy)', ipa: '/ˈwɒr.ənt ˈɒf.ɪ.sər/', vi: 'Chuẩn úy (lịch sử QĐND VN / Chuẩn úy quân đội Mỹ–Anh)', exEn: 'In Western armed forces, Warrant Officers sit between senior NCOs and Second Lieutenants.', exVi: 'Trong quân đội phương Tây, cấp Chuẩn úy nằm giữa hạ sĩ quan cao cấp và Thiếu úy.' },
      { id: 'v139', cat: 'ranks_vocab', en: 'Second Lieutenant (2nd Lt)', ipa: '/ˈsek.ənd lefˈten.ənt/', vi: 'Thiếu úy (Hải quân Mỹ: Ensign)', exEn: 'Newly commissioned academy graduates receive the rank of Second Lieutenant.', exVi: 'Học viên tốt nghiệp các học viện sĩ quan được phong quân hàm Thiếu úy.' },
      { id: 'v140', cat: 'ranks_vocab', en: 'First Lieutenant (1st Lt)', ipa: '/fɜːrst lefˈten.ənt/', vi: 'Trung úy', exEn: 'First Lieutenant Hoa is supporting interpretation at the International Pavilion.', exVi: 'Trung úy Hoa đang hỗ trợ phiên dịch tại Khu gian hàng Quốc tế.' },
      { id: 'v141', cat: 'ranks_vocab', en: 'Senior Lieutenant', ipa: '/ˈsiː.ni.ər lefˈten.ənt/', vi: 'Thượng úy (cấp bậc đặc thù QĐND VN)', exEn: 'Senior Lieutenant Duc serves as a liaison officer for the visiting delegation.', exVi: 'Thượng úy Đức đảm nhiệm vai trò sĩ quan liên lạc cho đoàn khách quốc tế.' },
      { id: 'v142', cat: 'ranks_vocab', en: 'Captain (Capt)', ipa: '/ˈkæp.tɪn/', vi: 'Đại úy (Lưu ý: Captain Hải quân Mỹ/Anh = Đại tá Hải quân)', exEn: 'Captain Tuan commands an engineering company and leads technical briefings.', exVi: 'Đại úy Tuấn chỉ huy một đại đội công binh và phụ trách thuyết minh kỹ thuật.' },
      { id: 'v143', cat: 'ranks_vocab', en: 'Major (Maj)', ipa: '/ˈmeɪ.dʒər/', vi: 'Thiếu tá (Hải quân Mỹ/Anh: Lieutenant Commander)', exEn: 'Major Linh coordinates bilateral meeting schedules at the Secretariat.', exVi: 'Thiếu tá Linh điều phối lịch trình các cuộc gặp song phương tại Ban Thư ký.' },
      { id: 'v144', cat: 'ranks_vocab', en: 'Lieutenant Colonel (Lt Col)', ipa: '/lefˈten.ənt ˈkɜːr.nəl/', vi: 'Trung tá (Hải quân Mỹ/Anh: Commander)', exEn: 'Lieutenant Colonel Nam commands a coastal defence missile battalion.', exVi: 'Trung tá Nam là chỉ huy trưởng một tiểu đoàn tên lửa phòng thủ bờ biển.' },
      { id: 'v145', cat: 'ranks_vocab', en: 'Senior Lieutenant Colonel', ipa: '/ˈsiː.ni.ər lefˈten.ənt ˈkɜːr.nəl/', vi: 'Thượng tá (hệ thống 4 cấp tá QĐND VN)', exEn: 'Senior Lieutenant Colonel Ha serves as Deputy Brigade Commander.', exVi: 'Thượng tá Hà giữ chức Phó Lữ đoàn trưởng.' },
      { id: 'v146', cat: 'ranks_vocab', en: 'Senior Colonel', ipa: '/ˈsiː.ni.ər ˈkɜːr.nəl/', vi: 'Đại tá (QĐND Việt Nam — tương đương OF-5/OF-6)', exEn: 'Senior Colonel Phong is the Director of a defence industry shipyard.', exVi: 'Đại tá Phong là Giám đốc một nhà máy đóng tàu công nghiệp quốc phòng.' },
      { id: 'v147', cat: 'ranks_vocab', en: 'Colonel (Col)', ipa: '/ˈkɜːr.nəl/', vi: 'Đại tá (chuẩn NATO / Mỹ / Anh)', exEn: 'Foreign Defence Attachés frequently hold the rank of Colonel or Captain (Navy).', exVi: 'Tùy viên Quốc phòng các nước thường mang quân hàm Đại tá (Colonel hoặc Captain Hải quân).' },
      { id: 'v148', cat: 'ranks_vocab', en: 'Brigadier General (Brig Gen)', ipa: '/ˌbrɪɡ.əˈdɪər ˈdʒen.ər.əl/', vi: 'Chuẩn tướng (1 sao — Quân đội Mỹ/NATO/ASEAN)', exEn: 'Brigadier General Miller heads the visiting defence industry delegation.', exVi: 'Chuẩn tướng Miller dẫn đầu đoàn công nghiệp quốc phòng nước bạn.' },
      { id: 'v149', cat: 'ranks_vocab', en: 'Major General (Maj Gen)', ipa: '/ˈmeɪ.dʒər ˈdʒen.ər.əl/', vi: 'Thiếu tướng', exEn: 'Major General Nguyen chairs the Protocol Subcommittee of the Expo.', exVi: 'Thiếu tướng Nguyễn là Trưởng tiểu ban Lễ tân của Triển lãm.' },
      { id: 'v150', cat: 'ranks_vocab', en: 'Lieutenant General (Lt Gen)', ipa: '/lefˈten.ənt ˈdʒen.ər.əl/', vi: 'Trung tướng', exEn: 'The Lieutenant General serves as Commander of the Military Region.', exVi: 'Trung tướng giữ chức Tư lệnh Quân khu.' },
      { id: 'v151', cat: 'ranks_vocab', en: 'Senior Lieutenant General', ipa: '/ˈsiː.ni.ər lefˈten.ənt ˈdʒen.ər.əl/', vi: 'Thượng tướng', exEn: 'Senior Lieutenant General Hoang serves as Deputy Minister of National Defence.', exVi: 'Thượng tướng Hoàng giữ chức Thứ trưởng Bộ Quốc phòng.' },
      { id: 'v152', cat: 'ranks_vocab', en: 'General (4-star)', ipa: '/ˈdʒen.ər.əl/', vi: 'Đại tướng', exEn: 'The General delivered the keynote opening address at Vietnam Defence Expo 2026.', exVi: 'Đại tướng đã có bài phát biểu khai mạc quan trọng tại Triển lãm Quốc phòng Việt Nam 2026.' },
      { id: 'v153', cat: 'ranks_vocab', en: 'Rear Admiral / Vice Admiral / Admiral', ipa: '/rɪər / vaɪs / ˈæd.mər.əl/', vi: 'Chuẩn Đô đốc / Phó Đô đốc / Đô đốc (Hải quân)', exEn: 'In naval protocol, Rear Admirals and Vice Admirals are addressed directly as “Admiral”.', exVi: 'Trong nghi thức Hải quân, Chuẩn Đô đốc và Phó Đô đốc khi gọi trực tiếp đều xưng là “Admiral”.' },
      { id: 'v154', cat: 'ranks_vocab', en: 'Commander / Ensign (Foreign Navy)', ipa: '/kəˈmɑːn.dər / ˈen.saɪn/', vi: 'Trung tá Hải quân / Thiếu úy Hải quân (Mỹ–Anh)', exEn: 'A US Navy Commander equates to a Lieutenant Colonel, while an Ensign equates to a Second Lieutenant.', exVi: 'Cấp Commander Hải quân Mỹ tương đương Trung tá, còn Ensign tương đương Thiếu úy.' },

      // Military Command Titles, Departmental Roles & Agencies (26)
      { id: 'v155', cat: 'mil_titles', en: 'Minister of National Defence', ipa: '/ˈmɪn.ɪ.stər əv ˈnæʃ.ən.əl dɪˈfens/', vi: 'Bộ trưởng Bộ Quốc phòng', exEn: 'The Minister of National Defence hosted bilateral talks with visiting counterparts.', exVi: 'Bộ trưởng Bộ Quốc phòng đã chủ trì các cuộc hội đàm song phương với người đồng cấp.' },
      { id: 'v156', cat: 'mil_titles', en: 'Deputy Minister of National Defence', ipa: '/ˈdep.jə.ti ˈmɪn.ɪ.stər/', vi: 'Thứ trưởng Bộ Quốc phòng', exEn: 'The Deputy Minister inspected final preparations at Gia Lam Airport.', exVi: 'Thứ trưởng Bộ Quốc phòng đã kiểm tra công tác chuẩn bị cuối cùng tại Sân bay Gia Lâm.' },
      { id: 'v157', cat: 'mil_titles', en: 'Deputy Chief of the General Staff', ipa: '/ˈdep.jə.ti tʃiːf əv ðə ˈdʒen.ər.əl stæf/', vi: 'Phó Tổng Tham mưu trưởng', exEn: 'The Deputy Chief of the General Staff oversaw the opening flypast rehearsal.', exVi: 'Phó Tổng Tham mưu trưởng chỉ đạo buổi tổng duyệt bay chào mừng khai mạc.' },
      { id: 'v158', cat: 'mil_titles', en: 'Chief / Chairman of General Department', ipa: '/tʃiːf əv ˈdʒen.ər.əl dɪˈpɑːrt.mənt/', vi: 'Chủ nhiệm Tổng cục / Tổng Cục trưởng', exEn: 'The Chief of the General Department of Defence Industry welcomed international CEOs.', exVi: 'Chủ nhiệm Tổng cục Công nghiệp Quốc phòng đã đón tiếp các tổng giám đốc quốc tế.' },
      { id: 'v159', cat: 'mil_titles', en: 'Director-General (Cục trưởng)', ipa: '/dəˈrek.tər ˈdʒen.ər.əl/', vi: 'Cục trưởng (chuẩn Thông tư 05/2026/TT-BNG)', exEn: 'The Director-General of the Department of Foreign Relations met foreign attachés.', exVi: 'Cục trưởng Cục Đối ngoại đã gặp mặt các tùy viên quốc phòng nước ngoài.' },
      { id: 'v160', cat: 'mil_titles', en: 'Deputy Director-General (Phó Cục trưởng)', ipa: '/ˈdep.jə.ti dəˈrek.tər ˈdʒen.ər.əl/', vi: 'Phó Cục trưởng', exEn: 'The Deputy Director-General opened the liaison officer training course in Hanoi.', exVi: 'Phó Cục trưởng đã khai mạc khóa tập huấn sĩ quan liên lạc tại Hà Nội.' },
      { id: 'v161', cat: 'mil_titles', en: 'Head of Division (Trưởng phòng)', ipa: '/hed əv dɪˈvɪʒ.ən/', vi: 'Trưởng phòng (chuẩn Thông tư 05/2026/TT-BNG)', exEn: 'Please coordinate exhibition logistics directly with our Head of Division.', exVi: 'Vui lòng phối hợp công tác hậu cần triển lãm trực tiếp với Trưởng phòng của chúng tôi.' },
      { id: 'v162', cat: 'mil_titles', en: 'Deputy Head of Division (Phó Trưởng phòng)', ipa: '/ˈdep.jə.ti hed əv dɪˈvɪʒ.ən/', vi: 'Phó Trưởng phòng', exEn: 'The Deputy Head of Division reviewed the bilingual technical brochures.', exVi: 'Phó Trưởng phòng đã rà soát bộ tài liệu kỹ thuật song ngữ.' },
      { id: 'v163', cat: 'mil_titles', en: 'Head of Section (Trưởng ban)', ipa: '/hed əv ˈsek.ʃən/', vi: 'Trưởng ban', exEn: 'The Head of the Protocol Section manages VIP arrival schedules.', exVi: 'Trưởng ban Lễ tân điều hành lịch trình đón tiếp đoàn VIP.' },
      { id: 'v164', cat: 'mil_titles', en: 'Staff Officer / Assistant (Trợ lý)', ipa: '/stɑːf ˈɒf.ɪ.sər/', vi: 'Sĩ quan tham mưu / Trợ lý cơ quan', exEn: 'Each department assigns Staff Officers to support foreign delegation inquiries.', exVi: 'Mỗi cục phân công các Trợ lý hỗ trợ giải đáp yêu cầu của đoàn đại biểu nước ngoài.' },
      { id: 'v165', cat: 'mil_titles', en: 'Commander / Deputy Commander (Tư lệnh / Phó Tư lệnh)', ipa: '/kəˈmɑːn.dər/', vi: 'Tư lệnh / Phó Tư lệnh (Quân khu, Quân chủng, Binh chủng)', exEn: 'The Commander of the Air Defence – Air Force inspected the static aircraft line.', exVi: 'Tư lệnh Quân chủng Phòng không – Không quân kiểm tra tuyến trưng bày máy bay tĩnh.' },
      { id: 'v166', cat: 'mil_titles', en: 'Deputy Political Commissar / Director of Political Department', ipa: '/pəˈlɪt.ɪ.kəl ˈkɒm.ɪ.sɑːr/', vi: 'Phó Chính ủy / Chủ nhiệm Chính trị', exEn: 'The Director of the Political Department coordinated the cultural exhibition space.', exVi: 'Chủ nhiệm Chính trị điều phối không gian trưng bày văn hóa.' },
      { id: 'v167', cat: 'mil_titles', en: 'Division / Brigade / Regiment Commander', ipa: '/dɪˈvɪʒ.ən / brɪˈɡeɪd kəˈmɑːn.dər/', vi: 'Sư đoàn trưởng / Lữ đoàn trưởng / Trung đoàn trưởng', exEn: 'The Brigade Commander briefed visitors on coastal defence unit readiness.', exVi: 'Lữ đoàn trưởng giới thiệu với khách tham quan về khả năng sẵn sàng chiến đấu của đơn vị.' },
      { id: 'v168', cat: 'mil_titles', en: 'Battalion / Company / Platoon / Squad Leader', ipa: '/bəˈtæl.jən / ˈkʌm.pə.ni kəˈmɑːn.dər/', vi: 'Tiểu đoàn trưởng / Đại đội trưởng / Trung đội trưởng / Tiểu đội trưởng', exEn: 'Company Commanders and Platoon Leaders lead live demonstrations on the field.', exVi: 'Các Đại đội trưởng và Trung đội trưởng trực tiếp chỉ huy trình diễn thực địa.' },
      { id: 'v169', cat: 'mil_titles', en: 'Commandant / President of Military Academy', ipa: '/ˌkɒm.ənˈdænt/', vi: 'Giám đốc Học viện Quân sự / Hiệu trưởng Trường Sĩ quan', exEn: 'The Commandant of the National Defence Academy welcomed visiting scholars.', exVi: 'Giám đốc Học viện Quốc phòng đã đón tiếp các học giả quốc tế.' },
      { id: 'v170', cat: 'mil_titles', en: 'Director of Institute / Factory Director', ipa: '/dəˈrek.tər əv ˈɪn.stɪ.tjuːt/', vi: 'Viện trưởng (Viện nghiên cứu) / Giám đốc Nhà máy Z', exEn: 'The Factory Director presented Z189’s latest shipbuilding and artillery projects.', exVi: 'Giám đốc Nhà máy giới thiệu các dự án đóng tàu và pháo mới nhất của Z189.' },
      { id: 'v171', cat: 'mil_titles', en: 'Department of Foreign Relations (DFR)', ipa: '/dɪˈpɑːrt.mənt əv ˈfɒr.ən rɪˈleɪ.ʃənz/', vi: 'Cục Đối ngoại (Bộ Quốc phòng)', exEn: 'The Department of Foreign Relations coordinates all international military delegations.', exVi: 'Cục Đối ngoại điều phối toàn bộ các đoàn đại biểu quân sự quốc tế.' },
      { id: 'v172', cat: 'mil_titles', en: 'Department of Operations', ipa: '/dɪˈpɑːrt.mənt əv ˌɒp.ərˈeɪ.ʃənz/', vi: 'Cục Tác chiến (Bộ Tổng Tham mưu)', exEn: 'The Department of Operations plans airspace safety for the exhibition flypast.', exVi: 'Cục Tác chiến lập phương án bảo đảm an toàn vùng trời cho màn bay chào mừng.' },
      { id: 'v173', cat: 'mil_titles', en: 'Department of Propaganda and Training', ipa: '/ˌprɒp.əˈɡæn.də ænd ˈtreɪ.nɪŋ/', vi: 'Cục Tuyên huấn (Tổng cục Chính trị)', exEn: 'The Department of Propaganda and Training oversees press and cultural activities.', exVi: 'Cục Tuyên huấn phụ trách các hoạt động tuyên truyền báo chí và văn hóa.' },
      { id: 'v174', cat: 'mil_titles', en: 'Vietnam Department of Peacekeeping Operations (VNDPKO)', ipa: '/ˈpiːs.kiː.pɪŋ ˌɒp.ərˈeɪ.ʃənz/', vi: 'Cục Gìn giữ hòa bình Việt Nam', exEn: 'VNDPKO showcases Vietnam’s contributions to United Nations peacekeeping missions.', exVi: 'Cục Gìn giữ hòa bình Việt Nam giới thiệu đóng góp của Việt Nam cho sứ mệnh Liên Hợp Quốc.' },
      { id: 'v175', cat: 'mil_titles', en: 'Military Medical / Quartermaster / Legal Affairs Department', ipa: '/ˈmɪl.ɪ.ter.i ˈmed.ɪ.kəl/', vi: 'Cục Quân y / Cục Quân nhu / Cục Pháp chế (BQP)', exEn: 'The Military Medical Department ensures on-site emergency response throughout the expo.', exVi: 'Cục Quân y bảo đảm công tác cấp cứu và y tế tại chỗ trong suốt kỳ triển lãm.' },
      { id: 'v176', cat: 'mil_titles', en: 'Vietnam Border Guard', ipa: '/ˈbɔːr.dər ɡɑːrd/', vi: 'Bộ đội Biên phòng Việt Nam', exEn: 'The Vietnam Border Guard cooperates with neighboring countries on border security.', exVi: 'Bộ đội Biên phòng Việt Nam hợp tác chặt chẽ với các nước láng giềng về an ninh biên giới.' },
      { id: 'v177', cat: 'mil_titles', en: 'Vietnam Coast Guard (VCG)', ipa: '/koʊst ɡɑːrd/', vi: 'Cảnh sát biển Việt Nam', exEn: 'The Vietnam Coast Guard enforces maritime law and conducts search and rescue.', exVi: 'Cảnh sát biển Việt Nam thực thi pháp luật trên biển và thực hiện tìm kiếm cứu nạn.' },
      { id: 'v178', cat: 'mil_titles', en: 'Cyber Warfare Command (Command 86)', ipa: '/ˈsaɪ.bər ˈwɔːr.fer kəˈmɑːnd/', vi: 'Bộ Tư lệnh Tác chiến không gian mạng (Bộ Tư lệnh 86)', exEn: 'Command 86 demonstrated advanced network defence and information security solutions.', exVi: 'Bộ Tư lệnh 86 trình diễn các giải pháp phòng thủ mạng và bảo mật thông tin tiên tiến.' },
      { id: 'v179', cat: 'mil_titles', en: 'Special Forces / Armoured / Artillery / Engineering / Signal / Chemical Corps', ipa: '/ˈspeʃ.əl ˈfɔːr.sɪz / ˈɑːr.mərd kɔːr/', vi: 'Các Binh chủng: Đặc công, Tăng Thiết giáp, Pháo binh, Công binh, Thông tin, Hóa học', exEn: 'Each combat arm contributes specialized equipment to the outdoor static display.', exVi: 'Mỗi binh chủng đóng góp khí tài chuyên ngành cho khu trưng bày tĩnh ngoài trời.' },
      { id: 'v180', cat: 'mil_titles', en: 'Organizing Committee / Steering Committee', ipa: '/ˈɔːr.ɡə.naɪ.zɪŋ kəˈmɪt.i/', vi: 'Ban Tổ chức / Ban Chỉ đạo Triển lãm', exEn: 'The Steering Committee meets regularly to review exhibition readiness.', exVi: 'Ban Chỉ đạo họp thường xuyên để rà soát tiến độ chuẩn bị triển lãm.' },

      // Party, State & Government Titles & Institutions (Official Circular 05/2026/TT-BNG) (28)
      { id: 'v181', cat: 'party_state', en: 'The Socialist Republic of Viet Nam (SRV)', ipa: '/ˈsoʊ.ʃəl.ɪst rɪˈpʌb.lɪk əv ˌvjetˈnɑːm/', vi: 'Nước Cộng hòa xã hội chủ nghĩa Việt Nam (Quốc hiệu chuẩn TT 05/2026)', exEn: 'The official English name of Vietnam is The Socialist Republic of Viet Nam (SRV).', exVi: 'Quốc hiệu tiếng Anh chính thức theo Thông tư 05/2026/TT-BNG là The Socialist Republic of Viet Nam (SRV).' },
      { id: 'v182', cat: 'party_state', en: 'Communist Party of Viet Nam (CPV)', ipa: '/ˈkɒm.jə.nɪst ˈpɑːr.ti əv ˌvjetˈnɑːm/', vi: 'Đảng Cộng sản Việt Nam', exEn: 'Defence policy is guided by the Communist Party of Viet Nam and the State.', exVi: 'Đường lối quốc phòng đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và Nhà nước.' },
      { id: 'v183', cat: 'party_state', en: 'Central Committee of the CPV', ipa: '/ˈsen.trəl kəˈmɪt.i/', vi: 'Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam', exEn: 'Members of the Central Committee attended the opening ceremony.', exVi: 'Các Ủy viên Ban Chấp hành Trung ương Đảng đã tham dự lễ khai mạc.' },
      { id: 'v184', cat: 'party_state', en: 'Political Bureau (Politburo)', ipa: '/pəˈlɪt.ɪ.kəl ˈbjʊə.roʊ / ˈpɒl.ɪt.bjʊə.roʊ/', vi: 'Bộ Chính trị', exEn: 'The Political Bureau is the highest decision-making body of the Party between congresses.', exVi: 'Bộ Chính trị là cơ quan lãnh đạo cao nhất của Đảng giữa hai kỳ đại hội.' },
      { id: 'v185', cat: 'party_state', en: 'Secretariat of the Party Central Committee', ipa: '/ˌsek.rəˈteə.ri.ət/', vi: 'Ban Bí thư Trung ương Đảng', exEn: 'The Secretariat oversees daily Party leadership and organizational affairs.', exVi: 'Ban Bí thư lãnh đạo công việc hằng ngày của Đảng và công tác tổ chức.' },
      { id: 'v186', cat: 'party_state', en: 'Office of the Party Central Committee', ipa: '/ˈɒf.ɪs əv ðə ˈpɑːr.ti ˈsen.trəl kəˈmɪt.i/', vi: 'Văn phòng Trung ương Đảng', exEn: 'Official documents were coordinated with the Office of the Party Central Committee.', exVi: 'Các văn bản chính thức được phối hợp cùng Văn phòng Trung ương Đảng.' },
      { id: 'v187', cat: 'party_state', en: 'General Secretary of the Central Committee of the CPV', ipa: '/ˈdʒen.ər.əl ˈsek.rə.tər.i/', vi: 'Tổng Bí thư Ban Chấp hành Trung ương Đảng', exEn: 'The General Secretary also serves as Secretary of the Central Military Commission.', exVi: 'Tổng Bí thư đồng thời là Bí thư Quân ủy Trung ương.' },
      { id: 'v188', cat: 'party_state', en: 'Permanent Member of the Secretariat', ipa: '/ˈpɜːr.mə.nənt ˈmem.bər/', vi: 'Thường trực Ban Bí thư', exEn: 'The Permanent Member of the Secretariat received foreign dignitaries.', exVi: 'Thường trực Ban Bí thư đã tiếp các vị khách cấp cao nước ngoài.' },
      { id: 'v189', cat: 'party_state', en: 'Member of the Political Bureau (Politburo Member)', ipa: '/ˈpɒl.ɪt.bjʊə.roʊ ˈmem.bər/', vi: 'Ủy viên Bộ Chính trị', exEn: 'Several Politburo Members attended the national defence summit.', exVi: 'Nhiều Ủy viên Bộ Chính trị đã tham dự hội nghị cấp cao về quốc phòng.' },
      { id: 'v190', cat: 'party_state', en: 'President of the Socialist Republic of Viet Nam', ipa: '/ˈprez.ɪ.dənt/', vi: 'Chủ tịch nước (và Phó Chủ tịch nước: Vice President)', exEn: 'The President is the Head of State and Chairman of the National Defence and Security Council.', exVi: 'Chủ tịch nước là Nguyên thủ quốc gia và Chủ tịch Hội đồng Quốc phòng và An ninh.' },
      { id: 'v191', cat: 'party_state', en: 'Prime Minister / Deputy Prime Minister', ipa: '/praɪm ˈmɪn.ɪ.stər/', vi: 'Thủ tướng Chính phủ / Phó Thủ tướng Chính phủ', exEn: 'The Prime Minister welcomed foreign defence ministers at the opening gala.', exVi: 'Thủ tướng Chính phủ đã chào đón các Bộ trưởng Quốc phòng nước ngoài tại tiệc khai mạc.' },
      { id: 'v192', cat: 'party_state', en: 'Chairman / Vice Chairman of the National Assembly', ipa: '/ˈtʃeə.mən əv ðə ˈnæʃ.ən.əl əˈsem.bli/', vi: 'Chủ tịch Quốc hội / Phó Chủ tịch Quốc hội', exEn: 'The Chairman of the National Assembly leads Vietnam’s supreme legislative body.', exVi: 'Chủ tịch Quốc hội đứng đầu cơ quan lập pháp tối cao của Việt Nam.' },
      { id: 'v193', cat: 'party_state', en: 'National Assembly (NA)', ipa: '/ˈnæʃ.ən.əl əˈsem.bli/', vi: 'Quốc hội nước CHXHCN Việt Nam', exEn: 'The National Assembly passes laws on national defence, security, and defence industry.', exVi: 'Quốc hội ban hành các luật về quốc phòng, an ninh và công nghiệp quốc phòng.' },
      { id: 'v194', cat: 'party_state', en: 'Committee for National Defence, Security and External Relations (CNDSER)', ipa: '/kəˈmɪt.i fɔːr ˈnæʃ.ən.əl dɪˈfens/', vi: 'Ủy ban Quốc phòng, An ninh và Đối ngoại (Quốc hội — TT 05/2026)', exEn: 'Delegates from the CNDSER visited the domestic defence industry booths.', exVi: 'Đại biểu Ủy ban Quốc phòng, An ninh và Đối ngoại của Quốc hội đã thăm các gian hàng công nghiệp quốc phòng.' },
      { id: 'v195', cat: 'party_state', en: 'Government of the Socialist Republic of Viet Nam (GOV)', ipa: '/ˈɡʌv.ən.mənt/', vi: 'Chính phủ nước CHXHCN Việt Nam', exEn: 'The Government promotes international high-tech and dual-use defence cooperation.', exVi: 'Chính phủ thúc đẩy hợp tác quốc tế về công nghệ cao và công nghiệp lưỡng dụng.' },
      { id: 'v196', cat: 'party_state', en: 'Government Office / Office of the President / Office of the NA', ipa: '/ˈɡʌv.ən.mənt ˈɒf.ɪs/', vi: 'Văn phòng Chính phủ / Văn phòng Chủ tịch nước / Văn phòng Quốc hội', exEn: 'Protocol clearances were coordinated with the Government Office.', exVi: 'Công tác lễ tân cấp cao được phối hợp cùng Văn phòng Chính phủ.' },
      { id: 'v197', cat: 'party_state', en: 'Ministry of Foreign Affairs (MOFA)', ipa: '/ˈmɪn.ɪ.stri əv ˈfɒr.ən əˈfeərz/', vi: 'Bộ Ngoại giao (MOFA)', exEn: 'MOFA’s State Protocol Department supports diplomatic reception standards.', exVi: 'Cục Lễ tân Nhà nước (Bộ Ngoại giao) hỗ trợ chuẩn mực đón tiếp ngoại giao.' },
      { id: 'v198', cat: 'party_state', en: 'Ministry of Public Security (MPS)', ipa: '/ˈmɪn.ɪ.stri əv ˈpʌb.lɪk sɪˈkjʊə.rə.ti/', vi: 'Bộ Công an (MPS)', exEn: 'The Ministry of Public Security coordinates traffic flow and perimeter security with MND.', exVi: 'Bộ Công an phối hợp với Bộ Quốc phòng về phân luồng giao thông và an ninh vòng ngoài.' },
      { id: 'v199', cat: 'party_state', en: 'Ministry of Finance (MOF) / Industry and Trade (MOIT) / Home Affairs (MOHA)', ipa: '/ˈmɪn.ɪ.stri əv ˈfaɪ.næns/', vi: 'Bộ Tài chính / Bộ Công Thương / Bộ Nội vụ (TT 05/2026)', exEn: 'Inter-ministerial working groups include representatives from MND, MOFA, MOF, and MOIT.', exVi: 'Tổ công tác liên ngành gồm đại diện Bộ Quốc phòng, Bộ Ngoại giao, Bộ Tài chính và Bộ Công Thương.' },
      { id: 'v200', cat: 'party_state', en: 'Vietnam Fatherland Front (VFF)', ipa: '/ˈfɑː.ðə.lænd frʌnt/', vi: 'Mặt trận Tổ quốc Việt Nam', exEn: 'The Vietnam Fatherland Front represents national unity and socio-political organizations.', exVi: 'Mặt trận Tổ quốc Việt Nam đại diện cho khối đại đoàn kết toàn dân tộc.' },
      { id: 'v201', cat: 'party_state', en: 'Supreme People’s Court / Supreme People’s Procuracy', ipa: '/suːˈpriːm ˈpiː.pəlz kɔːrt/', vi: 'Tòa án Nhân dân Tối cao / Viện Kiểm sát Nhân dân Tối cao', exEn: 'The Supreme People’s Court and Procuracy form the judicial branch of the State.', exVi: 'Tòa án Nhân dân Tối cao và Viện Kiểm sát Nhân dân Tối cao thuộc hệ thống tư pháp Nhà nước.' },
      { id: 'v202', cat: 'party_state', en: 'People’s Committee (Provincial / Municipal / Commune / Ward)', ipa: '/ˈpiː.pəlz kəˈmɪt.i/', vi: 'Ủy ban Nhân dân (tỉnh, thành phố, xã, phường — TT 05/2026)', exEn: 'The Hanoi Municipal People’s Committee supports urban infrastructure and traffic for the expo.', exVi: 'Ủy ban Nhân dân TP Hà Nội hỗ trợ hạ tầng đô thị và phân luồng giao thông cho triển lãm.' },
      { id: 'v203', cat: 'party_state', en: 'People’s Council', ipa: '/ˈpiː.pəlz ˈkaʊn.səl/', vi: 'Hội đồng Nhân dân', exEn: 'The People’s Council is the local organ of State power representing local voters.', exVi: 'Hội đồng Nhân dân là cơ quan quyền lực nhà nước ở địa phương.' },
      { id: 'v204', cat: 'party_state', en: 'Secretary of the Provincial / Municipal Party Committee', ipa: '/ˈsek.rə.tər.i/', vi: 'Bí thư Tỉnh ủy / Bí thư Thành ủy', exEn: 'The Secretary of the Hanoi Municipal Party Committee attended the ribbon-cutting ceremony.', exVi: 'Bí thư Thành ủy Hà Nội tham dự lễ cắt băng khai mạc.' },
      { id: 'v205', cat: 'party_state', en: 'Chairman / Chairwoman of the People’s Committee', ipa: '/ˈtʃeə.mən əv ðə ˈpiː.pəlz kəˈmɪt.i/', vi: 'Chủ tịch Ủy ban Nhân dân (Phó Chủ tịch: Vice Chairman)', exEn: 'The Chairman of the People’s Committee welcomed international business delegations.', exVi: 'Chủ tịch UBND đã chào đón các đoàn doanh nghiệp quốc tế.' },
      { id: 'v206', cat: 'party_state', en: 'Director of Department (Sở) / Chief Inspector', ipa: '/dəˈrek.tər əv dɪˈpɑːrt.mənt/', vi: 'Giám đốc Sở / Chánh Thanh tra (TT 05/2026)', exEn: 'Provincial Departments (Sở) are led by a Director of Department.', exVi: 'Các Sở thuộc UBND tỉnh/thành phố do Giám đốc Sở đứng đầu.' },
      { id: 'v207', cat: 'party_state', en: 'Chief of Office (Chánh Văn phòng)', ipa: '/tʃiːf əv ˈɒf.ɪs/', vi: 'Chánh Văn phòng (Bộ, Cơ quan, UBND)', exEn: 'The Chief of Office coordinates executive schedules and official correspondence.', exVi: 'Chánh Văn phòng điều phối lịch làm việc của lãnh đạo và công văn đối ngoại.' },
      { id: 'v208', cat: 'party_state', en: 'Ambassador Extraordinary and Plenipotentiary', ipa: '/æmˈbæs.ə.dər/', vi: 'Đại sứ Đặc mệnh Toàn quyền', exEn: 'Foreign Ambassadors Extraordinary and Plenipotentiary were invited to the VIP viewing stand.', exVi: 'Các Đại sứ Đặc mệnh Toàn quyền nước ngoài được mời dự khán tại lễ đài VIP.' },

      // Info Desk, Event Operations & Hanoi Visitor Logistics (22)
      { id: 'v209', cat: 'infodesk_vocab', en: 'Information Desk / Helpdesk', ipa: '/ˌɪn.fərˈmeɪ.ʃən desk/', vi: 'Quầy Thông tin chung / Quầy hỗ trợ', exEn: 'Three general information desks are positioned across Gate A, Hall A, and the outdoor display.', exVi: 'Ba quầy thông tin chung được bố trí tại Cổng A, Nhà A và khu trưng bày ngoài trời.' },
      { id: 'v210', cat: 'infodesk_vocab', en: 'Floor plan / Venue map', ipa: '/flɔːr plæn / ˈven.juː mæp/', vi: 'Sơ đồ mặt bằng / Bản đồ triển lãm', exEn: 'Here is a printed venue map showing all indoor halls and outdoor zones.', exVi: 'Đây là bản đồ triển lãm in sẵn hiển thị toàn bộ nhà trưng bày và khu ngoài trời.' },
      { id: 'v211', cat: 'infodesk_vocab', en: 'Registration Counter / Badge Pickup', ipa: '/ˌredʒ.ɪˈstreɪ.ʃən ˈkaʊn.tər/', vi: 'Quầy Đăng ký / Quầy nhận thẻ', exEn: 'Trade visitors can collect their lanyards at the Registration Counter.', exVi: 'Khách thương mại có thể nhận dây đeo thẻ tại Quầy Đăng ký.' },
      { id: 'v212', cat: 'infodesk_vocab', en: 'Lost and Found', ipa: '/lɒst ænd faʊnd/', vi: 'Bộ phận Đồ thất lạc', exEn: 'All unclaimed belongings are logged at Lost and Found at Information Desk 1.', exVi: 'Toàn bộ đồ vật chưa có người nhận được ghi sổ tại Bộ phận Đồ thất lạc ở Quầy số 1.' },
      { id: 'v213', cat: 'infodesk_vocab', en: 'First Aid Station / Medical Team', ipa: '/fɜːrst eɪd ˈsteɪ.ʃən/', vi: 'Trạm Sơ cứu / Tổ Y tế', exEn: 'Our First Aid Station is staffed by military medics throughout exhibition hours.', exVi: 'Trạm Y tế có đội ngũ quân y trực suốt giờ mở cửa triển lãm.' },
      { id: 'v214', cat: 'infodesk_vocab', en: 'Emergency Exit / Assembly Point', ipa: '/ɪˈmɜːr.dʒən.si ˈek.sɪt/', vi: 'Lối thoát hiểm / Điểm tập kết khẩn cấp', exEn: 'Please note the clearly marked emergency exits on both sides of Hall A.', exVi: 'Vui lòng lưu ý các lối thoát hiểm được đánh dấu rõ ở hai bên Nhà A.' },
      { id: 'v215', cat: 'infodesk_vocab', en: 'Crowd control / Traffic diversion', ipa: '/kraʊd kənˈtroʊl/', vi: 'Điều tiết đám đông / Phân luồng giao thông', exEn: 'Local police manage traffic diversion along Nguyen Van Cu Street during peak hours.', exVi: 'Lực lượng chức năng điều tiết phân luồng giao thông dọc đường Nguyễn Văn Cừ giờ cao điểm.' },
      { id: 'v216', cat: 'infodesk_vocab', en: 'Drop-off / Pick-up point', ipa: '/drɒp ɒf / pɪk ʌp pɔɪnt/', vi: 'Điểm đón / trả khách (taxi, Grab, xe đoàn)', exEn: 'Ride-hailing cars and taxis pick up passengers at the designated drop-off point outside Gate B.', exVi: 'Xe công nghệ và taxi đón khách tại điểm đón trả quy định ngoài Cổng B.' },
      { id: 'v217', cat: 'infodesk_vocab', en: 'Wheelchair accessibility / Ramp', ipa: '/ˈwiːl.tʃeər əkˌses.əˈbɪl.ə.ti/', vi: 'Lối đi xe lăn / Đường dốc hỗ trợ người khuyết tật', exEn: 'All main exhibition pavilions provide full wheelchair accessibility.', exVi: 'Tất cả các khu trưng bày chính đều có lối đi thuận tiện cho xe lăn.' },
      { id: 'v218', cat: 'infodesk_vocab', en: 'Food court / Refreshments', ipa: '/fuːd kɔːrt / rɪˈfreʃ.mənts/', vi: 'Khu ẩm thực / Đồ uống nhẹ', exEn: 'Vietnamese coffee and light meals are available at the outdoor food court.', exVi: 'Cà phê Việt Nam và đồ ăn nhẹ có phục vụ tại khu ẩm thực ngoài trời.' },
      { id: 'v219', cat: 'infodesk_vocab', en: 'Halal / Vegetarian options', ipa: '/həˈlɑːl / ˌvedʒ.ɪˈteə.ri.ən/', vi: 'Đồ ăn Halal (Hồi giáo) / Đồ ăn chay', exEn: 'We can direct delegates to certified Halal and vegetarian dining options.', exVi: 'Chúng tôi có thể hướng dẫn đại biểu tới các điểm phục vụ đồ ăn Halal và đồ chay.' },
      { id: 'v220', cat: 'infodesk_vocab', en: 'Charging station / Power bank', ipa: '/ˈtʃɑːr.dʒɪŋ ˈsteɪ.ʃən/', vi: 'Trạm sạc điện thoại / Pin dự phòng', exEn: 'Complimentary phone charging stations are located inside the visitor lounge.', exVi: 'Trạm sạc điện thoại miễn phí được đặt trong khu phòng nghỉ khách tham quan.' },
      { id: 'v221', cat: 'infodesk_vocab', en: 'Currency exchange / ATM', ipa: '/ˈkʌr.ən.si ɪksˈtʃeɪndʒ/', vi: 'Điểm đổi ngoại tệ / Cây ATM', exEn: 'Mobile banking ATMs are positioned near the main service plaza.', exVi: 'Các cây ATM lưu động được bố trí gần khu vực dịch vụ trung tâm.' },
      { id: 'v222', cat: 'infodesk_vocab', en: 'Cloakroom / Luggage storage', ipa: '/ˈkloʊk.ruːm / ˈlʌɡ.ɪdʒ/', vi: 'Quầy gửi đồ / Ký gửi hành lý', exEn: 'Oversized suitcases can be checked safely at the cloakroom before security screening.', exVi: 'Va-li cỡ lớn có thể gửi an toàn tại quầy ký gửi hành lý trước khi qua cổng soi chiếu.' },
      { id: 'v223', cat: 'infodesk_vocab', en: 'Prayer room / Quiet room', ipa: '/preər ruːm/', vi: 'Phòng cầu nguyện / Phòng nghỉ yên tĩnh', exEn: 'A dedicated quiet and prayer room is available for international delegates.', exVi: 'Phòng cầu nguyện và nghỉ ngơi yên tĩnh được bố trí riêng cho đại biểu quốc tế.' },
      { id: 'v224', cat: 'infodesk_vocab', en: 'Nursing / Baby care room', ipa: '/ˈnɜːr.sɪŋ ruːm/', vi: 'Phòng chăm sóc mẹ và bé', exEn: 'Families with infants can use the air-conditioned baby care room near Hall B.', exVi: 'Gia đình có trẻ nhỏ có thể sử dụng phòng chăm sóc mẹ và bé có điều hòa gần Nhà B.' },
      { id: 'v225', cat: 'infodesk_vocab', en: 'Prohibited items', ipa: '/prəˈhɪb.ɪ.tɪd ˈaɪ.təmz/', vi: 'Vật dụng bị cấm mang vào triển lãm', exEn: 'Personal drones, lighters, and sharp tools are listed as prohibited items.', exVi: 'Flycam cá nhân, bật lửa và vật sắc nhọn thuộc danh mục vật dụng bị cấm.' },
      { id: 'v226', cat: 'infodesk_vocab', en: 'Shift handover', ipa: '/ʃɪft ˈhænd.oʊ.vər/', vi: 'Bàn giao ca trực', exEn: 'Always log open Lost & Found cases in the notebook during shift handover.', exVi: 'Luôn ghi rõ các vụ việc thất lạc chưa xử lý xong vào sổ khi bàn giao ca trực.' },
      { id: 'v227', cat: 'infodesk_vocab', en: 'Two-way radio / Walkie-talkie', ipa: '/tuː weɪ ˈreɪ.di.oʊ/', vi: 'Máy bộ đàm liên lạc nội bộ', exEn: 'Desk 1 called Desk 3 over the two-way radio to coordinate a lost child search.', exVi: 'Quầy 1 gọi Quầy 3 qua bộ đàm để phối hợp tìm trẻ đi lạc.' },
      { id: 'v228', cat: 'infodesk_vocab', en: 'Peak hours / Bottleneck', ipa: '/piːk ˈaʊərz / ˈbɒt.əl.nek/', vi: 'Giờ cao điểm / Điểm ùn ứ', exEn: 'Staff open extra lanes at Gate A to prevent bottlenecks during peak hours.', exVi: 'Nhân sự mở thêm làn kiểm soát tại Cổng A nhằm tránh ùn ứ giờ cao điểm.' },
      { id: 'v229', cat: 'infodesk_vocab', en: 'Embassy / Consular assistance', ipa: '/ˈem.bə.si / ˈkɒn.sjə.lər/', vi: 'Đại sứ quán / Hỗ trợ lãnh sự', exEn: 'If a foreign visitor loses their passport permanently, we help them contact their Embassy.', exVi: 'Nếu khách nước ngoài mất hẳn hộ chiếu, chúng tôi hỗ trợ liên hệ Đại sứ quán.' },
      { id: 'v230', cat: 'infodesk_vocab', en: 'Closing announcement', ipa: '/ˈkloʊ.zɪŋ əˈnaʊns.mənt/', vi: 'Thông báo giờ đóng cửa triển lãm', exEn: 'The closing announcement is broadcast 30 minutes before the gates shut at 17:00.', exVi: 'Thông báo đóng cửa được phát trước 30 phút khi cổng đóng lúc 17:00.' },

      // Advanced Military, Aviation, Naval & Diplomatic Vocabulary (20)
      { id: 'v231', cat: 'land', en: 'Active protection system (APS)', ipa: '/ˈæk.tɪv prəˈtek.ʃən ˈsɪs.təm/', vi: 'Hệ thống phòng vệ chủ động (xe tăng/thiết giáp)', exEn: 'Hard-kill APS intercepts incoming anti-tank missiles before impact.', exVi: 'Hệ thống phòng vệ chủ động đánh chặn tên lửa chống tăng trước khi chạm thân xe.' },
      { id: 'v232', cat: 'land', en: 'Mine-Resistant Ambush Protected (MRAP)', ipa: '/em.ræp/', vi: 'Xe bọc thép kháng mìn chống phục kích', exEn: 'MRAP vehicles feature a V-shaped hull to deflect improvised explosive blasts.', exVi: 'Xe MRAP có gầm chữ V giúp phân tán sóng xung kích từ mìn.' },
      { id: 'v233', cat: 'land', en: 'Self-propelled mortar', ipa: '/ˌself.prəˈpeld ˈmɔːr.tər/', vi: 'Súng cối tự hành', exEn: 'A wheeled self-propelled mortar delivers rapid indirect fire support for infantry.', exVi: 'Súng cối tự hành bánh lốp cung cấp hỏa lực chi viện gián tiếp nhanh cho bộ binh.' },
      { id: 'v234', cat: 'land', en: 'Reconnaissance-strike complex', ipa: '/rɪˈkɒn.ɪ.səns straɪk/', vi: 'Tổ hợp trinh sát – tấn công tích hợp', exEn: 'Linking UAVs directly with artillery creates a rapid reconnaissance-strike complex.', exVi: 'Kết nối trực tiếp UAV với pháo binh tạo nên tổ hợp trinh sát – tấn công tốc độ cao.' },
      { id: 'v235', cat: 'air', en: 'Precision-guided munition (PGM)', ipa: '/prɪˈsɪʒ.ən ˈɡaɪ.dɪd mjuːˈnɪʃ.ən/', vi: 'Đạn dược dẫn đường chính xác', exEn: 'PGMs minimize collateral damage while maximizing strike accuracy.', exVi: 'Đạn dẫn đường chính xác giảm thiểu thiệt hại ngoài ý muốn và tối ưu độ chính xác.' },
      { id: 'v236', cat: 'air', en: 'Airborne Early Warning & Control (AEW&C)', ipa: '/ˈer.bɔːrn ˈɜːr.li ˈwɔːr.nɪŋ/', vi: 'Máy bay cảnh báo sớm và chỉ huy trên không', exEn: 'AEW&C aircraft provide wide-area radar coverage beyond the horizon.', exVi: 'Máy bay cảnh báo sớm cung cấp vùng phủ sóng radar rộng vượt đường chân trời.' },
      { id: 'v237', cat: 'air', en: 'Attack / Utility helicopter', ipa: '/əˈtæk / juːˈtɪl.ə.ti ˈhel.ɪ.kɒp.tər/', vi: 'Trực thăng vũ trang / Trực thăng đa năng', exEn: 'Utility helicopters performed flag-carrying formations during the opening flypast.', exVi: 'Trực thăng đa năng thực hiện đội hình kéo cờ Tổ quốc trong màn bay khai mạc.' },
      { id: 'v238', cat: 'air', en: 'Military transport aircraft', ipa: '/ˈmɪl.ɪ.ter.i ˈtræn.spɔːrt ˈer.kræft/', vi: 'Máy bay vận tải quân sự', exEn: 'Tactical transport aircraft are showcased on the outdoor static apron.', exVi: 'Máy bay vận tải chiến thuật được trưng bày trên sân đỗ ngoài trời.' },
      { id: 'v239', cat: 'air', en: 'Hypersonic missile', ipa: '/ˌhaɪ.pərˈsɒn.ɪk ˈmɪs.aɪl/', vi: 'Tên lửa siêu vượt âm (trên Mach 5)', exEn: 'Hypersonic missiles travel above Mach 5 with high maneuverability.', exVi: 'Tên lửa siêu vượt âm bay nhanh hơn Mach 5 với khả năng cơ động cao.' },
      { id: 'v240', cat: 'air', en: 'Stealth / Low-observable technology', ipa: '/stelθ tekˈnɒl.ə.dʒi/', vi: 'Công nghệ tàng hình / Giảm bộc lộ radar', exEn: 'Radar-absorbent coatings are key to modern low-observable aircraft design.', exVi: 'Lớp sơn hấp thụ sóng radar là yếu tố then chốt trong thiết kế máy bay tàng hình.' },
      { id: 'v241', cat: 'naval', en: 'Guided-missile frigate', ipa: '/ˈɡaɪ.dɪd ˈmɪs.aɪl ˈfrɪɡ.ət/', vi: 'Tàu hộ vệ tên lửa', exEn: 'The guided-missile frigate performs multi-mission anti-air, anti-ship, and ASW duties.', exVi: 'Tàu hộ vệ tên lửa thực hiện đa nhiệm phòng không, chống hạm và chống ngầm.' },
      { id: 'v242', cat: 'naval', en: 'Destroyer', ipa: '/dɪˈstrɔɪ.ər/', vi: 'Tàu khu trục', exEn: 'Modern destroyers carry vertical launching systems for long-range area air defence.', exVi: 'Tàu khu trục hiện đại trang bị ống phóng thẳng đứng cho phòng không khu vực tầm xa.' },
      { id: 'v243', cat: 'naval', en: 'Diesel-electric submarine', ipa: '/ˈdiː.zəl ɪˈlek.trɪk ˌsʌb.məˈriːn/', vi: 'Tàu ngầm điện – diesel', exEn: 'Quiet diesel-electric submarines excel in littoral maritime defence.', exVi: 'Tàu ngầm điện – diesel vận hành êm ái, rất hiệu quả trong phòng thủ vùng biển ven bờ.' },
      { id: 'v244', cat: 'naval', en: 'Offshore patrol vessel (OPV)', ipa: '/ˌɒfˈʃɔːr pəˈtroʊl ˈves.əl/', vi: 'Tàu tuần tra xa bờ', exEn: 'Coast guards deploy OPVs for fisheries protection and offshore search and rescue.', exVi: 'Cảnh sát biển triển khai tàu tuần tra xa bờ để bảo vệ ngư trường và cứu nạn.' },
      { id: 'v245', cat: 'protocol', en: 'Defence Attaché Corps', ipa: '/dɪˈfens əˈtæʃ.eɪ kɔːr/', vi: 'Đoàn Tùy viên Quốc phòng nước ngoài (tại Hà Nội)', exEn: 'The Hanoi Defence Attaché Corps received an advance briefing on Expo 2026.', exVi: 'Đoàn Tùy viên Quốc phòng tại Hà Nội đã được thông tin trước về Triển lãm 2026.' },
      { id: 'v246', cat: 'protocol', en: 'Bilateral defence dialogue', ipa: '/baɪˈlæt.ər.əl dɪˈfens ˈdaɪ.ə.lɒɡ/', vi: 'Đối thoại chính sách quốc phòng song phương', exEn: 'Deputy Ministers co-chaired the annual bilateral defence policy dialogue.', exVi: 'Các Thứ trưởng đồng chủ trì đối thoại chính sách quốc phòng song phương thường niên.' },
      { id: 'v247', cat: 'protocol', en: 'Joint communiqué / Joint statement', ipa: '/dʒɔɪnt kəˈmjuː.nɪ.keɪ/', vi: 'Thông cáo chung / Tuyên bố chung', exEn: 'Both delegations issued a joint statement reaffirming maritime security cooperation.', exVi: 'Hai đoàn đại biểu ra tuyên bố chung tái khẳng định hợp tác an ninh hàng hải.' },
      { id: 'v248', cat: 'protocol', en: 'UN Peacekeeping Mission', ipa: '/ˈpiːs.kiː.pɪŋ ˈmɪʃ.ən/', vi: 'Phái bộ Gìn giữ hòa bình Liên Hợp Quốc', exEn: 'Vietnam’s engineering units and field hospitals earned high praise in UN peacekeeping missions.', exVi: 'Đội công binh và bệnh viện dã chiến Việt Nam được đánh giá cao tại các phái bộ LHQ.' },
      { id: 'v249', cat: 'protocol', en: 'Protocol officer', ipa: '/ˈproʊ.tə.kɒl ˈɒf.ɪ.sər/', vi: 'Cán bộ Lễ tân đối ngoại', exEn: 'Protocol officers verify flag placement, seating charts, and motorcade timing.', exVi: 'Cán bộ lễ tân kiểm tra vị trí quốc kỳ, sơ đồ chỗ ngồi và giờ xe đoàn.' },
      { id: 'v250', cat: 'protocol', en: 'Diplomatic credentials / Accreditation', ipa: '/ˌdɪp.ləˈmæt.ɪk krɪˈden.ʃəlz/', vi: 'Ủy nhiệm thư / Giấy tờ chứng nhận ngoại giao', exEn: 'All foreign VIP delegates present diplomatic credentials prior to badge issuance.', exVi: 'Các đại biểu VIP nước ngoài xuất trình giấy tờ chứng nhận ngoại giao trước khi nhận thẻ.' },
      // === BỔ SUNG CHUYÊN SÂU 2026: C-UAS, KHÍ TÀI MỚI, HẢI QUAN ATA CARNET & HỖ TRỢ TIẾP CẬN (+30) ===
      { id: 'v251', cat: 'air', en: 'Counter-UAS (C-UAS)', ipa: '/ˈkaʊn.tər juː.eɪˈes/', vi: 'Hệ thống phòng chống UAV / phương tiện bay không người lái', exEn: 'Several domestic and international exhibitors are showcasing integrated Counter-UAS solutions.', exVi: 'Nhiều đơn vị trong nước và quốc tế trưng bày giải pháp phòng chống UAV tích hợp.' },
      { id: 'v252', cat: 'air', en: 'Handheld RF drone jammer', ipa: '/ˈhænd.held ɑːrˈef droʊn ˈdʒæm.ər/', vi: 'Thiết bị gây nhiễu UAV cầm tay (sản phẩm mới Nhà máy Z181)', exEn: 'Factory Z181 unveiled its new handheld RF drone jammer for perimeter protection.', exVi: 'Nhà máy Z181 lần đầu giới thiệu thiết bị gây nhiễu UAV cầm tay bảo vệ vành đai.' },
      { id: 'v253', cat: 'air', en: 'Loitering munition', ipa: '/ˈlɔɪ.tər.ɪŋ mjuːˈnɪʃ.ən/', vi: 'Đạn tuần kích / UAV cảm tử', exEn: 'Loitering munitions combine reconnaissance persistence with precision strike capability.', exVi: 'Đạn tuần kích kết hợp khả năng trinh sát bay chờ với tấn công chính xác.' },
      { id: 'v254', cat: 'air', en: 'Glide bomb', ipa: '/ɡlaɪd bɒm/', vi: 'Bom lượn dẫn đường (trưng bày cùng UAV 2026)', exEn: 'The unmanned aerial platform can be configured with a precision-guided glide bomb.', exVi: 'Nền tảng bay không người lái có thể tích hợp bom lượn dẫn đường chính xác.' },
      { id: 'v255', cat: 'air', en: 'Hard-kill / Soft-kill interception', ipa: '/hɑːrd kɪl / sɒft kɪl/', vi: 'Đánh chặn tiêu diệt cứng (hỏa lực) / chế áp mềm (điện tử)', exEn: 'Modern air defence layers combine soft-kill jamming with hard-kill kinetic interceptors.', exVi: 'Phòng không hiện đại kết hợp chế áp mềm bằng gây nhiễu và đánh chặn cứng.' },
      { id: 'v256', cat: 'naval', en: 'Unmanned Surface Vessel (USV)', ipa: '/ʌnˈmænd ˈsɜːr.fɪs ˈves.əl/', vi: 'Xuồng / Phương tiện mặt nước không người lái', exEn: 'Unmanned Surface Vessels enhance maritime patrol and coastal reconnaissance.', exVi: 'Phương tiện mặt nước không người lái tăng cường tuần tra và trinh sát ven biển.' },
      { id: 'v257', cat: 'land', en: 'Light tank (T-1 Light Tank)', ipa: '/laɪt tæŋk/', vi: 'Xe tăng hạng nhẹ (mẫu T-1 do Nhà máy Z125 chế tạo)', exEn: 'The domestically developed T-1 Light Tank makes its debut at Vietnam Defence Expo 2026.', exVi: 'Xe tăng hạng nhẹ T-1 do Việt Nam tự nghiên cứu chế tạo lần đầu ra mắt tại Triển lãm 2026.' },
      { id: 'v258', cat: 'land', en: 'CMOS digital sight', ipa: '/ˈsiː.mɒs ˈdɪdʒ.ɪ.təl saɪt/', vi: 'Kính ngắm kỹ thuật số CMOS (Nhà máy Z181)', exEn: 'The CMOS digital sight integrates day-night thermal imaging with a laser rangefinder.', exVi: 'Kính ngắm kỹ thuật số CMOS tích hợp ảnh nhiệt ngày đêm và đo xa laser.' },
      { id: 'v259', cat: 'cyber', en: 'VR flight & combat simulator', ipa: '/viːˈɑːr flaɪt ˈsɪm.jə.leɪ.tər/', vi: 'Hệ thống mô phỏng bay & tác chiến thực tế ảo VR (MiG-21, IFV, tàu quân sự)', exEn: 'Visitors can experience piloting a MiG-21 in our VR flight simulator zone.', exVi: 'Khách tham quan có thể trải nghiệm lái MiG-21 tại khu mô phỏng thực tế ảo VR.' },
      { id: 'v260', cat: 'cyber', en: 'FPV (First-Person View) drone', ipa: '/ef.piːˈviː droʊn/', vi: 'Thiết bị bay góc nhìn thứ nhất (FPV)', exEn: 'Counter-FPV sensors are a major focus of tactical electronic warfare booths.', exVi: 'Cảm biến chống drone FPV là trọng tâm lớn tại các gian hàng tác chiến điện tử.' },
      { id: 'v261', cat: 'protocol', en: '82nd Founding Anniversary of the VPA', ipa: '/ˌeɪ.tiˈsek.ənd ˈfaʊn.dɪŋ ˌæn.ɪˈvɜːr.sər.i/', vi: 'Kỷ niệm 82 năm Ngày thành lập QĐND Việt Nam (22/12/1944–22/12/2026)', exEn: 'The Expo commemorates the 82nd Founding Anniversary of the Vietnam People’s Army.', exVi: 'Triển lãm chào mừng kỷ niệm 82 năm Ngày thành lập Quân đội Nhân dân Việt Nam.' },
      { id: 'v262', cat: 'protocol', en: '37th All-People National Defence Day', ipa: '/ˈθɜːr.tiˈsev.ənθ ɔːl ˈpiː.pəl dɪˈfens deɪ/', vi: 'Kỷ niệm 37 năm Ngày hội Quốc phòng toàn dân (22/12/1989–22/12/2026)', exEn: 'December 22 also marks the 37th All-People National Defence Day of Viet Nam.', exVi: 'Ngày 22/12 cũng đánh dấu 37 năm Ngày hội Quốc phòng toàn dân.' },
      { id: 'v263', cat: 'strategy', en: 'International Scientific Conference', ipa: '/ˌɪn.tərˈnæʃ.ən.əl ˌsaɪ.ənˈtɪf.ɪk ˈkɒn.fər.əns/', vi: 'Hội thảo Khoa học Quốc tế (sáng 11/12/2026)', exEn: 'The International Scientific Conference on December 11 focuses on science, technology and innovation for peace.', exVi: 'Hội thảo Khoa học Quốc tế ngày 11/12 tập trung vào KHCN và đổi mới sáng tạo vì hòa bình.' },
      { id: 'v264', cat: 'procurement', en: 'ATA Carnet', ipa: '/ˌeɪ.tiːˈeɪ ˈkɑːr.neɪ/', vi: 'Sổ tạm quản hàng hóa ATA Carnet (tạm nhập – tái xuất trưng bày)', exEn: 'International exhibitors may use an ATA Carnet for duty-free temporary import of demonstration gear.', exVi: 'Doanh nghiệp quốc tế có thể dùng sổ ATA Carnet để tạm nhập miễn thuế thiết bị trưng bày.' },
      { id: 'v265', cat: 'procurement', en: 'Temporary import and re-export', ipa: '/ˈtem.pər.ər.i ˈɪm.pɔːrt ænd riːˈek.spɔːrt/', vi: 'Thủ tục tạm nhập – tái xuất (khí tài, mô hình trưng bày)', exEn: 'All foreign display equipment must comply with Viet Nam’s temporary import and re-export procedures.', exVi: 'Mọi thiết bị trưng bày nước ngoài phải tuân thủ thủ tục tạm nhập – tái xuất của Việt Nam.' },
      { id: 'v266', cat: 'procurement', en: 'Customs clearance', ipa: '/ˈkʌs.təmz ˈklɪə.rəns/', vi: 'Thông quan hải quan', exEn: 'Our official logistics partner assists exhibitors with expedited customs clearance.', exVi: 'Đối tác logistics chính thức hỗ trợ đơn vị trưng bày làm thủ tục thông quan nhanh.' },
      { id: 'v267', cat: 'procurement', en: 'Freight forwarder', ipa: '/freɪt ˈfɔːr.wər.dər/', vi: 'Đơn vị giao nhận vận tải quốc tế', exEn: 'Please coordinate crate delivery times directly with the appointed freight forwarder.', exVi: 'Vui lòng phối hợp thời gian giao kiện hàng trực tiếp với đơn vị giao nhận chỉ định.' },
      { id: 'v268', cat: 'procurement', en: 'Oversized / Heavy-lift cargo', ipa: '/ˌoʊ.vərˈsaɪzd ˈhev.i lɪft ˈkɑːr.ɡoʊ/', vi: 'Hàng siêu trường, siêu trọng (xe thiết giáp, pháo, radar)', exEn: 'Oversized cargo move-in to the outdoor apron requires a scheduled crane slot.', exVi: 'Việc đưa hàng siêu trường vào sân đỗ ngoài trời cần đăng ký khung giờ xe cẩu.' },
      { id: 'v269', cat: 'procurement', en: 'Bonded warehouse', ipa: '/ˈbɒn.dɪd ˈweə.haʊs/', vi: 'Kho ngoại quan', exEn: 'Empty shipping crates are stored safely in the designated bonded warehouse during the show.', exVi: 'Vỏ thùng vận chuyển rỗng được lưu giữ an toàn tại kho ngoại quan trong thời gian triển lãm.' },
      { id: 'v270', cat: 'procurement', en: 'Import licence / Export permit', ipa: '/ˈɪm.pɔːrt ˈlaɪ.səns / ˈek.spɔːrt ˈpɜːr.mɪt/', vi: 'Giấy phép nhập khẩu / Giấy phép xuất khẩu quốc phòng', exEn: 'Controlled optical components require a valid export permit prior to shipment.', exVi: 'Linh kiện quang học thuộc diện kiểm soát cần giấy phép xuất khẩu hợp lệ trước khi gửi hàng.' },
      { id: 'v271', cat: 'ops', en: 'Booth build-up / Dismantling', ipa: '/buːθ ˈbɪld.ʌp / dɪsˈmæn.tlɪŋ/', vi: 'Thi công lắp dựng / Tháo dỡ gian hàng', exEn: 'Dismantling of indoor booths begins after 15:00 on December 13 once all public visitors have exited.', exVi: 'Việc tháo dỡ gian hàng trong nhà bắt đầu sau 15:00 ngày 13/12 khi khách đã rời hết.' },
      { id: 'v272', cat: 'ops', en: 'Prohibited items', ipa: '/prəˈhɪb.ɪ.tɪd ˈaɪ.təmz/', vi: 'Vật dụng cấm mang vào khu vực triển lãm', exEn: 'Drones, sharp objects, flammable materials and unauthorised radio jammers are strictly prohibited items.', exVi: 'Flycam, vật sắc nhọn, chất dễ cháy và thiết bị phá sóng trái phép bị nghiêm cấm mang vào.' },
      { id: 'v273', cat: 'ops', en: 'Security screening checkpoint', ipa: '/sɪˈkjʊə.rə.ti ˈskriː.nɪŋ ˈtʃek.pɔɪnt/', vi: 'Cổng / Chốt kiểm tra soi chiếu an ninh', exEn: 'Please have your QR pass and passport ready before reaching the security screening checkpoint.', exVi: 'Vui lòng chuẩn bị sẵn mã QR và hộ chiếu trước khi tới cổng soi chiếu an ninh.' },
      { id: 'v274', cat: 'infodesk_vocab', en: 'Wheelchair-accessible route', ipa: '/ˈwiːl.tʃeər əkˈses.ə.bəl ruːt/', vi: 'Lối đi dành cho xe lăn / hỗ trợ người khuyết tật', exEn: 'A step-free, wheelchair-accessible route connects Hall A, Hall B and the outdoor display.', exVi: 'Lối đi không bậc dành cho xe lăn kết nối trực tiếp Nhà A, Nhà B và khu trưng bày ngoài trời.' },
      { id: 'v275', cat: 'infodesk_vocab', en: 'Priority lane', ipa: '/praɪˈɒr.ə.ti leɪn/', vi: 'Làn ưu tiên (người cao tuổi, khuyết tật, phụ nữ mang thai)', exEn: 'Elderly guests and visitors with mobility needs are welcome to use our priority lane.', exVi: 'Khách cao tuổi và khách hạn chế vận động được mời đi theo làn ưu tiên.' },
      { id: 'v276', cat: 'infodesk_vocab', en: 'Nursing / Mother-and-baby room', ipa: '/ˈnɜːr.sɪŋ ruːm/', vi: 'Phòng mẹ và bé / Phòng chăm sóc trẻ nhỏ', exEn: 'A quiet mother-and-baby room is located beside the First Aid station in Hall A.', exVi: 'Phòng mẹ và bé yên tĩnh nằm ngay cạnh Trạm Y tế tại Nhà A.' },
      { id: 'v277', cat: 'infodesk_vocab', en: 'Portrait verification', ipa: '/ˈpɔːr.trət ˌver.ɪ.fɪˈkeɪ.ʃən/', vi: 'Xác minh ảnh chân dung (khi đăng ký Viettel Tammi)', exEn: 'Please upload a clear front-facing photo for portrait verification on the Viettel Tammi app.', exVi: 'Vui lòng tải ảnh chân dung rõ mặt, chính diện để xác minh trên ứng dụng Viettel Tammi.' },
      { id: 'v278', cat: 'infodesk_vocab', en: 'Water puppetry', ipa: '/ˈwɔː.tər ˈpʌp.ɪ.tri/', vi: 'Múa rối nước (tiết mục văn hóa mới tại Triển lãm 2026)', exEn: 'Traditional Vietnamese water puppetry performances are staged daily in the cultural zone.', exVi: 'Các suất biểu diễn múa rối nước truyền thống diễn ra hằng ngày tại khu văn hóa.' },
      { id: 'v279', cat: 'infodesk_vocab', en: 'Commander Chess (Co Tu Lenh)', ipa: '/kəˈmɑːn.dər tʃes/', vi: 'Cờ Tư lệnh (trò chơi quân sự Việt Nam tại khu trải nghiệm)', exEn: 'International guests can try Commander Chess, a Vietnamese military strategy board game.', exVi: 'Khách quốc tế có thể trải nghiệm Cờ Tư lệnh — bộ cờ chiến thuật quân sự của Việt Nam.' },
      { id: 'v280', cat: 'infodesk_vocab', en: 'Light sculpture', ipa: '/laɪt ˈskʌlp.tʃər/', vi: 'Nghệ thuật điêu khắc ánh sáng (điểm nhấn văn hóa 2026)', exEn: 'Don’t miss the light sculpture installation inside the Vietnamese Cultural Pavilion.', exVi: 'Đừng bỏ lỡ không gian nghệ thuật điêu khắc ánh sáng trong Khu Văn hóa Việt Nam.' },

    ];

    const PHRASE_SCENARIOS = [
      { id: 'all', label: 'Tất cả (66)' },
      { id: 'vip', label: 'Đón tiếp VIP & Nghi thức' },
      { id: 'booth', label: 'Thuyết trình Gian hàng' },
      { id: 'b2b', label: 'Hợp tác & B2B' },
      { id: 'security', label: 'Hướng dẫn & An ninh' },
      { id: 'interpret', label: 'Phiên dịch & Xử lý Q&A' },
      { id: 'media', label: 'Báo chí & Truyền thông' },
      { id: 'banquet', label: 'Tiệc chiêu đãi & Trao quà' },
      { id: 'diplomacy', label: 'Chính sách “4 Không” & Nhạy cảm' }
    ];

    const PHRASES_DATA = [
      // VIP & Protocol (6)
      { id: 'p1', sc: 'vip', en: 'Good morning, General. On behalf of the Organizing Committee, it is our great honor to welcome you to Vietnam International Defence Expo 2026.', vi: 'Chào buổi sáng, Thưa Tướng quân. Thay mặt Ban Tổ chức, chúng tôi rất vinh dự được chào đón Ngài đến với Triển lãm Quốc phòng quốc tế Việt Nam 2026.', tip: 'Dùng “On behalf of...” tạo sắc thái trang trọng khi đón tiếp trưởng đoàn quân sự.' },
      { id: 'p2', sc: 'vip', en: 'Allow me to escort your delegation to the VIP reception hall for refreshments before the opening ceremony.', vi: 'Xin phép để tôi hộ tống đoàn của Ngài tới phòng tiếp khách VIP dùng tiệc trà trước lễ khai mạc.', tip: 'Động từ “escort” chuẩn mực hơn “take” hoặc “bring” trong nghi thức ngoại giao.' },
      { id: 'p3', sc: 'vip', en: 'May I have the honor of introducing Colonel Nguyen, our Deputy Director of International Cooperation?', vi: 'Tôi có thể vinh dự giới thiệu Đại tá Nguyễn, Phó Cục trưởng Cục Hợp tác Quốc tế của chúng tôi không ạ?', tip: 'Luôn giới thiệu người có cấp bậc thấp hơn với người có cấp bậc cao hơn trước.' },
      { id: 'p4', sc: 'vip', en: 'Your bilateral meeting with the Deputy Minister is confirmed for 14:00 in Conference Room 2.', vi: 'Cuộc gặp song phương của Ngài với Thứ trưởng đã được xác nhận vào lúc 14:00 tại Phòng họp số 2.', tip: 'Trong môi trường quân sự, luôn dùng định dạng giờ 24h (14:00) để tránh nhầm lẫn.' },
      { id: 'p5', sc: 'vip', en: 'Thank you very much for gracing our exhibition with your presence. We wish your delegation a productive stay in Hanoi.', vi: 'Xin trân trọng cảm ơn Ngài đã đến tham dự triển lãm. Chúc đoàn có chuyến công tác thành công tốt đẹp tại Hà Nội.', tip: 'Cụm “gracing ... with your presence” rất lịch thiệp khi tiễn lãnh đạo cấp cao.' },
      { id: 'p26', sc: 'vip', en: 'May I invite Your Excellency to sign the commemorative guestbook before we proceed to the group photo?', vi: 'Xin trân trọng kính mời Ngài ký sổ lưu niệm trước khi chúng ta di chuyển sang khu vực chụp ảnh chung.', tip: 'Dùng “Your Excellency” khi thưa với Bộ trưởng Quốc phòng hoặc Đại sứ.' },

      // Booth Pitch (6)
      { id: 'p6', sc: 'booth', en: 'Welcome to our pavilion! Are you looking for specific capabilities in land, naval, or unmanned systems today?', vi: 'Chào mừng quý khách đến với gian hàng của chúng tôi! Hôm nay quý khách đang tìm kiếm giải pháp về lục quân, hải quân hay hệ thống không người lái ạ?', tip: 'Mở đầu bằng câu hỏi gợi mở giúp nhanh chóng nắm bắt nhu cầu của khách chuyên ngành.' },
      { id: 'p7', sc: 'booth', en: 'This system was designed and manufactured indigenously in Vietnam, featuring modular architecture for easy upgrades.', vi: 'Hệ thống này được thiết kế và chế tạo tự chủ tại Việt Nam, sở hữu kiến trúc mô-đun giúp dễ dàng nâng cấp.', tip: 'Từ “indigenously” và “modular architecture” là hai từ khóa rất được đánh giá cao tại triển lãm công nghiệp quốc phòng.' },
      { id: 'p8', sc: 'booth', en: 'Its key operational advantages include all-weather reliability, low maintenance cost, and rapid field deployment.', vi: 'Ưu điểm tác chiến nổi bật của hệ thống là độ tin cậy trong mọi điều kiện thời tiết, chi phí bảo trì thấp và triển khai nhanh trên thực địa.', tip: 'Trình bày theo cấu trúc 3 ý song song (Rule of Three) giúp người nghe dễ nhớ.' },
      { id: 'p9', sc: 'booth', en: 'Would you like a live walkthrough of the digital command interface with our lead engineer?', vi: 'Quý khách có muốn xem phần trình diễn trực tiếp giao diện chỉ huy số cùng kỹ sư trưởng của chúng tôi không?', tip: 'Dùng “live walkthrough” thay vì “show you” để nghe chuyên nghiệp hơn.' },
      { id: 'p10', sc: 'booth', en: 'Here is our technical brochure with unclassified specifications. For detailed operational parameters, we can arrange a closed-door briefing.', vi: 'Đây là tài liệu giới thiệu với các thông số kỹ thuật công khai. Đối với thông số vận hành chi tiết, chúng tôi có thể sắp xếp một buổi trao đổi kín.', tip: 'Phân biệt rõ “unclassified specifications” (thông số công khai) và “closed-door briefing” (trao đổi kín).' },
      { id: 'p27', sc: 'booth', en: 'This platform can be customized to integrate seamlessly with your existing C4ISR and tactical communications infrastructure.', vi: 'Nền tảng này có thể tùy biến để tích hợp đồng bộ với hạ tầng C4ISR và thông tin chiến thuật hiện có của quý vị.', tip: 'Khách hàng quốc tế luôn lo ngại khả năng tương thích (interoperability) — câu này giải tỏa ngay rào cản đó.' },

      // B2B Cooperation (6)
      { id: 'p11', sc: 'b2b', en: 'We are actively seeking international partners for co-development, component supply, and technology transfer.', vi: 'Chúng tôi đang tích cực tìm kiếm đối tác quốc tế để cùng phát triển, cung ứng linh kiện và chuyển giao công nghệ.', tip: 'Nhấn mạnh hợp tác hai chiều (co-development) thay vì chỉ mua bán đơn thuần.' },
      { id: 'p12', sc: 'b2b', en: 'Could we exchange business cards and schedule a 30-minute B2B matchmaking session tomorrow afternoon?', vi: 'Chúng ta có thể trao đổi danh thiếp và hẹn một phiên kết nối B2B kéo dài 30 phút vào chiều mai được không?', tip: 'Khi trao danh thiếp tại sự kiện châu Á/quốc tế, đưa bằng hai tay và hướng chữ về phía đối tác.' },
      { id: 'p13', sc: 'b2b', en: 'Our proposal covers not only hardware delivery, but also comprehensive operator training and MRO support.', vi: 'Đề xuất của chúng tôi không chỉ bao gồm bàn giao phần cứng mà còn đào tạo vận hành toàn diện và hỗ trợ bảo dưỡng sửa chữa (MRO).', tip: 'Khách hàng quốc phòng đặc biệt quan tâm đến dịch vụ hậu mãi vòng đời (MRO).' },
      { id: 'p14', sc: 'b2b', en: 'We would be pleased to draft a non-binding Letter of Intent (LoI) as the first step toward a formal MoU.', vi: 'Chúng tôi rất sẵn lòng soạn thảo Thư bày tỏ ý định (LoI) không ràng buộc như bước đầu tiến tới Bản ghi nhớ (MoU) chính thức.', tip: 'Hiểu đúng lộ trình pháp lý: LoI (Ý định) → MoU (Ghi nhớ) → Contract (Hợp đồng).' },
      { id: 'p15', sc: 'b2b', en: 'I will follow up with your procurement team via email next Monday with the compliance documentation.', vi: 'Tôi sẽ liên hệ lại với bộ phận mua sắm của quý công ty qua email vào thứ Hai tới kèm bộ hồ sơ tiêu chuẩn kỹ thuật.', tip: 'Luôn chốt mốc thời gian phản hồi cụ thể (next Monday) để tạo uy tín B2B.' },
      { id: 'p28', sc: 'b2b', en: 'All proposed deliveries are subject to applicable export control regulations and verified end-user certification.', vi: 'Mọi kế hoạch bàn giao đều tuân thủ quy định kiểm soát xuất khẩu hiện hành và giấy chứng nhận người dùng cuối hợp lệ.', tip: 'Câu nói thể hiện tính chuyên nghiệp và tuân thủ pháp lý quốc tế.' },

      // Security & Visitor Guidance (6)
      { id: 'p16', sc: 'security', en: 'Excuse me, sir. Could you please display your accreditation badge before entering the trade hall?', vi: 'Xin lỗi ông. Ông vui lòng xuất trình thẻ đại biểu trước khi bước vào khu trưng bày thương mại được không ạ?', tip: 'Dùng “Could you please...” giữ thái độ lịch sự nhưng kiên quyết khi kiểm soát an ninh.' },
      { id: 'p17', sc: 'security', en: 'I apologize for the inconvenience, but photography and video recording are not permitted in this restricted zone.', vi: 'Chúng tôi rất tiếc vì sự bất tiện này, nhưng khu vực hạn chế này không cho phép chụp ảnh và quay phim.', tip: 'Bắt đầu bằng lời xin lỗi nhẹ nhàng (“I apologize for the inconvenience”) giúp giảm căng thẳng.' },
      { id: 'p18', sc: 'security', en: 'The outdoor static display is straight ahead through Exit 3, while the Vietnamese Cultural Zone is on your left.', vi: 'Khu trưng bày tĩnh ngoài trời ở ngay phía trước qua Cổng ra số 3, còn Không gian Văn hóa Việt Nam nằm ở bên trái quý khách.', tip: 'Kết hợp chỉ hướng bằng lòng bàn tay mở thay vì dùng một ngón tay.' },
      { id: 'p19', sc: 'security', en: 'Public visitors are welcome on December 12 and 13; today is reserved for official delegations and trade visitors.', vi: 'Khách tham quan tự do được chào đón vào ngày 12 và 13/12; hôm nay dành riêng cho đoàn đại biểu chính thức và khách thương mại.', tip: 'Câu này cực kỳ hữu ích vào hai ngày đầu triển lãm (10–11/12/2026).' },
      { id: 'p20', sc: 'security', en: 'If you need medical assistance or lost-and-found services, the Information Desk is right beside the main entrance.', vi: 'Nếu quý khách cần hỗ trợ y tế hoặc tìm đồ thất lạc, Quầy Thông tin nằm ngay cạnh lối vào chính.', tip: 'Ghi nhớ các vị trí chốt y tế (First Aid) và Quầy thông tin (Information Desk).' },
      { id: 'p29', sc: 'security', en: 'For safety reasons, kindly remain behind the stanchion barriers and refrain from touching the display equipment.', vi: 'Vì lý do an toàn, quý khách vui lòng đứng sau hàng rào dây chắn và không chạm vào khí tài trưng bày.', tip: '“Stanchion barriers” là từ chính xác cho hàng rào dây căng tại triển lãm.' },

      // Interpreting & Handling Q&A (6)
      { id: 'p21', sc: 'interpret', en: 'Pardon me, could you kindly repeat that technical figure so I can translate it with complete accuracy?', vi: 'Xin lỗi, ngài có thể vui lòng nhắc lại con số kỹ thuật đó để tôi dịch lại một cách hoàn toàn chính xác được không ạ?', tip: 'Trong phiên dịch quốc phòng, tuyệt đối không đoán số liệu — xin nhắc lại luôn được đánh giá là chuyên nghiệp.' },
      { id: 'p22', sc: 'interpret', en: 'That specific parameter is classified, so I am unable to comment on it. However, I can share the general operational range.', vi: 'Thông số cụ thể đó thuộc diện bảo mật nên tôi không thể bình luận. Tuy nhiên, tôi có thể chia sẻ tầm hoạt động khái quát.', tip: 'Mẫu câu “chuẩn vàng” để từ chối trả lời thông tin mật mà vẫn giữ không khí cởi mở.' },
      { id: 'p23', sc: 'interpret', en: 'Allow me to clarify that point to ensure there is no misunderstanding between both sides.', vi: 'Xin phép cho tôi làm rõ điểm đó để đảm bảo không có sự hiểu nhầm nào giữa hai bên.', tip: 'Rất hữu ích khi dịch các điều khoản kỹ thuật hoặc cam kết hợp tác.' },
      { id: 'p24', sc: 'interpret', en: 'That is an excellent question. Let me invite our Chief Technical Officer to give you a thorough answer.', vi: 'Đó là một câu hỏi rất hay. Xin phép mời Giám đốc Kỹ thuật của chúng tôi giải đáp chi tiết cho quý vị.', tip: 'Khi gặp câu hỏi ngoài phạm vi chuyên môn, chuyển tiếp khéo léo cho chuyên gia kỹ thuật.' },
      { id: 'p25', sc: 'interpret', en: 'To summarize our discussion today, both teams agree to share preliminary technical requirements within two weeks.', vi: 'Để tóm tắt buổi trao đổi hôm nay, hai bên nhất trí sẽ chia sẻ các yêu cầu kỹ thuật sơ bộ trong vòng hai tuần.', tip: 'Kết thúc cuộc họp bằng một câu tóm tắt ngắn gọn giúp chốt rõ đầu việc tiếp theo.' },
      { id: 'p30', sc: 'interpret', en: 'With your permission, I will interpret consecutively every two to three sentences to preserve full precision.', vi: 'Nếu ngài cho phép, tôi sẽ dịch nối tiếp sau mỗi 2 đến 3 câu để đảm bảo truyền đạt trọn vẹn ý.', tip: 'Thống nhất nhịp dừng với diễn giả trước buổi họp song phương giúp phiên dịch trôi chảy hơn rất nhiều.' },

      // Media & International Press (6)
      { id: 'p31', sc: 'media', en: 'Welcome to the Media Centre. May I verify your press accreditation before issuing your official press kit?', vi: 'Chào mừng đến Trung tâm Báo chí. Tôi có thể kiểm tra thẻ tác nghiệp báo chí của anh/chị trước khi phát bộ tài liệu báo chí chính thức không?', tip: 'Luôn kiểm tra thẻ báo chí (press accreditation) trước khi cấp quyền quay phim tại khu vực ưu tiên.' },
      { id: 'p32', sc: 'media', en: 'Vietnam International Defence Expo 2026 reflects Vietnam’s consistent policy of peace, self-defence, and international defence cooperation.', vi: 'Triển lãm Quốc phòng quốc tế Việt Nam 2026 thể hiện đường lối nhất quán của Việt Nam về hòa bình, tự vệ và hợp tác quốc phòng quốc tế.', tip: 'Thông điệp cốt lõi chuẩn mực khi trả lời phỏng vấn báo chí nước ngoài.' },
      { id: 'p33', sc: 'media', en: 'This third edition spans over 123,000 square meters and brings together 282 organizations and companies from 37 countries.', vi: 'Kỳ triển lãm lần thứ 3 này có diện tích trên 123.000 mét vuông, quy tụ 282 đầu mối và doanh nghiệp đến từ 37 quốc gia.', tip: 'Ghi nhớ chính xác số liệu chính thức tháng 11/2026 để trả lời tự tin trước ống kính.' },
      { id: 'p34', sc: 'media', en: 'For on-the-record interviews with senior officials, please submit your questions through our Press Liaison Desk.', vi: 'Đối với các cuộc phỏng vấn chính thức với lãnh đạo cấp cao, anh/chị vui lòng gửi câu hỏi qua Bàn Liên lạc Báo chí.', tip: 'Cụm “on-the-record” là thuật ngữ báo chí chuẩn chỉ phát ngôn chính thức được phép trích dẫn.' },
      { id: 'p35', sc: 'media', en: 'We have designated camera risers at the flight line for the opening flypast and special forces demonstration.', vi: 'Chúng tôi đã bố trí bục tác nghiệp máy quay riêng tại khu đường băng cho màn bay chào mừng và trình diễn đặc công.', tip: '“Camera risers” (bục đặt máy quay) và “flight line” (tuyến đường băng) rất quen thuộc với phóng viên hàng không.' },
      { id: 'p36', sc: 'media', en: 'Thank you for your interest. I would be happy to share official high-resolution press photos via our media portal.', vi: 'Cảm ơn sự quan tâm của anh/chị. Tôi rất sẵn lòng chia sẻ ảnh báo chí chính thức độ phân giải cao qua cổng thông tin truyền thông của chúng tôi.', tip: 'Cách khéo léo hỗ trợ phóng viên khi họ không được chụp cận cảnh một số khu vực hạn chế.' },
      { id: 'p37', sc: 'vip', en: 'I am Captain Tran from the General Department of Defence Industry, assigned as your delegation’s liaison officer.', vi: 'Tôi là Đại úy Trần thuộc Tổng cục Công nghiệp Quốc phòng, được phân công làm sĩ quan liên lạc cho đoàn của Ngài.', tip: 'Mẫu tự giới thiệu chuẩn: Cấp bậc + Họ + Cơ quan/Đơn vị + Nhiệm vụ.' },
      { id: 'p38', sc: 'vip', en: 'May I ask which armed service or command your delegation represents so I can tailor your pavilion tour?', vi: 'Xin phép hỏi đoàn của Ngài đại diện cho quân chủng hay bộ tư lệnh nào để tôi sắp xếp lộ trình tham quan gian hàng phù hợp nhất ạ?', tip: 'Giúp Sĩ quan Liên lạc nhanh chóng chọn đúng khu vực khí tài Lục quân, Hải quân hay Không quân.' },
      { id: 'p39', sc: 'vip', en: 'Please allow me to introduce Senior Colonel Pham, Brigade Commander, and Senior Colonel Le, our Brigade Political Commissar.', vi: 'Xin phép giới thiệu Đại tá Phạm, Lữ đoàn trưởng, và Đại tá Lê, Chính ủy Lữ đoàn của chúng tôi.', tip: 'Trong QĐND Việt Nam, chức danh Chính ủy dịch chuẩn là “Political Commissar”.' },
      { id: 'p40', sc: 'booth', en: 'Our factory operates under the General Department of Defence Industry, specializing in precision mechanics and naval systems.', vi: 'Nhà máy của chúng tôi trực thuộc Tổng cục Công nghiệp Quốc phòng, chuyên sâu về cơ khí chính xác và hệ thống hải quân.', tip: 'Dùng “operates under...” để giới thiệu cơ quan chủ quản một cách trang trọng.' },
      { id: 'p41', sc: 'b2b', en: 'Our technical team includes field-grade engineering officers and senior warrant officers with over 15 years of MRO experience.', vi: 'Đội ngũ kỹ thuật của chúng tôi gồm các sĩ quan kỹ thuật cấp tá và quân nhân chuyên nghiệp giàu kinh nghiệm với hơn 15 năm làm MRO.', tip: 'Tạo niềm tin năng lực triển khai thực tế với đối tác nước ngoài.' },
      { id: 'p42', sc: 'interpret', en: 'In the Vietnam People’s Army, a Senior Colonel ranks just above Colonel and frequently commands a division or brigade.', vi: 'Trong Quân đội Nhân dân Việt Nam, cấp Đại tá (Senior Colonel) cao hơn Thượng tá một bậc và thường chỉ huy cấp sư đoàn hoặc lữ đoàn.', tip: 'Rất hữu ích khi giải thích hệ thống 4 cấp tá đặc thù của Việt Nam cho đối tác NATO/Mỹ.' },

      // Official Banquet, Toasting & Gift Exchange (6)
      { id: 'p43', sc: 'banquet', en: 'Your Excellencies, Generals, and distinguished guests, may I propose a toast to the enduring friendship and cooperation between our two armed forces.', vi: 'Thưa các Ngài, các Tướng lĩnh và quý vị đại biểu, tôi xin nâng ly chúc cho tình hữu nghị và hợp tác bền chặt giữa quân đội hai nước chúng ta.', tip: 'Đứng thẳng, giữ ly ngang tầm ngực, giao tiếp bằng mắt với trưởng đoàn khách trước khi chạm ly.' },
      { id: 'p44', sc: 'banquet', en: 'On behalf of our Ministry of National Defence, please accept this modest token of our appreciation and goodwill.', vi: 'Thay mặt Bộ Quốc phòng Việt Nam, xin trân trọng gửi tới Ngài món quà lưu niệm nhỏ thể hiện sự trân quý và thiện chí của chúng tôi.', tip: 'Trao quà bằng hai tay và giới thiệu ngắn gọn ý nghĩa văn hóa (VD: trống đồng Đông Sơn, biểu tượng Thánh Gióng).' },
      { id: 'p45', sc: 'banquet', en: 'This bronze drum replica symbolizes Vietnam’s rich cultural heritage and our aspiration for peace and prosperity.', vi: 'Phiên bản trống đồng này biểu trưng cho di sản văn hóa lâu đời của Việt Nam và khát vọng hòa bình, thịnh vượng.', tip: 'Chuẩn bị sẵn 1 câu giới thiệu ý nghĩa món quà giúp khoảnh khắc trao quà trở nên đáng nhớ.' },
      { id: 'p46', sc: 'banquet', en: 'May I invite the Head of Delegation to join our Minister in inspecting the Guard of Honor?', vi: 'Xin trân trọng kính mời Ngài Trưởng đoàn cùng Bộ trưởng của chúng tôi duyệt Đội Danh dự.', tip: 'Dùng “inspecting the Guard of Honor” (duyệt đội danh dự) thay vì “looking at the soldiers”.' },
      { id: 'p47', sc: 'banquet', en: 'Please allow me to guide you to your seat at the head table, arranged in accordance with diplomatic order of precedence.', vi: 'Xin phép mời Ngài về vị trí tại bàn danh dự, được sắp xếp theo đúng thứ tự lễ tân ngoại giao.', tip: 'Chú ý xác nhận trước yêu cầu kiêng kỵ ẩm thực (Halal, chay, dị ứng) của đoàn bạn.' },
      { id: 'p48', sc: 'banquet', en: 'We hope you enjoy traditional Vietnamese cuisine this evening. Please let us know if you have any dietary preferences.', vi: 'Chúc Ngài ngon miệng với ẩm thực truyền thống Việt Nam tối nay. Xin cho chúng tôi biết nếu Ngài có yêu cầu riêng về thực đơn.', tip: '“Dietary preferences / restrictions” là cách hỏi tinh tế về thực đơn tôn giáo hoặc sức khỏe.' },

      // Four No's Policy & Handling Sensitive Geopolitical Questions (6)
      { id: 'p49', sc: 'diplomacy', en: 'Vietnam consistently adheres to its “Four No’s” defence policy: no military alliances, no siding with one country against another, no foreign military bases, and no use or threat of force.', vi: 'Việt Nam nhất quán thực hiện chính sách quốc phòng “4 Không”: không tham gia liên minh quân sự, không liên kết với nước này chống nước kia, không cho đặt căn cứ nước ngoài và không sử dụng hay đe dọa sử dụng vũ lực.', tip: 'Thuộc lòng câu này để trả lời mạch lạc, chuẩn xác khi phóng viên hoặc đại biểu nước ngoài đặt câu hỏi chiến lược.' },
      { id: 'p50', sc: 'diplomacy', en: 'Our defence modernization is strictly defensive in nature, aimed at safeguarding national sovereignty and contributing to regional peace.', vi: 'Công cuộc hiện đại hóa quốc phòng của chúng tôi hoàn toàn mang tính tự vệ, nhằm bảo vệ chủ quyền quốc gia và đóng góp cho hòa bình khu vực.', tip: 'Luôn gắn từ “modernization” với “defensive in nature” và “regional peace”.' },
      { id: 'p51', sc: 'diplomacy', en: 'Vietnam welcomes equal, transparent defence partnerships with all nations on the basis of mutual respect and international law.', vi: 'Việt Nam hoan nghênh quan hệ đối tác quốc phòng bình đẳng, minh bạch với tất cả các quốc gia trên cơ sở tôn trọng lẫn nhau và luật pháp quốc tế.', tip: 'Dùng “partnerships” (đối tác) thay vì “alliances” (liên minh).' },
      { id: 'p52', sc: 'diplomacy', en: 'We firmly support resolving maritime issues through peaceful dialogue, in accordance with international law and UNCLOS 1982.', vi: 'Chúng tôi kiên định ủng hộ giải quyết các vấn đề trên biển thông qua đối thoại hòa bình, phù hợp với luật pháp quốc tế và UNCLOS 1982.', tip: 'Lập trường chuẩn mực, điềm tĩnh khi được hỏi về an ninh hàng hải khu vực.' },
      { id: 'p53', sc: 'diplomacy', en: 'Within ASEAN and ADMM-Plus, we prioritize practical confidence-building measures such as HADR, peacekeeping, and maritime search and rescue.', vi: 'Trong khuôn khổ ASEAN và ADMM-Plus, chúng tôi ưu tiên các biện pháp xây dựng lòng tin thiết thực như cứu trợ thiên tai, gìn giữ hòa bình và tìm kiếm cứu nạn.', tip: 'Nhấn mạnh các lĩnh vực hợp tác phi truyền thống tạo đồng thuận quốc tế rất cao.' },
      { id: 'p54', sc: 'diplomacy', en: 'I appreciate your perspective; however, as an exhibition liaison officer, I can best speak to our defence cooperation programs and displayed capabilities.', vi: 'Tôi trân trọng góc nhìn của ông/bà; tuy nhiên trên cương vị cán bộ triển lãm, tôi xin phép chỉ trao đổi trong phạm vi các chương trình hợp tác quốc phòng và khí tài trưng bày.', tip: 'Kỹ thuật “bridging” (chuyển hướng lịch sự) khi gặp câu hỏi chính trị ngoài thẩm quyền phát ngôn.' },
      { id: 'p55', sc: 'b2b', en: 'For foreign display hardware, our appointed freight forwarder handles temporary import and re-export under an ATA Carnet or customs bond.', vi: 'Đối với khí tài trưng bày từ nước ngoài, đơn vị giao nhận chỉ định của chúng tôi hỗ trợ thủ tục tạm nhập – tái xuất theo sổ ATA Carnet hoặc bảo lãnh hải quan.', tip: 'Câu thiết yếu cho nhóm Gian hàng/B2B khi đối tác hỏi thủ tục đưa thiết bị qua hải quan Việt Nam.' },
      { id: 'p56', sc: 'booth', en: 'Making its debut this year is the domestically engineered T-1 Light Tank alongside Factory Z181’s handheld RF drone jammer and CMOS digital sights.', vi: 'Lần đầu ra mắt năm nay là xe tăng hạng nhẹ T-1 do Việt Nam tự thiết kế chế tạo cùng thiết bị gây nhiễu UAV cầm tay và kính ngắm số CMOS của Nhà máy Z181.', tip: 'Cập nhật sát các sản phẩm mới nổi bật công bố tháng 11/2026 của Tổng cục CNQP.' },
      { id: 'p57', sc: 'booth', en: 'We also invite your delegation to our interactive zone featuring MiG-21 VR flight simulation, Commander Chess, light sculpture, and traditional water puppetry.', vi: 'Chúng tôi cũng trân trọng mời đoàn trải nghiệm khu tương tác với mô phỏng bay VR MiG-21, Cờ Tư lệnh, điêu khắc ánh sáng và múa rối nước truyền thống.', tip: 'Giới thiệu nét mới kết hợp công nghệ cao và bản sắc văn hóa Việt Nam tại Triển lãm 2026.' },
      { id: 'p58', sc: 'vip', en: 'The 2026 Expo is held on the occasion of the 82nd Founding Anniversary of the Vietnam People’s Army and the 37th All-People National Defence Day.', vi: 'Triển lãm 2026 được tổ chức nhân dịp kỷ niệm 82 năm Ngày thành lập Quân đội Nhân dân Việt Nam và 37 năm Ngày hội Quốc phòng toàn dân.', tip: 'Con số mốc 82 năm (1944–2026) và 37 năm (1989–2026) rất hay dùng khi mở lời đón đoàn VIP.' },
      { id: 'p59', sc: 'interpret', en: 'The International Scientific Conference on the morning of December 11 centres on “International Cooperation in Science, Technology and Innovation for Peace and Sustainable Development.”', vi: 'Hội thảo Khoa học Quốc tế sáng 11/12 tập trung vào chủ đề “Hợp tác quốc tế phát triển khoa học, công nghệ, đổi mới sáng tạo vì hòa bình và phát triển bền vững.”', tip: 'Dùng nguyên văn tên tiếng Anh chính thức của Hội thảo Khoa học Quốc tế 11/12/2026.' },
      { id: 'p60', sc: 'booth', en: 'Our Counter-UAS architecture integrates radar detection, electro-optical tracking, and soft-kill RF jamming to neutralise hostile drones safely.', vi: 'Kiến trúc phòng chống UAV của chúng tôi tích hợp phát hiện bằng radar, bám bắt quang điện tử và gây nhiễu mềm RF để vô hiệu hóa UAV thù địch an toàn.', tip: 'Dùng chuẩn Anh-Anh “neutralise” và thuật ngữ C-UAS đang rất được quan tâm tại Expo 2026.' },

    ];

    const ROLEPLAY_SCENARIOS = [
      {
        id: 'rp1',
        title: 'Đón tiếp Tùy viên Quốc phòng tại Khu VIP',
        role: 'Sĩ quan Liên lạc (Liaison Officer)',
        partner: 'Brigadier General James Miller (Defence Attaché)',
        context: 'Sáng 10/12/2026 tại Sảnh VIP Sân bay Gia Lâm. Ngài Tùy viên Quốc phòng đến dự Lễ khai mạc và có cuộc gặp song phương.',
        turns: [
          {
            partnerText: 'Good morning! I am Brigadier General James Miller. Thank you for meeting us at the VIP entrance. Is the opening ceremony starting on time?',
            partnerVi: 'Chào buổi sáng! Tôi là Chuẩn tướng James Miller. Cảm ơn anh đã đón chúng tôi tại cổng VIP. Lễ khai mạc có bắt đầu đúng giờ không?',
            options: [
              { text: 'Good morning, General Miller. Welcome to Vietnam International Defence Expo 2026. Yes, the ceremony starts promptly at 09:00. Allow me to escort you to the VIP Lounge.', score: 10, feedback: 'Xuất sắc! Xưng hô đúng quân hàm (“General Miller”), dùng giờ 24h chuẩn quân sự và động từ ngoại giao “escort”.' },
              { text: 'Hi James, welcome! Yeah, it starts at 9 o’clock. Follow me to the lounge.', score: 0, feedback: 'Quá suồng sã! Không bao giờ gọi tên riêng (“James”) với sĩ quan cấp Tướng nước ngoài trong sự kiện chính thức.' },
              { text: 'Good morning, Sir. Yes, it starts at 9 AM. Please walk this way to the waiting room.', score: 5, feedback: 'Lịch sự nhưng còn hơi đơn giản; dùng “General Miller” và “VIP Lounge” sẽ chuyên nghiệp và trang trọng hơn.' }
            ]
          },
          {
            partnerText: 'Thank you. After the ceremony, my delegation would like to visit the Vietnamese unmanned systems pavilion before our bilateral meeting.',
            partnerVi: 'Cảm ơn anh. Sau lễ khai mạc, đoàn chúng tôi muốn tham quan khu trưng bày hệ thống không người lái của Việt Nam trước cuộc gặp song phương.',
            options: [
              { text: 'Certainly, General. I will coordinate with the pavilion host right away and ensure we arrive at Conference Room 2 by 11:00 for your bilateral meeting.', score: 10, feedback: 'Chuẩn mực! Chủ động điều phối (“coordinate”) và giữ đúng mốc thời gian cuộc gặp song phương.' },
              { text: 'Okay, no problem. Just tell me when you want to go there.', score: 0, feedback: 'Thiếu tính chủ động của Sĩ quan Liên lạc; dễ làm lỡ lịch trình cuộc gặp song phương.' },
              { text: 'Sure, we can go see the drones after the ceremony if we have enough time.', score: 5, feedback: 'Ý đúng nhưng từ “drones” kém trang trọng hơn “unmanned systems”, và câu trả lời chưa khẳng định việc điều phối lịch trình.' }
            ]
          },
          {
            partnerText: 'By the way, could you remind me what the official theme of this year’s exhibition is? I’d like to reference it in my remarks.',
            partnerVi: 'Nhân tiện, anh có thể nhắc giúp tôi chủ đề chính thức của triển lãm năm nay không? Tôi muốn nhắc tới trong bài phát biểu của mình.',
            options: [
              { text: 'Of course, General. The official theme is “Peace, Friendship, Cooperation for Mutual Development.”', score: 10, feedback: 'Hoàn hảo! Truyền đạt chính xác từng từ chủ đề chính thức của Triển lãm Quốc phòng quốc tế Việt Nam 2026.' },
              { text: 'It is something about peace and military business cooperation.', score: 0, feedback: 'Sai lệch thông điệp đối ngoại quốc phòng! Tránh dùng từ “military business” thay cho thông điệp chính thức.' },
              { text: 'It is “Peace, Friendship, and Development” for all countries.', score: 5, feedback: 'Gần đúng nhưng thiếu cụm quan trọng “Cooperation for Mutual Development”.' }
            ]
          }
        ]
      },
      {
        id: 'rp2',
        title: 'Thuyết trình UAV & Hợp tác B2B tại Gian hàng',
        role: 'Đại diện Gian hàng Công nghiệp Quốc phòng',
        partner: 'Ms. Elena Vance (Procurement Director, EuroTech Systems)',
        context: 'Khu trưng bày trong nhà. Giám đốc Mua sắm từ châu Âu quan tâm đến mẫu UAV và hỏi về thông số kỹ thuật cũng như khả năng hợp tác.',
        turns: [
          {
            partnerText: 'Hello! Your new reconnaissance UAV looks impressive. Is this platform developed locally, and what makes it stand out?',
            partnerVi: 'Xin chào! Mẫu UAV trinh sát mới của các bạn trông rất ấn tượng. Nền tảng này có phải do trong nước phát triển không và điểm nổi bật là gì?',
            options: [
              { text: 'Welcome to our booth! Yes, it is indigenously developed in Vietnam, featuring modular payload bays, all-weather endurance, and cost-effective lifecycle maintenance.', score: 10, feedback: 'Tuyệt vời! Nêu bật năng lực tự chủ (“indigenously developed”) và 3 ưu điểm kỹ thuật rõ ràng.' },
              { text: 'Yes, we made it here. It flies very well and is very cheap compared to others.', score: 0, feedback: 'Tránh dùng từ “very cheap” (nghe như hàng kém chất lượng) — hãy dùng “cost-effective”.' },
              { text: 'Thank you. Yes, it is made in Vietnam and has good camera and battery.', score: 5, feedback: 'Dễ hiểu nhưng thiếu thuật ngữ chuyên ngành như “EO/IR payload”, “endurance”, “modular”.' }
            ]
          },
          {
            partnerText: 'Could you tell me the exact encrypted datalink frequency and maximum combat range of this variant?',
            partnerVi: 'Bạn có thể cho tôi biết tần số đường truyền dữ liệu mã hóa chính xác và tầm hoạt động tác chiến tối đa của phiên bản này không?',
            options: [
              { text: 'Specific encryption parameters are classified, so I cannot disclose them on the floor. However, here is our brochure with unclassified specifications, and we can arrange a closed-door technical briefing.', score: 10, feedback: 'Xuất sắc! Xử lý cực kỳ chuẩn mực giữa bảo mật quân sự và thiện chí thương mại B2B.' },
              { text: 'Sorry, that is top secret. I am not allowed to talk about it at all.', score: 5, feedback: 'Đúng về bảo mật nhưng cách từ chối hơi cứng, chưa mở ra hướng trao đổi kỹ thuật chính thức.' },
              { text: 'Let me guess, I think the frequency is around 5 GHz and range is maybe 300 km.', score: 0, feedback: 'Rất nguy hiểm! Tuyệt đối không đoán thông số kỹ thuật hoặc tiết lộ thông tin chưa được phép công bố.' }
            ]
          },
          {
            partnerText: 'We are interested in co-producing optical sensors for regional markets. How should we proceed after the expo?',
            partnerVi: 'Chúng tôi quan tâm đến việc hợp tác sản xuất cảm biến quang học cho thị trường khu vực. Chúng ta nên tiến hành bước tiếp theo thế nào sau triển lãm?',
            options: [
              { text: 'We welcome co-production and technology transfer. Let’s exchange cards and schedule a B2B session tomorrow to discuss a preliminary Letter of Intent.', score: 10, feedback: 'Rất chuyên nghiệp! Chốt ngay bước hành động cụ thể (B2B session & Letter of Intent).' },
              { text: 'Just visit our website later and send a message to the contact form.', score: 0, feedback: 'Bỏ lỡ cơ hội B2B quý giá ngay tại triển lãm!' },
              { text: 'That sounds great! Give me your email and someone will call you next month.', score: 5, feedback: 'Tích cực nhưng mốc thời gian “next month” quá xa và chưa tận dụng không gian B2B tại triển lãm.' }
            ]
          }
        ]
      },
      {
        id: 'rp3',
        title: 'Điều phối An ninh & Quy định Chụp ảnh',
        role: 'Cán bộ Điều phối & An ninh Triển lãm',
        partner: 'Mr. Kenji Sato (International Trade Visitor)',
        context: 'Cổng kiểm soát khu trưng bày kỹ thuật chuyên sâu. Khách thương mại quốc tế đang giơ máy ảnh chuyên nghiệp chụp vào khu vực cấm quay phim.',
        turns: [
          {
            partnerText: 'Oh, this radar interior panel is fascinating! Let me take a few close-up photos for my engineering blog.',
            partnerVi: 'Ồ, bảng điều khiển bên trong radar này thật thú vị! Để tôi chụp vài tấm cận cảnh cho blog kỹ thuật của mình.',
            options: [
              { text: 'Excuse me, sir. I apologize for the inconvenience, but close-up photography is not permitted in this restricted zone. You are very welcome to take photos at the outdoor static display.', score: 10, feedback: 'Chuẩn mực! Lịch sự, kiên quyết theo quy định và đưa ra phương án thay thế tích cực.' },
              { text: 'Hey! Stop taking pictures immediately! No cameras here!', score: 0, feedback: 'Quá gay gắt, dễ gây ấn tượng xấu về hình ảnh chuyên nghiệp của nước chủ nhà.' },
              { text: 'Please don’t take photos here because it is not allowed.', score: 5, feedback: 'Đúng quy định nhưng chưa thật sự khéo léo và chưa gợi ý khu vực được phép chụp ảnh.' }
            ]
          },
          {
            partnerText: 'I understand, my apologies. By the way, my colleague doesn’t have a trade pass yet—can he visit the expo with me tomorrow, December 11?',
            partnerVi: 'Tôi hiểu rồi, xin lỗi nhé. Nhân tiện, đồng nghiệp tôi chưa có thẻ thương mại — anh ấy có thể vào tham quan cùng tôi ngày mai 11/12 không?',
            options: [
              { text: 'Thank you for your understanding, sir. December 10 and 11 are reserved for official delegations and registered trade visitors. Your colleague can either register as a trade visitor or attend on public days, December 12 and 13.', score: 10, feedback: 'Chính xác tuyệt đối về lịch trình Triển lãm 2026 (10–11/12 khách chuyên ngành, 12–13/12 mở cửa tự do) và hướng dẫn rõ ràng.' },
              { text: 'No, he cannot come in without a pass.', score: 5, feedback: 'Đúng nhưng cụt ngủn, không cung cấp thông tin về ngày mở cửa công chúng 12–13/12.' },
              { text: 'Sure, just bring him through Gate A tomorrow morning.', score: 0, feedback: 'Sai quy định an ninh! Mọi khách tham quan đều phải đăng ký và có thẻ/mã xác nhận hợp lệ.' }
            ]
          },
          {
            partnerText: 'Got it, thanks for the clear explanation! Where can I find the shuttle bus back to the main parking area?',
            partnerVi: 'Tôi hiểu rồi, cảm ơn bạn đã giải thích rõ ràng! Tôi có thể tìm xe buýt trung chuyển về bãi đỗ xe chính ở đâu?',
            options: [
              { text: 'You’re very welcome, sir. Please proceed straight to Exit 2—our complimentary shuttle service departs every 10 minutes right outside the gate.', score: 10, feedback: 'Hoàn hảo! Chỉ dẫn rõ ràng, thân thiện và cung cấp thông tin hữu ích về xe trung chuyển.' },
              { text: 'Go outside and look for the big buses.', score: 0, feedback: 'Chỉ dẫn mơ hồ, thiếu chuyên nghiệp.' },
              { text: 'The shuttle bus is near Exit 2 outside.', score: 5, feedback: 'Đúng vị trí nhưng có thể diễn đạt lịch sự và đầy đủ hơn.' }
            ]
          }
        ]
      },
      {
        id: 'rp4',
        title: 'Phỏng vấn nhanh với Phóng viên Quốc tế',
        role: 'Cán bộ Truyền thông & Đối ngoại',
        partner: 'Ms. Sarah Jenkins (Defence Correspondent, Asia-Pacific Defence Review)',
        context: 'Tại Trung tâm Báo chí, phóng viên quốc tế phỏng vấn nhanh về quy mô Triển lãm 2026 và thông điệp quốc phòng của Việt Nam.',
        turns: [
          {
            partnerText: 'Hi! I’m Sarah Jenkins from Asia-Pacific Defence Review. How does this 2026 edition compare to previous expos in terms of scale?',
            partnerVi: 'Xin chào! Tôi là Sarah Jenkins từ Tạp chí Quốc phòng Châu Á - Thái Bình Dương. Kỳ triển lãm năm 2026 có quy mô thế nào so với các kỳ trước?',
            options: [
              { text: 'Welcome to Hanoi, Ms. Jenkins. This third edition has expanded by 20% to over 123,000 square meters, attracting 282 organizations and companies from 37 countries.', score: 10, feedback: 'Tuyệt vời! Cung cấp số liệu chính xác, ngắn gọn, rất “ăn điểm” khi trả lời báo chí quốc tế.' },
              { text: 'It is much bigger than before and there are many foreign booths here.', score: 5, feedback: 'Đúng hướng nhưng thiếu số liệu cụ thể (123.000 m², 282 đầu mối từ 37 quốc gia).' },
              { text: 'I am not sure about the numbers, maybe a few hundred booths.', score: 0, feedback: 'Tránh trả lời phỏng vấn bằng sự phỏng đoán thiếu chuẩn bị.' }
            ]
          },
          {
            partnerText: 'Some observers note the growing number of domestically built systems like UAVs and self-propelled howitzers. What message is Vietnam sending?',
            partnerVi: 'Một số nhà quan sát nhận thấy ngày càng nhiều khí tài nội địa như UAV và pháo tự hành. Việt Nam muốn gửi gắm thông điệp gì?',
            options: [
              { text: 'It demonstrates the self-reliance and modernization of Vietnam’s defence industry, strictly aligned with our peaceful, self-defence policy and openness to international cooperation.', score: 10, feedback: 'Xuất sắc! Nhấn mạnh cả tính tự chủ hiện đại lẫn chính sách quốc phòng hòa bình, tự vệ.' },
              { text: 'We want to show that we have very strong weapons to beat everyone.', score: 0, feedback: 'Tuyệt đối tránh phát ngôn mang tính đối đầu — trái ngược hoàn toàn với thông điệp “Hòa bình, Hữu nghị”.' },
              { text: 'It means our engineers are working hard to build more equipment.', score: 5, feedback: 'An toàn nhưng chưa truyền tải trọn vẹn thông điệp đối ngoại quốc phòng.' }
            ]
          },
          {
            partnerText: 'Can I request a 5-minute on-camera interview with a senior Ministry official this afternoon?',
            partnerVi: 'Tôi có thể đề nghị một cuộc phỏng vấn ghi hình 5 phút với lãnh đạo cấp cao Bộ Quốc phòng chiều nay không?',
            options: [
              { text: 'Certainly. Please submit your press accreditation and proposed questions at the Press Liaison Desk, and our team will coordinate and confirm availability promptly.', score: 10, feedback: 'Rất chuyên nghiệp! Hướng dẫn đúng quy trình báo chí mà vẫn thể hiện sự hiếu khách.' },
              { text: 'No, senior officials never talk to foreign journalists.', score: 0, feedback: 'Phản hồi cứng nhắc và không chính xác về mặt đối ngoại báo chí.' },
              { text: 'Maybe, you can try waiting outside the VIP hall later.', score: 5, feedback: 'Thiếu quy trình chuẩn; dễ gây lộn xộn an ninh tại khu VIP.' }
            ]
          }
        ]
      },
      {
        id: 'rp5',
        title: 'Trao đổi Kỹ thuật Hải quân & Phương tiện Ngầm UUV',
        role: 'Kỹ sư Kỹ thuật Hàng hải & Quốc phòng',
        partner: 'Commander David Park (Naval Systems Delegate)',
        context: 'Khu trưng bày Hải quân. Trung tá Hải quân nước bạn quan tâm đến phương tiện ngầm không người lái (UUV) và khả năng bảo trì vòng đời.',
        turns: [
          {
            partnerText: 'Good afternoon. Your unmanned underwater vehicle caught our attention. What primary missions is this UUV designed for?',
            partnerVi: 'Chào buổi chiều. Phương tiện ngầm không người lái của các bạn rất thu hút chúng tôi. Mẫu UUV này được thiết kế cho những nhiệm vụ chính nào?',
            options: [
              { text: 'Good afternoon, Commander. This modular UUV supports seabed mapping, maritime domain awareness, and dual-use search and rescue operations in littoral waters.', score: 10, feedback: 'Chuẩn xác! Xưng hô đúng quân hàm Hải quân (“Commander”) và dùng thuật ngữ chuyên ngành hàng hải sắc nét.' },
              { text: 'Hello Sir. It swims underwater and takes pictures of the sea.', score: 0, feedback: 'Diễn đạt quá sơ khai, thiếu thuật ngữ kỹ thuật chuyên ngành.' },
              { text: 'Good afternoon. It is mainly used for ocean surveillance and rescue.', score: 5, feedback: 'Đúng ý nhưng bổ sung “seabed mapping” và “littoral waters” sẽ thuyết phục hơn nhiều.' }
            ]
          },
          {
            partnerText: 'How does it handle shallow coastal environments where acoustic noise and currents are challenging?',
            partnerVi: 'Nó hoạt động thế nào ở vùng biển ven bờ nông, nơi tiếng ồn thủy âm và dòng chảy khá phức tạp?',
            options: [
              { text: 'It integrates a high-precision sonar array with inertial navigation and adaptive stabilization thrusters, ensuring reliable performance in complex littoral conditions.', score: 10, feedback: 'Tuyệt vời! Nêu đúng giải pháp kỹ thuật (sonar array, inertial navigation, stabilization thrusters).' },
              { text: 'It has strong motors so it doesn’t get lost.', score: 0, feedback: 'Quá chung chung đối với một đại biểu kỹ thuật hải quân.' },
              { text: 'It uses good sonar and GPS sensors to navigate underwater.', score: 5, feedback: 'Lưu ý kỹ thuật: GPS không xuyên qua nước sâu — dưới nước dùng dẫn đường quán tính (inertial navigation) kết hợp sonar!' }
            ]
          },
          {
            partnerText: 'If our navy evaluates this platform, what kind of lifecycle MRO and operator training do you provide?',
            partnerVi: 'Nếu hải quân chúng tôi đánh giá nền tảng này, các bạn cung cấp gói bảo dưỡng MRO và huấn luyện vận hành như thế nào?',
            options: [
              { text: 'We offer a comprehensive package including simulator-based operator training, spare-parts provisioning, and joint lifecycle MRO support tailored to your fleet.', score: 10, feedback: 'Hoàn hảo! Bao quát đủ 3 trụ cột mà mọi lực lượng hải quân quan tâm: huấn luyện mô phỏng, phụ tùng và bảo dưỡng MRO.' },
              { text: 'We just give you a user manual when you buy it.', score: 0, feedback: 'Không đáp ứng tiêu chuẩn hợp tác quốc phòng hiện đại.' },
              { text: 'We can send engineers to fix it if anything breaks.', score: 5, feedback: 'Khá bị động; nên nhấn mạnh gói MRO chủ động và đào tạo chuyển giao năng lực.' }
            ]
          }
        ]
      },
      {
        id: 'rp6',
        title: 'Xử lý Câu hỏi Nhạy cảm về Chính sách “4 Không”',
        role: 'Sĩ quan Đối ngoại Quốc phòng',
        partner: 'Dr. Marcus Vance (International Security Analyst)',
        context: 'Bên lề hội thảo chuyên đề tại Triển lãm. Một chuyên gia phân tích an ninh quốc tế đặt câu hỏi trực diện về định hướng hợp tác quân sự của Việt Nam.',
        turns: [
          {
            partnerText: 'With exhibitors from 37 countries here, is Vietnam moving toward forming a formal military alliance with any major power?',
            partnerVi: 'Với các doanh nghiệp từ 37 quốc gia có mặt tại đây, liệu Việt Nam có đang tiến tới lập liên minh quân sự chính thức với cường quốc nào không?',
            options: [
              { text: 'Not at all, Dr. Vance. Vietnam steadfastly upholds its “Four No’s” defence policy—including no military alliances and no siding with one country against another—while welcoming transparent partnerships with all nations.', score: 10, feedback: 'Xuất sắc! Trả lời chuẩn xác, điềm tĩnh theo đúng đường lối “4 Không” và phân biệt rõ “partnerships” với “alliances”.' },
              { text: 'Yes, we want to build strong military alliances with everyone here.', score: 0, feedback: 'Sai hoàn toàn về đường lối đối ngoại quốc phòng! Tuyệt đối không dùng từ “military alliances” cho Việt Nam.' },
              { text: 'No, we just want to buy equipment and stay neutral.', score: 5, feedback: 'Chưa đầy đủ sắc thái ngoại giao; cần nêu rõ nguyên tắc “Four No’s” và hợp tác cùng phát triển.' }
            ]
          },
          {
            partnerText: 'Some critics say showcasing new missiles and UAVs could fuel a regional arms race. How do you respond?',
            partnerVi: 'Một số ý kiến cho rằng trưng bày tên lửa và UAV mới có thể thúc đẩy chạy đua vũ trang khu vực. Ông phản hồi thế nào?',
            options: [
              { text: 'Our modernization is strictly self-defensive in nature and promotes transparency. Hosting 37 countries under the theme “Peace, Friendship, Cooperation for Mutual Development” is itself a confidence-building measure.', score: 10, feedback: 'Tuyệt vời! Biến câu hỏi chất vấn thành cơ hội khẳng định tính minh bạch, tự vệ và biện pháp xây dựng lòng tin (CBM).' },
              { text: 'Every country buys weapons, so we have to buy more too.', score: 0, feedback: 'Rơi đúng vào “bẫy ngôn từ” chạy đua vũ trang!' },
              { text: 'We are not starting an arms race; we only want to protect ourselves.', score: 5, feedback: 'Đúng hướng nhưng lặp lại cụm từ tiêu cực “arms race”; hãy chủ động dùng “self-defensive modernization”.' }
            ]
          },
          {
            partnerText: 'What is Vietnam’s stance on maritime disputes—would you comment on recent tensions between two foreign navies?',
            partnerVi: 'Quan điểm của Việt Nam về tranh chấp trên biển thế nào — ông có thể bình luận về căng thẳng gần đây giữa hải quân hai nước khác không?',
            options: [
              { text: 'Vietnam consistently advocates resolving maritime disputes peacefully in accordance with international law, especially UNCLOS 1982. Regarding bilateral incidents involving third parties, I am not in a position to comment.', score: 10, feedback: 'Chuẩn mực ngoại giao bậc thầy! Nêu vững lập trường UNCLOS 1982 và từ chối khéo việc bình luận chuyện của bên thứ ba.' },
              { text: 'I think one of those countries is clearly wrong.', score: 0, feedback: 'Vi phạm nghiêm trọng nguyên tắc ngoại giao trung lập!' },
              { text: 'I cannot talk about politics, please ask the Ministry.', score: 5, feedback: 'An toàn nhưng hơi cứng; nên nhắc lại nguyên tắc hòa bình và UNCLOS 1982 trước khi khép lại.' }
            ]
          }
        ]
      },
      {
        id: 'rp7',
        title: 'Nghi thức Tiệc chiêu đãi & Trao quà Lưu niệm',
        role: 'Cán bộ Lễ tân Đối ngoại',
        partner: 'Vice Admiral Laurent Dubois (Head of Foreign Naval Delegation)',
        context: 'Tiệc chiêu đãi chính thức tối ngày khai mạc 10/12/2026. Bạn hỗ trợ đón tiếp Ngài Phó Đô đốc tại bàn danh dự, trao quà lưu niệm và nâng ly chúc mừng.',
        turns: [
          {
            partnerText: 'Good evening! Thank you for inviting our delegation to tonight’s banquet. The opening ceremony was truly memorable.',
            partnerVi: 'Chào buổi tối! Cảm ơn các bạn đã mời đoàn chúng tôi dự tiệc chiêu đãi tối nay. Lễ khai mạc thật sự rất đáng nhớ.',
            options: [
              { text: 'Good evening, Admiral Dubois. It is our great honor to host you. Please allow me to guide you to your seat at the head table, and kindly let us know if you have any dietary preferences.', score: 10, feedback: 'Hoàn hảo! Xưng hô đúng cấp Hải quân (“Admiral Dubois”), dẫn vào bàn danh dự và tinh tế hỏi về thực đơn.' },
              { text: 'Good evening, General! Please find an empty chair over there.', score: 0, feedback: 'Sai quân hàm (Hải quân gọi là Admiral, không gọi General) và thiếu nghi thức sắp xếp chỗ ngồi theo thứ tự lễ tân.' },
              { text: 'Thank you, Sir. Please sit here and enjoy the food.', score: 5, feedback: 'Lịch sự nhưng chưa thể hiện sự chu đáo của lễ tân cấp cao.' }
            ]
          },
          {
            partnerText: 'Before dinner concludes, we would like to present a plaque from our Navy to your delegation head.',
            partnerVi: 'Trước khi kết thúc bữa tiệc, chúng tôi muốn trao biểu trưng của Hải quân nước tôi tới Trưởng đoàn các bạn.',
            options: [
              { text: 'Thank you very much, Admiral. We are deeply honored. On behalf of our side, please also accept this bronze drum replica as a modest token of our appreciation and enduring goodwill.', score: 10, feedback: 'Xuất sắc! Đáp lễ chuẩn mực, giới thiệu ý nghĩa biểu trưng văn hóa Việt Nam rất trang trọng.' },
              { text: 'Thanks! Here is a souvenir for you too.', score: 0, feedback: 'Quá ngắn gọn, thiếu trang trọng trong nghi thức trao quà cấp tướng/đô đốc.' },
              { text: 'Thank you, Admiral. We also have a small gift for your team.', score: 5, feedback: 'Lịch sự nhưng dùng “a modest token of our appreciation” và nêu tên vật phẩm sẽ ấn tượng hơn nhiều.' }
            ]
          },
          {
            partnerText: 'Would you care to say a few words before we raise our glasses?',
            partnerVi: 'Anh có muốn nói đôi lời trước khi chúng ta cùng nâng ly không?',
            options: [
              { text: 'With pleasure, Admiral. Distinguished guests, may I propose a toast to the health of Admiral Dubois, and to the lasting friendship and maritime cooperation between our two navies. Cheers!', score: 10, feedback: 'Chuẩn mực ngoại giao! Cấu trúc câu chúc mừng đầy đủ sức khỏe trưởng đoàn và tình hữu nghị hai nước.' },
              { text: 'Cheers everybody! Let’s drink!', score: 0, feedback: 'Quá suồng sã cho tiệc chiêu đãi Bộ Quốc phòng.' },
              { text: 'Thank you for coming to Vietnam. Cheers!', score: 5, feedback: 'Thân thiện nhưng còn thiếu cụm chuẩn mực “propose a toast to...”.' }
            ]
          }
        ]
      },
      {
        id: 'rp8',
        title: 'Cao điểm tại Quầy Thông tin số 1 (Ngày Thương mại)',
        role: 'Nhân viên Quầy Thông tin Chung',
        partner: 'Khách quốc tế & Đoàn Đại biểu tại Quầy số 1',
        context: 'Sáng 10/12/2026 tại Quầy Thông tin số 1 (gần Cổng A). Bạn xử lý liên tiếp 4 yêu cầu khác nhau trong giờ cao điểm.',
        turns: [
          {
            partnerText: 'Excuse me! I’m looking for Booth B12 and also the nearest restroom. Where should I go?',
            partnerVi: 'Xin lỗi! Tôi đang tìm Gian hàng B12 và nhà vệ sinh gần nhất. Tôi nên đi hướng nào?',
            options: [
              { text: 'Welcome to Vietnam Defence Expo 2026! Booth B12 is in Indoor Hall A—go straight ahead and turn left at the second aisle. The nearest restrooms are right behind Hall B. Let me mark both on this map for you.', score: 10, feedback: 'Xuất sắc! Trả lời đủ cả 2 yêu cầu rõ ràng và chủ động khoanh lên bản đồ cho khách.' },
              { text: 'Go straight, maybe left, look for the signs.', score: 0, feedback: 'Quá mơ hồ, không chuyên nghiệp cho vị trí Quầy Thông tin.' },
              { text: 'Booth B12 is in Hall A. Restrooms are over there.', score: 5, feedback: 'Đúng vị trí nhưng hơi cụt và thiếu hỗ trợ bản đồ.' }
            ]
          },
          {
            partnerText: 'Wait—my colleague forgot to print his trade pass and the app won’t load. Can you just let him in through the VIP gate?',
            partnerVi: 'Khoan đã — đồng nghiệp tôi quên in thẻ thương mại và app không tải được. Bạn cho anh ấy đi nhờ qua cổng VIP được không?',
            options: [
              { text: 'I understand the inconvenience, sir. For security reasons, everyone needs a valid badge. Please have your colleague bring his passport to the Registration Counter at the main gate—they can verify his registration and print his badge quickly.', score: 10, feedback: 'Chuẩn mực! Kiên quyết giữ nguyên tắc an ninh nhưng đồng cảm và chỉ đúng nơi xử lý nhanh.' },
              { text: 'No, impossible! Without a badge he must go home.', score: 0, feedback: 'Quá cứng nhắc và không đưa ra hướng giải quyết.' },
              { text: 'Okay, tell him to walk fast behind a VIP group.', score: 0, feedback: 'Vi phạm nghiêm trọng quy định an ninh triển lãm!' }
            ]
          },
          {
            partnerText: '(A visiting Brigadier General approaches): Good morning. I have a bilateral meeting at 11:00, could you direct me to Conference Room 2?',
            partnerVi: '(Một vị Chuẩn tướng nước ngoài tiến tới): Chào buổi sáng. Tôi có cuộc gặp song phương lúc 11:00, bạn chỉ giúp tôi Phòng họp số 2 nhé?',
            options: [
              { text: 'Good morning, General. Conference Room 2 is on the second floor of the VIP wing. Please allow me to call our Protocol Liaison Desk right now so an escort officer can guide you directly there.', score: 10, feedback: 'Hoàn hảo! Xưng hô đúng quân hàm (“General”) và chủ động kết nối Sĩ quan Lễ tân ra đón.' },
              { text: 'Go upstairs and look for room number 2.', score: 0, feedback: 'Thiếu nghi thức đón tiếp đối với sĩ quan cấp Tướng.' },
              { text: 'Good morning, Sir. It is on the second floor on the right.', score: 5, feedback: 'Lịch sự nhưng chưa chủ động liên hệ Tiểu ban Lễ tân hộ tống đoàn VIP.' }
            ]
          },
          {
            partnerText: '(A frantic trade visitor runs up): Help! I think I dropped my passport near the outdoor aircraft display! What should I do?',
            partnerVi: '(Một khách thương mại hốt hoảng chạy lại): Giúp tôi với! Tôi nghĩ mình làm rơi hộ chiếu gần khu máy bay ngoài trời! Tôi phải làm sao bây giờ?',
            options: [
              { text: 'Please don’t worry, sir. Take a seat right here—could you tell me your name and nationality? I am alerting our Security Team and our other two information desks immediately to search the outdoor display and checkpoints.', score: 10, feedback: 'Tuyệt vời! Trấn an khách, lấy thông tin và kích hoạt đồng bộ Tổ An ninh + 3 Quầy Thông tin ngay.' },
              { text: 'You should run back outside and look on the ground.', score: 0, feedback: 'Không hỗ trợ theo quy trình Lost & Found và dễ làm khách hoảng loạn hơn.' },
              { text: 'Let me write your phone number in this notebook and call you tomorrow.', score: 5, feedback: 'Mất hộ chiếu cần báo Tổ An ninh xử lý ngay lập tức, không để sang ngày hôm sau.' }
            ]
          }
        ]
      },
      {
        id: 'rp9',
        title: 'Xử lý Sự cố Khẩn ngày Mở cửa tự do (12–13/12)',
        role: 'Nhân viên Quầy Thông tin Chung',
        partner: 'Khách tham quan quốc tế & Gia đình (Ngày Công chúng)',
        context: 'Trưa 12/12/2026 — ngày mở cửa tự do rất đông khách. Bạn liên tiếp xử lý lịch trình, sự cố y tế, trẻ lạc và kẹt xe trung chuyển.',
        turns: [
          {
            partnerText: 'Hi! What time is the special forces demonstration today, and where is the Vietnamese Cultural Zone?',
            partnerVi: 'Chào bạn! Màn trình diễn đặc công hôm nay mấy giờ diễn ra, và Không gian Văn hóa Việt Nam ở đâu?',
            options: [
              { text: 'Welcome! Today’s special forces demonstration starts at 14:00 at the outdoor field—I recommend arriving 15 minutes early. The Vietnamese Cultural Zone is just to your left past Hall A.', score: 10, feedback: 'Rất rõ ràng! Dùng giờ 24h, nhắc khách ra sớm và chỉ hướng mạch lạc.' },
              { text: 'Maybe at 2 PM somewhere outside.', score: 0, feedback: 'Không chắc chắn và thiếu thông tin hướng dẫn.' },
              { text: 'It is at 14:00 outside, and the cultural zone is on the left.', score: 5, feedback: 'Đúng thông tin nhưng có thể thân thiện và chi tiết hơn.' }
            ]
          },
          {
            partnerText: 'Excuse me, my elderly father is feeling dizzy from the sun and heat right outside your desk!',
            partnerVi: 'Xin lỗi, bố tôi lớn tuổi vừa bị chóng mặt do nắng nóng ngay ngoài quầy của bạn!',
            options: [
              { text: 'Please help him sit right here in the shade—here is a bottle of cool water. I am calling our First Aid team immediately; they will be at Information Desk 2 within two minutes.', score: 10, feedback: 'Xử lý y tế chuẩn mực! Đưa vào chỗ râm, tiếp nước mát và gọi First Aid báo rõ số quầy.' },
              { text: 'The hospital is 5 kilometers away, you should take a taxi.', score: 0, feedback: 'Sai quy trình! Tại triển lãm luôn có Trạm Y tế (First Aid) và xe cứu thương trực tại chỗ.' },
              { text: 'You can walk to Hall A to find the medical room.', score: 5, feedback: 'Khi khách đang chóng mặt, không để khách tự đi bộ — hãy cho ngồi nghỉ tại chỗ và gọi First Aid tới.' }
            ]
          },
          {
            partnerText: 'Help! I can’t find my 6-year-old son! We were near the tank display five minutes ago!',
            partnerVi: 'Giúp tôi với! Tôi không thấy con trai 6 tuổi đâu cả! Chúng tôi vừa ở khu xe tăng 5 phút trước!',
            options: [
              { text: 'Please stay right here with me so we don’t miss each other. Tell me his name and what color shirt he is wearing—I am alerting Security and our other two information desks right now.', score: 10, feedback: 'Hoàn hảo! Giữ phụ huynh đứng yên tại quầy, lấy đặc điểm nhận dạng và đồng bộ An ninh + 3 Quầy ngay.' },
              { text: 'Run back to the tanks and shout his name!', score: 0, feedback: 'Rất nguy hiểm vì nếu An ninh tìm thấy bé đưa về quầy sẽ không thấy phụ huynh.' },
              { text: 'Wait here a few minutes, maybe he will come back.', score: 5, feedback: 'Quá thụ động — phải báo bộ đàm An ninh và 2 quầy kia ngay lập tức.' }
            ]
          },
          {
            partnerText: 'Thank goodness you found him! One last thing: the shuttle bus line is quite long—how often do the buses run?',
            partnerVi: 'May quá các bạn đã tìm thấy cháu! Một việc cuối: hàng chờ xe trung chuyển hơi dài — bao lâu có một chuyến vậy?',
            options: [
              { text: 'We’re so relieved he’s safe! Our complimentary shuttle buses depart every 10 minutes from Exit 2, though peak traffic may add a brief 5-to-10-minute wait. Thank you for your patience, and enjoy the rest of your visit!', score: 10, feedback: 'Xuất sắc! Ấm áp, trung thực về thời gian chờ giờ cao điểm và khép lại cực kỳ chuyên nghiệp.' },
              { text: 'I don’t know, traffic is always terrible here.', score: 0, feedback: 'Thiếu chuyên nghiệp và tạo ấn tượng tiêu cực về công tác tổ chức.' },
              { text: 'Every 10 minutes at Exit 2.', score: 5, feedback: 'Đúng thông tin nhưng có thể bổ sung lời động viên và cảnh báo nhẹ về giờ cao điểm.' }
            ]
          }
        ]
      },
      {
        id: 'rp10',
        title: 'Điều phối Cuối ngày & Hỗ trợ Khách Quốc tế (16:30–17:00)',
        role: 'Nhân viên Quầy Thông tin Chung',
        partner: 'Khách quốc tế, Doanh nghiệp & Phóng viên cuối ngày',
        context: '16:30 tại Quầy Thông tin số 3. Cao điểm cuối ngày với mạng 4G chậm, khách hỏi đồ ăn Halal/Grab, phóng viên hỏi lịch tối và thông báo đóng cửa 17:00.',
        turns: [
          {
            partnerText: 'Hi! My phone has zero mobile signal right now so I can’t load the digital map or find the Halal dining area. Can you help?',
            partnerVi: 'Chào bạn! Điện thoại tôi mất sóng 4G nên không mở được bản đồ số hay tìm khu đồ ăn Halal. Bạn giúp tôi được không?',
            options: [
              { text: 'Of course! Mobile networks get busy here—please take this printed venue map. Certified Halal meals are served at Dining Pavilion C right here, and I’ve circled our nearest resting lounge too.', score: 10, feedback: 'Xuất sắc! Giải quyết ngay nỗi lo mất mạng bằng bản đồ giấy và chỉ chuẩn xác khu đồ ăn Halal.' },
              { text: 'Just restart your phone and wait for 4G.', score: 0, feedback: 'Không hỗ trợ khách khi đã có sẵn bản đồ giấy tại quầy.' },
              { text: 'Halal food is at Pavilion C, walk straight ahead.', score: 5, feedback: 'Đúng vị trí nhưng thiếu bản đồ giấy dự phòng cho khách.' }
            ]
          },
          {
            partnerText: 'Thanks! After the expo closes, how do I get back to my hotel near Hoan Kiem Lake? My Grab driver says the road outside is restricted.',
            partnerVi: 'Cảm ơn! Sau khi triển lãm đóng cửa, tôi về khách sạn gần Hồ Hoàn Kiếm thế nào? Tài xế Grab báo đường ngoài cổng đang cấm xe.',
            options: [
              { text: 'Due to traffic diversion around Gia Lam Airport, please take our free shuttle from Exit 2 to the official Pick-up Point outside Gate B—Grab cars and taxis can pick you up easily there, about 25 minutes to Hoan Kiem Lake.', score: 10, feedback: 'Hoàn hảo! Hướng dẫn đúng quy trình phân luồng giao thông + xe trung chuyển + thời gian dự kiến.' },
              { text: 'Just walk 3 kilometers down the highway to find a taxi.', score: 0, feedback: 'Gây mệt mỏi và không an toàn cho khách quốc tế.' },
              { text: 'Take the shuttle bus outside and call Grab later.', score: 5, feedback: 'Đúng ý nhưng chưa nêu rõ Cổng ra số 2 và Điểm đón Cổng B.' }
            ]
          },
          {
            partnerText: '(A foreign journalist steps up with a camera): Quick question on camera—what do you personally think is the most impressive weapon here today?',
            partnerVi: '(Một phóng viên nước ngoài giơ máy quay tiến tới): Hỏi nhanh ghi hình chút nhé — cá nhân bạn thấy vũ khí nào ấn tượng nhất hôm nay?',
            options: [
              { text: 'Thank you for your interest! As general information staff, I’m not authorized for on-camera interviews, but I’d be happy to direct you to our Media Centre where our Press Officer can assist you.', score: 10, feedback: 'Chuẩn mực kỷ luật phát ngôn! Lịch sự, khéo léo và chuyển đúng về Trung tâm Báo chí.' },
              { text: 'Sure, turn on the camera! I think the new missiles are super cool!', score: 0, feedback: 'Vi phạm kỷ luật phát ngôn của nhân sự Quầy Thông tin!' },
              { text: 'No camera! Go away!', score: 0, feedback: 'Thái độ thiếu chuyên nghiệp với báo chí quốc tế.' }
            ]
          },
          {
            partnerText: 'It’s 16:50 now—can I still enter Indoor Hall A for another hour?',
            partnerVi: 'Bây giờ là 16:50 rồi — tôi có thể vào Nhà trưng bày A xem thêm một tiếng nữa không?',
            options: [
              { text: 'Thank you for visiting today! The exhibition closes promptly at 17:00 and last entry was at 16:30. We’d love to welcome you back tomorrow morning at 09:00—have a safe evening in Hanoi!', score: 10, feedback: 'Tuyệt vời! Nêu rõ giờ đóng cửa 17:00, lịch mở cửa lại 09:00 sáng mai và lời chúc ấm áp.' },
              { text: 'We are closing now, please leave immediately.', score: 5, feedback: 'Đúng giờ đóng cửa nhưng giọng điệu hơi cứng.' },
              { text: 'Yes, stay as long as you like.', score: 0, feedback: 'Sai quy định giờ đóng cửa an ninh của Ban Tổ chức.' }
            ]
          }
        ]
      }
    ];

    const RANKS_DATA = [
      { group: 'general', vi: 'Đại tướng', en: 'General (4-star)', address: 'General [Surname] / Sir', note: 'Cấp bậc cao nhất trong QĐND Việt Nam' },
      { group: 'general', vi: 'Thượng tướng / Đô đốc', en: 'Senior Lieutenant General / Admiral', address: 'General / Admiral [Surname]', note: 'Thường là Thứ trưởng Bộ Quốc phòng, Tổng Tham mưu trưởng' },
      { group: 'general', vi: 'Trung tướng / Phó Đô đốc', en: 'Lieutenant General / Vice Admiral', address: 'General / Admiral [Surname]', note: 'Tư lệnh Quân khu, Quân chủng, Chủ nhiệm Tổng cục' },
      { group: 'general', vi: 'Thiếu tướng / Chuẩn Đô đốc', en: 'Major General / Rear Admiral', address: 'General / Admiral [Surname]', note: 'Cục trưởng, Tư lệnh Binh chủng, Giám đốc Học viện' },
      { group: 'field', vi: 'Đại tá', en: 'Senior Colonel (VPA — tương đương OF-5 Colonel NATO)', address: 'Colonel / Senior Colonel [Surname]', note: 'Hệ thống VPA có 4 cấp tá (Đại tá tương đương Senior Colonel)' },
      { group: 'field', vi: 'Thượng tá', en: 'Senior Lieutenant Colonel (VPA — hệ thống 4 cấp tá)', address: 'Colonel [Surname]', note: 'Lữ đoàn trưởng, Trung đoàn trưởng, Phó Cục trưởng' },
      { group: 'field', vi: 'Trung tá', en: 'Lieutenant Colonel / Commander (Navy)', address: 'Colonel / Commander [Surname]', note: 'Trong Hải quân quốc tế, cấp tương đương Trung tá là “Commander”' },
      { group: 'field', vi: 'Thiếu tá', en: 'Major / Lieutenant Commander (Navy)', address: 'Major [Surname]', note: 'Tiểu đoàn trưởng, Sĩ quan tham mưu cấp phòng' },
      { group: 'company', vi: 'Đại úy', en: 'Captain', address: 'Captain [Surname]', note: 'Lưu ý: Trong Hải quân Mỹ/Anh, “Captain” tương đương Đại tá Hải quân' },
      { group: 'company', vi: 'Thượng úy', en: 'Senior Lieutenant', address: 'Lieutenant [Surname]', note: 'Sĩ quan liên lạc, phiên dịch, kỹ sư trẻ tại gian hàng' },
      { group: 'company', vi: 'Trung úy', en: 'First Lieutenant', address: 'Lieutenant [Surname]', note: 'Gọi ngắn gọn là “Lieutenant” trong giao tiếp' },
      { group: 'company', vi: 'Thiếu úy', en: 'Second Lieutenant', address: 'Lieutenant [Surname]', note: 'Sĩ quan mới tốt nghiệp học viện quân sự' },
      { group: 'nco', vi: 'Chuẩn úy (Lịch sử VN / Quân đội Mỹ–Anh)', en: 'Warrant Officer / Officer Designate', address: 'Warrant Officer / Chief [Surname]', note: 'Bậc giữa Thượng sĩ và Thiếu úy (phổ biến trong quân đội Mỹ/Anh/NATO)' },
      { group: 'nco', vi: 'Quân nhân chuyên nghiệp (QNCN)', en: 'Professional Serviceman / Technical Warrant Officer', address: 'Chief / Specialist [Surname]', note: 'Chuyên gia kỹ thuật, lái xe khí tài, nhân viên chuyên môn dài hạn QĐND VN' },
      { group: 'nco', vi: 'Thượng sĩ', en: 'Sergeant Major / Master Sergeant', address: 'Sergeant Major / Sergeant', note: 'Hạ sĩ quan cấp cao nhất; tương đương OR-7 đến OR-9 NATO' },
      { group: 'nco', vi: 'Trung sĩ', en: 'Sergeant (Sgt)', address: 'Sergeant [Surname]', note: 'Tiểu đội trưởng, khẩu đội trưởng; tương đương OR-5 NATO' },
      { group: 'nco', vi: 'Hạ sĩ', en: 'Corporal (Cpl)', address: 'Corporal [Surname]', note: 'Phó tiểu đội trưởng hoặc chiến sĩ chuyên môn; tương đương OR-4 NATO' },
      { group: 'nco', vi: 'Binh nhất', en: 'Private First Class (PFC)', address: 'Private [Surname]', note: 'Chiến sĩ tại ngũ năm thứ hai; tương đương OR-2/OR-3 NATO' },
      { group: 'nco', vi: 'Binh nhì', en: 'Private (Pvt) / Seaman / Airman', address: 'Private [Surname]', note: 'Chiến sĩ mới nhập ngũ (Hải quân: Seaman, Không quân: Airman)' }
    ];


    const UNITS_DATA = [
      // Strategic & General Departments (VN)
      { group: 'strategic', vi: 'Quân ủy Trung ương', en: 'Central Military Commission (CMC)', cmd: 'Cơ quan lãnh đạo quân sự cao nhất', note: 'Hoạch định đường lối quân sự, quốc phòng' },
      { group: 'strategic', vi: 'Bộ Quốc phòng', en: 'Ministry of National Defence (MND / MOD)', cmd: 'Bộ trưởng (Đại tướng)', note: 'Cơ quan quản lý nhà nước về quốc phòng' },
      { group: 'strategic', vi: 'Bộ Tổng Tham mưu', en: 'General Staff (GS)', cmd: 'Tổng Tham mưu trưởng (Thượng tướng/Đại tướng)', note: 'Cơ quan chỉ huy tác chiến cao nhất của QĐND VN' },
      { group: 'strategic', vi: 'Tổng cục Chính trị', en: 'General Political Department (GPD)', cmd: 'Chủ nhiệm Tổng cục Chính trị', note: 'Phụ trách công tác Đảng, công tác chính trị' },
      { group: 'strategic', vi: 'Tổng cục Công nghiệp Quốc phòng', en: 'General Department of Defence Industry (GDDI)', cmd: 'Chủ nhiệm Tổng cục (Trung tướng)', note: 'Quản lý các nhà máy Z, viện nghiên cứu, đóng tàu quốc phòng' },
      { group: 'strategic', vi: 'Tổng cục Hậu cần – Kỹ thuật', en: 'General Department of Logistics and Engineering', cmd: 'Chủ nhiệm Tổng cục (Trung tướng)', note: 'Bảo đảm hậu cần, vũ khí trang bị kỹ thuật toàn quân' },
      { group: 'strategic', vi: 'Quân khu (VD: Quân khu 1–9)', en: 'Military Region (MR)', cmd: 'Tư lệnh Quân khu (Trung tướng)', note: 'Tổ chức phòng thủ theo vùng địa lý chiến lược' },

      // Army Tactical Echelons (VN <-> NATO/US)
      { group: 'army', vi: 'Quân đoàn', en: 'Army Corps (US/NATO: Corps)', cmd: 'Trung tướng / Thiếu tướng • 20.000–45.000 quân', note: 'Gồm nhiều sư đoàn chủ lực cơ động' },
      { group: 'army', vi: 'Sư đoàn', en: 'Division', cmd: 'Thiếu tướng / Đại tá • 10.000–15.000 quân', note: 'Đơn vị binh chủng hợp thành tác chiến độc lập' },
      { group: 'army', vi: 'Lữ đoàn', en: 'Brigade', cmd: 'Đại tá / Chuẩn tướng (US/NATO) • 3.000–5.000 quân', note: 'Gồm 3–5 tiểu đoàn + đơn vị bảo đảm' },
      { group: 'army', vi: 'Trung đoàn', en: 'Regiment', cmd: 'Thượng tá / Đại tá • 1.500–3.000 quân', note: 'Đơn vị chiến thuật cơ bản của sư đoàn' },
      { group: 'army', vi: 'Tiểu đoàn', en: 'Battalion', cmd: 'Trung tá / Thiếu tá • 300–1.000 quân', note: 'Gồm 3–5 đại đội' },
      { group: 'army', vi: 'Đại đội / Khẩu đội pháo', en: 'Company / Battery (Artillery) / Troop (Cavalry)', cmd: 'Đại úy / Thượng úy • 80–150 quân', note: 'Pháo binh gọi là Battery, Tăng/Trinh sát phương Tây gọi là Troop' },
      { group: 'army', vi: 'Trung đội', en: 'Platoon', cmd: 'Trung úy / Thiếu úy • 25–40 quân', note: 'Gồm 3–4 tiểu đội' },
      { group: 'army', vi: 'Tiểu đội', en: 'Squad (US) / Section (UK/Commonwealth)', cmd: 'Trung sĩ / Hạ sĩ • 8–12 quân', note: 'Đơn vị chiến thuật nhỏ nhất trong lục quân' },

      // Navy, Air Force & Joint Commands
      { group: 'navy_air', vi: 'Quân chủng Hải quân / Vùng Hải quân', en: 'Navy / Naval Region (Foreign: Fleet)', cmd: 'Phó Đô đốc / Chuẩn Đô đốc', note: 'Hải quân Mỹ/Nga tổ chức theo Hạm đội (Fleet)' },
      { group: 'navy_air', vi: 'Hải đoàn / Hải đội', en: 'Naval Flotilla / Naval Squadron', cmd: 'Đại tá / Thượng tá Hải quân', note: 'Gồm biên đội tàu mặt nước, tàu ngầm hoặc tàu tuần tra' },
      { group: 'navy_air', vi: 'Quân chủng Phòng không – Không quân', en: 'Air Defence – Air Force (ADAF)', cmd: 'Trung tướng Tư lệnh', note: 'Kết hợp cả phòng không mặt đất và không quân' },
      { group: 'navy_air', vi: 'Sư đoàn Không quân / Không đoàn (Nước ngoài)', en: 'Air Division (VN) / Air Wing (US/NATO)', cmd: 'Đại tá / Chuẩn tướng', note: 'Air Wing của Mỹ/NATO tương đương cấp Lữ đoàn/Sư đoàn không quân' },
      { group: 'navy_air', vi: 'Phi đội bay', en: 'Flying Squadron', cmd: 'Trung tá / Thiếu tá Phi công', note: 'Đơn vị tác chiến bay cơ bản (12–24 máy bay)' },
      { group: 'navy_air', vi: 'Bộ Tư lệnh Liên quân / Tác chiến (Quốc tế)', en: 'Joint Command / Combatant Command (COCOM)', cmd: 'Đại tướng 4 sao (4-star General/Admiral)', note: 'Mô hình chỉ huy đa quân chủng của Mỹ & NATO (VD: INDOPACOM)' }
    ];

    const ACRONYMS_DATA = [
      { code: 'UAV / UAS', full: 'Unmanned Aerial Vehicle / System', vi: 'Máy bay / Hệ thống bay không người lái' },
      { code: 'UUV', full: 'Unmanned Underwater Vehicle', vi: 'Phương tiện ngầm không người lái' },
      { code: 'C4ISR', full: 'Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance', vi: 'Chỉ huy, Kiểm soát, Thông tin, Máy tính, Tình báo, Giám sát & Trinh sát' },
      { code: 'EW / ECM', full: 'Electronic Warfare / Electronic Countermeasure', vi: 'Tác chiến điện tử / Đối kháng điện tử' },
      { code: 'SAM', full: 'Surface-to-Air Missile', vi: 'Tên lửa đất đối không (phòng không)' },
      { code: 'EO/IR', full: 'Electro-Optical / Infrared', vi: 'Quang điện tử / Hồng ngoại (cảm biến mục tiêu)' },
      { code: 'IFF', full: 'Identification Friend or Foe', vi: 'Hệ thống nhận diện địch – ta' },
      { code: 'MBT', full: 'Main Battle Tank', vi: 'Xe tăng chiến đấu chủ lực' },
      { code: 'MLRS', full: 'Multiple Launch Rocket System', vi: 'Hệ thống pháo phản lực phóng loạt' },
      { code: 'ASW', full: 'Anti-Submarine Warfare', vi: 'Tác chiến chống ngầm' },
      { code: 'BVR', full: 'Beyond-Visual-Range', vi: 'Ngoài tầm nhìn (thường chỉ tên lửa không đối không)' },
      { code: 'BMS', full: 'Battlefield Management System', vi: 'Hệ thống quản lý chiến trường số' },
      { code: 'CBRN', full: 'Chemical, Biological, Radiological, and Nuclear', vi: 'Phòng hóa (Hóa học, Sinh học, Phóng xạ, Hạt nhân)' },
      { code: 'HADR', full: 'Humanitarian Assistance and Disaster Relief', vi: 'Hỗ trợ nhân đạo & Cứu trợ thiên tai' },
      { code: 'NVG', full: 'Night-Vision Goggle', vi: 'Kính nhìn đêm' },
      { code: 'MoU', full: 'Memorandum of Understanding', vi: 'Bản ghi nhớ hợp tác' },
      { code: 'LoI', full: 'Letter of Intent', vi: 'Thư bày tỏ ý định hợp tác' },
      { code: 'EUC', full: 'End-User Certificate', vi: 'Giấy chứng nhận người sử dụng cuối cùng' },
      { code: 'MRO', full: 'Maintenance, Repair, and Overhaul', vi: 'Bảo dưỡng, sửa chữa và đại tu' },
      { code: 'R&D', full: 'Research and Development', vi: 'Nghiên cứu và phát triển' },
      { code: 'B2B', full: 'Business-to-Business', vi: 'Kết nối giao thương giữa các doanh nghiệp' },
      { code: 'VPA', full: 'Vietnam People’s Army', vi: 'Quân đội Nhân dân Việt Nam' },
      { code: 'MOD / MND', full: 'Ministry of National Defence', vi: 'Bộ Quốc phòng' },
      { code: 'APC / IFV', full: 'Armoured Personnel Carrier / Infantry Fighting Vehicle', vi: 'Xe thiết giáp chở quân / Xe chiến đấu bộ binh' },
      { code: 'CMC', full: 'Central Military Commission', vi: 'Quân ủy Trung ương' },
      { code: 'GPD', full: 'General Political Department', vi: 'Tổng cục Chính trị QĐND Việt Nam' },
      { code: 'GDDI', full: 'General Department of Defence Industry', vi: 'Tổng cục Công nghiệp Quốc phòng' },
      { code: 'CGS', full: 'Chief of the General Staff', vi: 'Tổng Tham mưu trưởng' },
      { code: 'NCO', full: 'Non-Commissioned Officer', vi: 'Hạ sĩ quan (Hạ sĩ, Trung sĩ, Thượng sĩ)' },
      { code: 'CO', full: 'Commanding Officer', vi: 'Sĩ quan Chỉ huy trưởng đơn vị' },
      { code: 'HQ', full: 'Headquarters', vi: 'Sở chỉ huy / Bộ Tư lệnh' },
      { code: 'MR', full: 'Military Region', vi: 'Quân khu' },
      { code: 'CEP', full: 'Circular Error Probable', vi: 'Bán kính lệch vòng tròn (độ chính xác vũ khí)' },
      { code: 'FAT', full: 'Factory Acceptance Test', vi: 'Nghiệm thu tại nhà máy sản xuất' },
      { code: 'SAT', full: 'Site Acceptance Test', vi: 'Nghiệm thu tại hiện trường / đơn vị' },
      { code: 'ILS', full: 'Integrated Logistics Support', vi: 'Bảo đảm hậu cần kỹ thuật tích hợp' },
      { code: 'RFI / RFP', full: 'Request for Information / Request for Proposal', vi: 'Thư yêu cầu thông tin / Hồ sơ mời thầu' },
      { code: 'MTBF', full: 'Mean Time Between Failures', vi: 'Thời gian trung bình giữa hai lần hỏng hóc' },
      { code: 'RCS', full: 'Radar Cross-Section', vi: 'Diện tích phản xạ radar (chỉ số tàng hình)' },
      { code: 'CBM', full: 'Confidence-Building Measure', vi: 'Biện pháp xây dựng lòng tin quốc tế' },
      { code: 'ADMM', full: 'ASEAN Defence Ministers’ Meeting', vi: 'Hội nghị Bộ trưởng Quốc phòng ASEAN' },
      { code: 'UNCLOS', full: 'United Nations Convention on the Law of the Sea', vi: 'Công ước Liên Hợp Quốc về Luật Biển 1982' },
      { code: 'APS', full: 'Active Protection System', vi: 'Hệ thống phòng vệ chủ động trên xe tăng/thiết giáp' },
      { code: 'MRAP', full: 'Mine-Resistant Ambush Protected', vi: 'Xe bọc thép kháng mìn chống phục kích' },
      { code: 'PGM', full: 'Precision-Guided Munition', vi: 'Đạn dược dẫn đường chính xác' },
      { code: 'AEW&C', full: 'Airborne Early Warning and Control', vi: 'Máy bay cảnh báo sớm và chỉ huy trên không' },
      { code: 'OPV', full: 'Offshore Patrol Vessel', vi: 'Tàu tuần tra xa bờ' },
      { code: 'VIP', full: 'Very Important Person', vi: 'Khách quan trọng / Đoàn đại biểu cấp cao' },
      { code: 'QR', full: 'Quick Response (Code)', vi: 'Mã QR đăng ký / check-in tham quan' },
      { code: 'ATM', full: 'Automated Teller Machine', vi: 'Máy rút tiền tự động' },
      { code: 'UN', full: 'United Nations', vi: 'Liên Hợp Quốc (gìn giữ hòa bình)' },
      { code: 'ASEAN', full: 'Association of Southeast Asian Nations', vi: 'Hiệp hội các quốc gia Đông Nam Á' },
      { code: 'C-UAS', full: 'Counter-Unmanned Aircraft System', vi: 'Hệ thống phòng chống phương tiện bay không người lái (chống UAV)' },
      { code: 'USV', full: 'Unmanned Surface Vessel', vi: 'Xuồng / Phương tiện mặt nước không người lái' },
      { code: 'ATA', full: 'Admission Temporaire / Temporary Admission (ATA Carnet)', vi: 'Sổ tạm quản hàng hóa tạm nhập – tái xuất trưng bày triển lãm' },
      { code: 'FPV', full: 'First-Person View (Drone)', vi: 'Thiết bị bay không người lái điều khiển góc nhìn thứ nhất' },

    ];

    const QUIZ_DATA = [
      { q: 'Chủ đề tiếng Anh chính thức của Triển lãm Quốc phòng quốc tế Việt Nam 2026 là gì?', options: ['Peace, Friendship, Cooperation for Mutual Development', 'Modern Weapons for Global Defence Trade', 'Security, Innovation and Military Alliance', 'Strength, Technology and Regional Peace'], ans: 0, exp: 'Chủ đề chính thức là “Peace, Friendship, Cooperation for Mutual Development” (Hòa bình, Hữu nghị, Hợp tác cùng phát triển).' },
      { q: 'Thuật ngữ tiếng Anh nào dùng để chỉ “Pháo tự hành” (như mẫu PTH-01)?', options: ['Armoured personnel carrier', 'Self-propelled howitzer', 'Loitering munition', 'Coastal defense missile'], ans: 1, exp: 'Self-propelled howitzer là pháo tự hành; APC là xe thiết giáp chở quân.' },
      { q: 'Tại khu trưng bày, một vị khách hỏi thông số mã hóa thuộc diện bảo mật. Cách trả lời chuyên nghiệp nhất là gì?', options: ['I think it is around 100 km, maybe more.', 'No comment! Go ask someone else.', 'That specific parameter is classified, so I cannot disclose it, but I can share our unclassified specifications.', 'Everything here is open source, let me check online.'], ans: 2, exp: 'Từ chối lịch sự bằng cụm “classified” và chuyển hướng sang tài liệu công khai (“unclassified specifications”) là chuẩn mực đối ngoại quốc phòng.' },
      { q: 'Từ viết tắt “UUV” xuất hiện trong danh mục khí tài trưng bày 2026 có nghĩa là gì?', options: ['Universal Utility Vehicle', 'Unmanned Underwater Vehicle', 'Ultra-light Urban Vehicle', 'Unified Unmanned Vessel'], ans: 1, exp: 'UUV là Unmanned Underwater Vehicle — Phương tiện ngầm không người lái.' },
      { q: 'Khi đón tiếp một vị Trung tướng nước ngoài (Lieutenant General), bạn nên xưng hô trực tiếp thế nào?', options: ['Hey Lieutenant!', 'General [Họ] hoặc Sir/Ma’am', 'Mr. Officer', 'Commander [Tên riêng]'], ans: 1, exp: 'Tất cả các cấp Tướng trong giao tiếp trực tiếp đều gọi lịch sự là “General [Họ]” hoặc “Sir/Ma’am”. Không gọi là “Lieutenant” (cấp Úy).' },
      { q: 'Thuật ngữ “Dual-use technology” mang ý nghĩa gì trong công nghiệp quốc phòng?', options: ['Công nghệ chỉ dùng được hai lần', 'Công nghệ sử dụng hai loại nhiên liệu', 'Công nghệ lưỡng dụng phục vụ cả quốc phòng và dân sự', 'Công nghệ do hai quốc gia đồng sở hữu'], ans: 2, exp: 'Dual-use technology là công nghệ lưỡng dụng (ứng dụng cả trong quân sự lẫn kinh tế, cứu hộ, viễn thông dân sự).' },
      { q: 'Động từ tiếng Anh nào trang trọng và chuẩn xác nhất khi nói “hộ tống đoàn đại biểu tới phòng VIP”?', options: ['Take the delegation', 'Pull the delegation', 'Escort the delegation', 'Push the delegation'], ans: 2, exp: '“Escort” (hộ tống, dẫn đoàn) là động từ tiêu chuẩn trong nghi thức ngoại giao và lễ tân quân sự.' },
      { q: 'Trong đàm phán B2B, dịch vụ “MRO” viết tắt của cụm từ nào?', options: ['Military Radar Operations', 'Maintenance, Repair, and Overhaul', 'Maritime Rescue Organization', 'Modern Rocket Ordnance'], ans: 1, exp: 'MRO là Maintenance, Repair, and Overhaul (Bảo dưỡng, sửa chữa và đại tu) — yếu tố sống còn trong hợp đồng khí tài.' },
      { q: 'Khu vực trưng bày máy bay và xe thiết giáp ngoài trời không hoạt động di chuyển gọi là gì?', options: ['Live demonstration', 'Static display', 'Courtesy call', 'Offset agreement'], ans: 1, exp: 'Static display là khu trưng bày tĩnh; Live demonstration là trình diễn/thao diễn thực tế.' },
      { q: 'Thuật ngữ “Tùy viên Quốc phòng” trong tiếng Anh viết là gì?', options: ['Liaison Officer', 'Head of Delegation', 'Defence Attaché', 'Guard of Honor'], ans: 2, exp: 'Defence Attaché (hoặc Defence Attaché theo Anh-Mỹ) là Tùy viên Quốc phòng.' },
      { q: 'Nếu chưa nghe rõ một con số kỹ thuật khi đang phiên dịch song phương, bạn nên làm gì?', options: ['Tự ước lượng con số gần đúng để không làm gián đoạn', 'Bỏ qua con số đó không dịch', 'Lịch sự đề nghị diễn giả nhắc lại (“Could you kindly repeat that technical figure?”)', 'Chờ đến cuối buổi họp mới hỏi lại'], ans: 2, exp: 'Trong phiên dịch quốc phòng và kỹ thuật, độ chính xác là tối thượng; xin nhắc lại lịch sự luôn được tôn trọng.' },
      { q: 'Hệ thống “IFF” trên máy bay và radar phòng không dùng để làm gì?', options: ['Gây nhiễu vệ tinh GPS', 'Nhận diện địch – ta (Identification Friend or Foe)', 'Phóng đạn tuần kích tự động', 'Đo tốc độ gió trên đường băng'], ans: 1, exp: 'IFF là viết tắt của Identification Friend or Foe — hệ thống nhận diện địch – ta.' },
      { q: 'Trong hợp tác xuất khẩu quốc phòng, “EUC” (End-User Certificate) là giấy tờ gì?', options: ['Giấy phép trưng bày tại gian hàng', 'Giấy chứng nhận người sử dụng cuối cùng', 'Chứng chỉ an toàn bay của phi công', 'Hợp đồng bảo dưỡng định kỳ'], ans: 1, exp: 'End-User Certificate (EUC) là chứng nhận người sử dụng cuối cùng bắt buộc trong kiểm soát xuất khẩu quốc phòng.' },
      { q: 'Cụm từ “CBRN defence” thuộc chuyên ngành quân sự nào?', options: ['Tác chiến không gian mạng', 'Phòng hóa (Hóa học, Sinh học, Phóng xạ, Hạt nhân)', 'Phòng không tầm thấp', 'Tác chiến chống ngầm'], ans: 1, exp: 'CBRN là viết tắt của Chemical, Biological, Radiological, and Nuclear.' },
      { q: '“Interoperability” trong hợp tác quân sự đa quốc gia mang nghĩa gì?', options: ['Khả năng tương tác, đồng bộ giữa các hệ thống và lực lượng', 'Khả năng tự động sửa chữa khi hư hỏng', 'Chi phí vận hành thấp', 'Tốc độ di chuyển trên đường nhựa'], ans: 0, exp: 'Interoperability là khả năng kết nối, chia sẻ dữ liệu và phối hợp tác chiến đồng bộ giữa các hệ thống.' },
      { q: 'Hoạt động “HADR” mà quân đội các nước thường phối hợp diễn tập là gì?', options: ['Hỗ trợ nhân đạo và cứu trợ thiên tai', 'Trinh sát vệ tinh tầm cao', 'Rà phá thủy lôi trên biển', 'Thử nghiệm tên lửa hành trình'], ans: 0, exp: 'HADR = Humanitarian Assistance and Disaster Relief (Hỗ trợ nhân đạo và cứu trợ thiên tai).' },
      { q: 'Khi phóng viên nước ngoài yêu cầu một cuộc phỏng vấn chính thức được phép trích dẫn, thuật ngữ tiếng Anh là gì?', options: ['Off-the-grid interview', 'On-the-record interview', 'Static interview', 'Closed-circuit interview'], ans: 1, exp: '“On-the-record” chỉ phát ngôn chính thức được phép trích dẫn công khai.' },
      { q: 'Trong Hải quân quốc tế, chức danh “Commander” tương đương cấp bậc nào?', options: ['Thiếu úy', 'Đại úy', 'Trung tá Hải quân', 'Đô đốc'], ans: 2, exp: 'Commander trong Hải quân Mỹ/Anh/NATO tương đương cấp Trung tá Hải quân (OF-4).' },
      { q: 'Tên tiếng Anh chính thức của “Tổng cục Công nghiệp Quốc phòng” Việt Nam là gì?', options: ['General Department of Defence Industry (GDDI)', 'National Weapon Factory Office', 'Ministry of Military Trade', 'Central Artillery Command'], ans: 0, exp: 'Tổng cục Công nghiệp Quốc phòng dịch chuẩn là General Department of Defence Industry (GDDI).' },
      { q: 'Chức danh “Chính ủy” trong Quân đội Nhân dân Việt Nam dịch sang tiếng Anh là gì?', options: ['Military Mayor', 'Political Commissar', 'Chief Diplomat', 'Defence Attaché'], ans: 1, exp: 'Political Commissar là cách dịch chính thức của chức danh Chính ủy / Chính trị viên.' },
      { q: 'Trong pháo binh quốc tế, đơn vị cấp tương đương Đại đội (Company) được gọi là gì?', options: ['Squad', 'Battery', 'Fleet', 'Wing'], ans: 1, exp: 'Trong pháo binh và tên lửa phòng không, đơn vị cấp đại đội gọi là Battery (Khẩu đội / Đại đội pháo).' },
      { q: 'Đội ngũ “Non-commissioned Officers (NCOs)” chỉ nhóm quân nhân nào?', options: ['Các sĩ quan cấp Tướng', 'Hạ sĩ quan (Hạ sĩ, Trung sĩ, Thượng sĩ)', 'Tùy viên quốc phòng dân sự', 'Sinh viên thực tập'], ans: 1, exp: 'NCO (Non-commissioned Officer) là Hạ sĩ quan — lực lượng nòng cốt chỉ huy cấp tiểu đội, khẩu đội.' },
      { q: 'Đơn vị “Brigade” trong cơ cấu Lục quân tương đương cấp nào của Việt Nam?', options: ['Tiểu đoàn', 'Trung đội', 'Lữ đoàn', 'Quân khu'], ans: 2, exp: 'Brigade là Lữ đoàn (thường gồm 3.000–5.000 quân, nằm giữa Trung đoàn và Sư đoàn).' },
      { q: 'Trong Không quân phương Tây (Mỹ/NATO), “Air Wing” tương đương cấp đơn vị nào?', options: ['Tiểu đội cảnh vệ', 'Không đoàn / Sư đoàn Không quân', 'Tàu tuần tra ven bờ', 'Bệnh viện dã chiến'], ans: 1, exp: 'Air Wing là Không đoàn (gồm nhiều phi đội bay và phi đội bảo đảm kỹ thuật).' },
      { q: 'Khi nói về hợp tác quốc phòng của Việt Nam theo chính sách “4 Không”, nên dùng cụm từ tiếng Anh nào?', options: ['Military alliance', 'Defence partnership and cooperation', 'Military bloc', 'Arms coalition'], ans: 1, exp: 'Chính sách “4 Không” khẳng định không tham gia liên minh quân sự (“no military alliances”); hãy dùng “defence partnership and cooperation”.' },
      { q: 'Chỉ số “CEP” (Circular Error Probable) trong thông số tên lửa hoặc bom lượn đo yếu tố gì?', options: ['Độ chính xác / Bán kính lệch vòng tròn mục tiêu', 'Trọng lượng đầu đạn', 'Tốc độ bay siêu âm', 'Chi phí bảo dưỡng hằng năm'], ans: 0, exp: 'CEP càng nhỏ thì độ chính xác đánh trúng mục tiêu càng cao.' },
      { q: 'Trong hợp đồng mua sắm quốc phòng, “FAT” và “SAT” lần lượt là gì?', options: ['Nghiệm thu tại nhà máy và Nghiệm thu tại hiện trường', 'Thuế xuất khẩu và Thuế nhập khẩu', 'Bay thử ban ngày và Bay thử ban đêm', 'Pháo kéo và Pháo tự hành'], ans: 0, exp: 'FAT = Factory Acceptance Test (Nghiệm thu tại nhà máy), SAT = Site Acceptance Test (Nghiệm thu tại hiện trường).' },
      { q: 'Đơn vị tốc độ “30 knots” của tàu hộ vệ Hải quân tương đương khoảng bao nhiêu km/h?', options: ['Khoảng 30 km/h', 'Khoảng 55,5 km/h', 'Khoảng 90 km/h', 'Khoảng 120 km/h'], ans: 1, exp: '1 hải lý/giờ (knot) = 1,852 km/h → 30 knots ≈ 55,56 km/h.' },
      { q: 'Trong bảng chữ cái phiên âm quân sự NATO, mã gian hàng “B12” đọc chuẩn qua bộ đàm như thế nào?', options: ['Boy One Two', 'Bravo One Two', 'Beta Twelve', 'Baker One Two'], ans: 1, exp: 'Chuẩn NATO Phonetic Alphabet: B = Bravo, đọc từng chữ số riêng rẽ One Two.' },
      { q: 'Cụm từ tiếng Anh trang trọng nhất để mở lời nâng ly tại tiệc chiêu đãi Bộ Quốc phòng là gì?', options: ['Let’s drink to our army!', 'May I propose a toast to the enduring friendship between our two armed forces.', 'Bottoms up, everyone!', 'Please finish your glasses now.'], ans: 1, exp: '“May I propose a toast to...” là nghi thức nâng ly chuẩn mực trong ngoại giao quốc phòng.' },
      { q: 'Tại Quầy Thông tin, khi một phụ huynh hốt hoảng báo lạc con nhỏ 6 tuổi, hành động đầu tiên đúng quy trình là gì?', options: ['Bảo phụ huynh chạy quay lại khu trưng bày tự tìm', 'Giữ phụ huynh đứng yên tại quầy, ghi nhận đặc điểm bé và báo ngay bộ đàm An ninh + 2 Quầy Thông tin còn lại', 'Hẹn phụ huynh cuối ngày quay lại xem', 'Gọi điện cho báo chí thông báo'], ans: 1, exp: 'Giữ phụ huynh ở yên một điểm cố định tại quầy giúp tránh đi lệch hướng khi Tổ An ninh và 2 quầy kia tìm thấy bé.' },
      { q: 'Khi phóng viên nước ngoài tiến tới Quầy Thông tin giơ máy quay xin phỏng vấn cảm nghĩ cá nhân, bạn nên xử lý thế nào?', options: ['Trả lời thoải mái theo ý kiến cá nhân', 'Từ chối lịch sự vì không thuộc thẩm quyền phát ngôn và chỉ dẫn tới Trung tâm Báo chí (Media Centre)', 'Bỏ đi không nói gì', 'Cung cấp thông số mật để phóng viên ghi hình'], ans: 1, exp: 'Nhân viên Quầy Thông tin luôn tuân thủ kỷ luật phát ngôn và chuyển yêu cầu phỏng vấn về Media Centre / Press Officer.' },
      { q: 'Khách thương mại quốc tế báo mất Hộ chiếu gần khu trưng bày ngoài trời. Quầy Thông tin cần ưu tiên báo ngay đầu mối nào?', options: ['Khu ẩm thực ngoài trời', 'Tổ An ninh + 2 Quầy Thông tin còn lại (và Tiểu ban Lễ tân nếu là đoàn VIP)', 'Quầy bán đồ lưu niệm', 'Chờ đến sáng hôm sau mới xử lý'], ans: 1, exp: 'Mất hộ chiếu là sự cố ưu tiên cao cần rà soát ngay các chốt an ninh và đồng bộ cả 3 quầy.' },
      { q: 'Để khách quốc tế không nhầm lẫn giờ mở cửa hay giờ bay chào mừng, Quầy Thông tin nên báo giờ theo định dạng nào?', options: ['Giờ 24h chuẩn quốc tế (VD: 09:30, 14:00, 17:00)', 'Chỉ nói “buổi sáng” hoặc “buổi chiều”', 'Nói theo múi giờ nước khách', 'Không cần báo giờ cụ thể'], ans: 0, exp: 'Giờ 24h (09:30, 14:00) là chuẩn quân sự và sự kiện quốc tế giúp loại bỏ nhầm lẫn AM/PM.' },
      { q: 'Từ viết tắt “PGM” trong tác chiến không quân hiện đại có nghĩa là gì?', options: ['Public Gate Map', 'Precision-Guided Munition (Đạn dẫn đường chính xác)', 'Patrol Ground Missile', 'Primary General Ministry'], ans: 1, exp: 'PGM = Precision-Guided Munition (Đạn dược dẫn đường chính xác như bom lượn, tên lửa dẫn đường laser).' },
      { q: 'Hệ thống “APS” (Active Protection System) trên xe tăng hiện đại có chức năng gì?', options: ['Tự động bơm lốp xe', 'Phòng vệ chủ động đánh chặn tên lửa/đạn chống tăng trước khi chạm xe', 'Phát Wi-Fi cho bộ binh', 'Chỉ đường bằng GPS'], ans: 1, exp: 'APS (Active Protection System) là hệ thống phòng vệ chủ động giúp đánh chặn đạn chống tăng bay tới.' },
      { q: 'Theo thông báo chính thức của Ban Tổ chức, ngày bế mạc 13/12/2026 Triển lãm mở cửa đón nhân dân trong khung giờ nào?', options: ['09:00 – 17:00', '09:00 – 15:00', '08:00 – 18:00', '10:00 – 16:00'], ans: 1, exp: 'Ngày 12/12 mở cửa 09:00–17:00, nhưng ngày bế mạc 13/12 kết thúc sớm lúc 15:00 (riêng ngày khai mạc 10/12 mở cửa từ 10:00 sau Lễ Khai mạc).' },
      { q: 'Trong logistics triển lãm quốc tế, chứng từ “ATA Carnet” được doanh nghiệp nước ngoài dùng cho mục đích gì?', options: ['Cấp thẻ phóng viên báo chí', 'Tạm nhập – tái xuất thiết bị trưng bày miễn thuế hải quan', 'Đăng ký bay trình diễn trực thăng', 'Chứng nhận quyền sở hữu trí tuệ'], ans: 1, exp: 'ATA Carnet là sổ tạm quản hải quan quốc tế giúp tạm nhập – tái xuất khí tài, mô hình và thiết bị trưng bày thuận lợi.' },
      { q: 'Thuật ngữ “C-UAS” và “RF jammer” thường xuất hiện cùng nhau trong chuyên ngành nào tại Triển lãm 2026?', options: ['Hậu cần quân nhu', 'Phòng chống UAV / tác chiến điện tử chống flycam', 'Đóng tàu vận tải dân sự', 'Nghi thức lễ tân ngoại giao'], ans: 1, exp: 'C-UAS (Counter-Unmanned Aircraft System) là hệ thống phòng chống UAV, trong đó RF jammer là thiết bị gây nhiễu sóng điều khiển.' },
      { q: 'Khi giới thiệu một vị Đại tá QĐND Việt Nam với đoàn sĩ quan NATO/Mỹ, cách dịch chuẩn xác để không nhầm với cấp Thượng tá là gì?', options: ['Junior Colonel', 'Senior Colonel (VPA — tương đương OF-5 Colonel NATO)', 'Captain Colonel', 'Brigadier Major'], ans: 1, exp: 'Do QĐND Việt Nam có 4 cấp tá (Thiếu tá, Trung tá, Thượng tá, Đại tá), Đại tá dịch chuẩn là Senior Colonel, còn Thượng tá là Senior Lieutenant Colonel.' },

    ];


    /* ===================== GENERAL INFORMATION DESK DATA ===================== */
    const INFODESK_CHECKLIST = [
      { id: 'chk1', text: 'Bản đồ triển lãm khổ lớn + sơ đồ giấy phát khách + bút dạ quang khoanh vị trí' },
      { id: 'chk2', text: 'Danh bạ nóng / Kênh bộ đàm kết nối 3 Quầy TT – An ninh – Y tế – Lễ tân – Báo chí' },
      { id: 'chk3', text: 'Kiểm tra lịch trình trong ngày (giờ Khai mạc, bay chào mừng, đặc công, hội thảo)' },
      { id: 'chk4', text: 'Sổ ghi nhận Đồ thất lạc (Lost & Found) & Biểu mẫu báo lạc người thân' },
      { id: 'chk5', text: 'Đã đi khảo sát thực tế hướng từ quầy tới Nhà vệ sinh, Trạm Y tế, Bến xe trung chuyển' },
      { id: 'chk6', text: 'Sạc dự phòng, bộ đàm đầy pin, thẻ nhân sự BTC đeo đúng quy định' },
      { id: 'chk7', text: 'Cập nhật thông báo mới nhất về phân luồng giao thông & đăng ký Viettel Tammi' },
      { id: 'chk8', text: 'Nước uống đóng chai dự phòng tại quầy cho khách mệt/say nắng chờ Tổ Y tế' },
      { id: 'chk9', text: 'Danh sách điểm ăn uống (Food Court, Halal, đồ chay), phòng cầu nguyện & phòng mẹ và bé' },
      { id: 'chk10', text: 'Sơ đồ điểm đón Taxi / Grab / Xe buýt công cộng ngoài cổng sau khi phân luồng giao thông' },
      { id: 'chk11', text: 'Danh bạ khẩn cấp: Cấp cứu 115, Công an 113, PCCC 114 & Đường dây nóng hỗ trợ Lãnh sự' },
      { id: 'chk12', text: 'Chuẩn bị sẵn giấy nháp + bút tại quầy để khách viết tên công ty/mã gian hàng khi khu vực ồn' }
    ];

    const INFODESK_CATS = [
      { id: 'all', label: 'Tất cả (66)' },
      { id: 'dir', label: 'Chào & Chỉ đường (11)' },
      { id: 'pass', label: 'Thẻ & Đăng ký (9)' },
      { id: 'sched', label: 'Lịch trình & Xe buýt (9)' },
      { id: 'lost', label: 'Mất đồ & Lạc người (6)' },
      { id: 'med', label: 'Y tế & An toàn (6)' },
      { id: 'vip', label: 'VIP & Báo chí (5)' },
      { id: 'comp', label: 'Phàn nàn & Quy định (7)' },
      { id: 'hosp', label: 'Ẩm thực, Wi-Fi & Hà Nội (6)' },
      { id: 'radio', label: 'Điều phối 3 Quầy & Đóng cửa (4)' },
      { id: 'rescue', label: 'Câu “Cứu cánh” (3)' }
    ];

    const INFODESK_PHRASES = [
      // Chào & Chỉ đường (5)
      { id: 'id1', cat: 'dir', en: 'Good morning! Welcome to Vietnam International Defence Expo 2026. How may I assist you today?', vi: 'Chào buổi sáng! Chào mừng quý khách đến với Triển lãm Quốc phòng quốc tế Việt Nam 2026. Tôi có thể hỗ trợ gì cho quý khách ạ?', tip: 'Mỉm cười, giao tiếp bằng mắt, đứng dậy khi tiếp đoàn khách.' },
      { id: 'id2', cat: 'dir', en: 'Booth B12 is in Indoor Hall A. Go straight ahead, turn left at the second aisle—let me circle it on this map for you.', vi: 'Gian hàng B12 nằm ở Nhà trưng bày A. Quý khách đi thẳng rồi rẽ trái ở lối thứ hai — để tôi khoanh tròn lên bản đồ này cho quý khách.', tip: 'Khoanh cả điểm “You are here” và điểm đến bằng bút dạ quang.' },
      { id: 'id3', cat: 'dir', en: 'The outdoor static display is just outside Exit 3, while the Vietnamese Cultural Zone is directly to your left.', vi: 'Khu trưng bày tĩnh ngoài trời ở ngay ngoài Cổng ra số 3, còn Không gian Văn hóa Việt Nam nằm ngay bên trái quý khách.', tip: 'Chỉ hướng bằng cả bàn tay mở thay vì một ngón tay.' },
      { id: 'id4', cat: 'dir', en: 'The nearest restrooms and complimentary drinking water station are right behind Hall B, about a two-minute walk.', vi: 'Nhà vệ sinh và điểm nước uống miễn phí gần nhất nằm ngay phía sau Nhà B, đi bộ khoảng 2 phút.', tip: 'Báo rõ thời gian đi bộ ước tính giúp khách yên tâm.' },
      { id: 'id5', cat: 'dir', en: 'You are currently at Information Desk 1 near Gate A. We also have Information Desks 2 and 3 inside the main hall and outdoor zone.', vi: 'Quý khách đang ở Quầy Thông tin số 1 gần Cổng A. Chúng tôi còn có Quầy số 2 và số 3 trong nhà trưng bày chính và khu ngoài trời.', tip: 'Giúp khách nhận diện hệ thống 3 quầy hỗ trợ xuyên suốt triển lãm.' },

      // Thẻ & Đăng ký (4)
      { id: 'id6', cat: 'pass', en: 'December 10 and 11 are reserved for official delegations and registered trade visitors. Public access is open on December 12 and 13.', vi: 'Ngày 10 và 11/12 dành riêng cho đoàn đại biểu chính thức và khách thương mại đã đăng ký. Ngày 12 và 13/12 mở cửa tự do cho nhân dân.', tip: 'Câu nói quan trọng nhất trong 2 ngày đầu triển lãm.' },
      { id: 'id7', cat: 'pass', en: 'If you haven’t collected your accreditation badge yet, please proceed to the Registration Counter at the main entrance with your passport or ID.', vi: 'Nếu quý khách chưa nhận thẻ đại biểu, vui lòng tới Quầy Đăng ký tại cổng chính kèm hộ chiếu hoặc CCCD.', tip: 'Nhắc khách mang sẵn giấy tờ tùy thân và email/mã QR xác nhận.' },
      { id: 'id8', cat: 'pass', en: 'For public entry on December 12 and 13, visitors can register easily via the official portal or the Viettel Tammi app.', vi: 'Để tham quan tự do ngày 12 và 13/12, khách có thể đăng ký dễ dàng qua cổng chính thức hoặc ứng dụng Viettel Tammi.', tip: 'Hướng dẫn rõ kênh đăng ký chính thức của BTC.' },
      { id: 'id9', cat: 'pass', en: 'If your badge is damaged or lost, please visit the Accreditation Helpdesk with your passport so our team can reissue it.', vi: 'Nếu thẻ của quý khách bị hỏng hoặc thất lạc, vui lòng tới Quầy Hỗ trợ Thẻ kèm hộ chiếu để bộ phận chuyên trách cấp lại.', tip: 'Nếu là thẻ VIP/Đoàn quân sự, báo ngay Tiểu ban Lễ tân.' },

      // Lịch trình & Xe trung chuyển (4)
      { id: 'id10', cat: 'sched', en: 'The opening flypast and special forces live demonstration start at 09:30 at the outdoor flight line. I recommend heading there 15 minutes early.', vi: 'Màn bay chào mừng và trình diễn đặc công bắt đầu lúc 09:30 tại khu đường băng ngoài trời. Quý khách nên ra trước 15 phút.', tip: 'Luôn dùng giờ 24h (09:30) và gợi ý ra sớm để có vị trí đẹp.' },
      { id: 'id11', cat: 'sched', en: 'Technical seminars take place in Conference Rooms 1 and 2 on the second floor. Here is today’s full schedule.', vi: 'Các hội thảo chuyên đề diễn ra tại Phòng họp số 1 và số 2 trên tầng hai. Đây là lịch trình chi tiết hôm nay ạ.', tip: 'Luôn để sẵn bản in lịch hội thảo từng ngày ngay trên mặt quầy.' },
      { id: 'id12', cat: 'sched', en: 'Our complimentary shuttle bus departs every 10 minutes from Exit 2 to the main parking area and traffic drop-off point.', vi: 'Xe buýt trung chuyển miễn phí khởi hành mỗi 10 phút từ Cổng ra số 2 ra bãi đỗ xe chính và điểm đón trả khách.', tip: 'Nắm chắc tên cổng đón xe trung chuyển để chỉ dẫn không nhầm lẫn.' },
      { id: 'id13', cat: 'sched', en: 'Due to high traffic volume right now, shuttle buses may experience a 10-minute delay. Thank you very much for your patience.', vi: 'Do lượng xe hiện tại khá đông, xe trung chuyển có thể chậm khoảng 10 phút. Rất cảm ơn quý khách đã thông cảm chờ đợi.', tip: 'Chủ động báo thời gian chờ ước tính giúp giảm bức xúc cho khách.' },

      // Mất đồ & Lạc người (4)
      { id: 'id14', cat: 'lost', en: 'Please don’t worry. Could you describe the missing item and where you last saw it? I will log it and alert our other two information desks right away.', vi: 'Xin quý khách đừng lo lắng. Quý khách có thể mô tả món đồ bị thất lạc và vị trí cuối cùng nhìn thấy không? Tôi sẽ ghi sổ và báo ngay 2 quầy thông tin còn lại.', tip: 'Ghi đầy đủ: Mô tả đồ + Vị trí + Họ tên + SĐT/Email khách.' },
      { id: 'id15', cat: 'lost', en: 'Since your passport is missing, I am contacting our Security Team immediately to assist you and check all checkpoints.', vi: 'Vì hộ chiếu của quý khách bị thất lạc, tôi sẽ liên hệ Tổ An ninh ngay lập tức để hỗ trợ và rà soát toàn bộ các chốt kiểm soát.', tip: 'Mất hộ chiếu hoặc thẻ VIP là tình huống ưu tiên cao — báo An ninh ngay.' },
      { id: 'id16', cat: 'lost', en: 'Please stay right here with me. Can you tell me your child’s name, age, and what they are wearing? Our security team is already searching.', vi: 'Xin anh/chị đứng yên ngay tại đây cùng tôi. Anh/chị cho biết tên, tuổi và trang phục của bé? Lực lượng an ninh đang tìm kiếm ngay rồi ạ.', tip: 'Giữ phụ huynh ở yên một chỗ tại quầy để tránh hai bên đi tìm lệch nhau.' },
      { id: 'id17', cat: 'lost', en: 'Good news—we have a matching item turned in at Information Desk 2! May I verify a quick detail before we arrange handover?', vi: 'Tin vui ạ — Quầy Thông tin số 2 vừa tiếp nhận món đồ trùng khớp! Tôi có thể xác minh nhanh một chi tiết trước khi bàn giao không?', tip: 'Luôn xác minh 1 đặc điểm nhận dạng (màu ốp, nội dung bên trong) trước khi trả đồ.' },

      // Y tế & Hỗ trợ đặc biệt (4)
      { id: 'id18', cat: 'med', en: 'Are you feeling unwell? Please take a seat right here in the shade—I am calling our First Aid team immediately.', vi: 'Quý khách thấy không khỏe phải không ạ? Mời quý khách ngồi nghỉ ngay tại đây trong bóng râm — tôi đang gọi Tổ Y tế tới ngay lập tức.', tip: 'Đưa nước mát, quạt nhẹ và không để đám đông vây quanh người mệt.' },
      { id: 'id19', cat: 'med', en: 'The First Aid station is located 50 meters to the right of Hall A, and an ambulance is on standby near Gate B.', vi: 'Trạm Y tế nằm cách Nhà A 50 mét về phía bên phải, và xe cứu thương luôn trực sẵn gần Cổng B.', tip: 'Thuộc vị trí trạm y tế gần quầy mình nhất.' },
      { id: 'id20', cat: 'med', en: 'We have wheelchair-accessible ramps at all main entrances, and our staff would be happy to assist your family.', vi: 'Tất cả lối vào chính đều có đường dốc dành cho xe lăn, và nhân viên chúng tôi rất sẵn lòng hỗ trợ gia đình quý khách.', tip: 'Ưu tiên hỗ trợ người cao tuổi, trẻ nhỏ và người khuyết tật.' },
      { id: 'id21', cat: 'med', en: 'If you need a quiet place to rest or charge your phone, there is a shaded seating lounge next to the Cultural Zone.', vi: 'Nếu quý khách cần nơi yên tĩnh nghỉ chân hoặc sạc điện thoại, có khu ghế nghỉ có mái che ngay cạnh Không gian Văn hóa.', tip: 'Rất hữu ích cho khách đi bộ nhiều giờ ngoài trời.' },

      // VIP & Báo chí (3)
      { id: 'id22', cat: 'vip', en: 'Good morning, General / Sir. Please allow me to contact our Protocol Liaison Desk so an escort officer can assist you right away.', vi: 'Chào buổi sáng, Thưa Tướng quân / Ngài. Xin phép để tôi liên hệ Bàn Lễ tân để sĩ quan liên lạc ra đón và hỗ trợ Ngài ngay lập tức.', tip: 'Không để sĩ quan cấp Tướng/Trưởng đoàn phải tự tìm phòng họp.' },
      { id: 'id23', cat: 'vip', en: 'For official press kits, media badges, and interview requests, please proceed to the Media Centre on the right side of the main hall.', vi: 'Để nhận bộ tài liệu báo chí, thẻ tác nghiệp và đăng ký phỏng vấn, mời anh/chị tới Trung tâm Báo chí ở phía phải nhà trưng bày chính.', tip: 'Chỉ dẫn phóng viên thẳng về Trung tâm Báo chí.' },
      { id: 'id24', cat: 'vip', en: 'As general information staff, I am not authorized to give on-camera interviews, but I can gladly connect you with our Press Officer.', vi: 'Là nhân viên thông tin chung, tôi không có thẩm quyền trả lời phỏng vấn ghi hình, nhưng tôi rất sẵn lòng kết nối anh/chị với Cán bộ Báo chí của BTC.', tip: 'Giữ đúng kỷ luật phát ngôn mà vẫn lịch sự, chuyên nghiệp.' },

      // Phàn nàn & Quy định (3)
      { id: 'id25', cat: 'comp', en: 'I completely understand your frustration, sir. Let me check the fastest way to help you resolve this with our registration team.', vi: 'Tôi hoàn toàn hiểu sự bất tiện của ông. Để tôi kiểm tra cách nhanh nhất giúp ông giải quyết việc này cùng bộ phận đăng ký.', tip: 'Công thức hạ nhiệt: Đồng cảm (Empathize) → Hành động giải pháp (Act).' },
      { id: 'id26', cat: 'comp', en: 'For everyone’s safety, large backpacks, drones, and sharp objects are not permitted inside the exhibition halls.', vi: 'Vì an toàn chung của mọi người, ba lô cỡ lớn, flycam cá nhân và vật sắc nhọn không được phép mang vào khu triển lãm.', tip: 'Nêu lý do “For everyone’s safety” giúp khách dễ chấp nhận quy định.' },
      { id: 'id27', cat: 'comp', en: 'I apologize for the inconvenience, but close-up photography is restricted in certain technical booths. Feel free to take photos in the outdoor static display.', vi: 'Rất tiếc vì sự bất tiện này, nhưng một số gian kỹ thuật hạn chế chụp cận cảnh. Quý khách có thể thoải mái chụp ảnh tại khu trưng bày ngoài trời.', tip: 'Luôn kèm phương án thay thế tích cực.' },

      // Câu “Cứu cánh” (3)
      { id: 'id28', cat: 'rescue', en: 'That is a great question. Give me just one moment to verify the exact detail with our Operations Centre so I can give you the most accurate answer.', vi: 'Đó là một câu hỏi rất hay. Xin chờ tôi một chút để xác minh thông tin chính xác với Trung tâm Điều hành nhằm trả lời quý khách chuẩn nhất.', tip: 'Câu “cứu cánh” số 1 khi gặp câu hỏi bất ngờ chưa có trong tay.' },
      { id: 'id29', cat: 'rescue', en: 'Excuse me, it is a bit noisy here—could you kindly speak a little slower or write down the company/booth name for me?', vi: 'Xin lỗi, khu vực này hơi ồn — quý khách có thể nói chậm hơn một chút hoặc viết giúp tôi tên công ty/số gian hàng được không ạ?', tip: 'Luôn để sẵn giấy nháp và bút trên bàn để khách viết tên/mã gian hàng khi ồn.' },
      { id: 'id30', cat: 'rescue', en: 'Is there anything else I can assist you with? We hope you have a wonderful experience at Vietnam International Defence Expo 2026!', vi: 'Tôi còn có thể hỗ trợ gì thêm cho quý khách không ạ? Chúc quý khách có trải nghiệm thật tuyệt vời tại Triển lãm Quốc phòng quốc tế Việt Nam 2026!', tip: 'Câu kết chuẩn tạo ấn tượng chuyên nghiệp, mến khách.' },
      // Extra Chỉ đường (4)
      { id: 'id31', cat: 'dir', en: 'The B2B Matchmaking Lounge is on the upper level of Hall A—just take the escalator right behind Information Desk 2.', vi: 'Khu Kết nối Giao thương B2B nằm ở tầng trên Nhà A — quý khách đi thang cuốn ngay phía sau Quầy Thông tin số 2.', tip: 'Khách doanh nghiệp rất hay hỏi đường tới khu B2B Lounge.' },
      { id: 'id32', cat: 'dir', en: 'The interactive defence zone with VR simulators and military-themed games is located right next to the Vietnamese Cultural Pavilion.', vi: 'Khu tương tác quốc phòng với mô phỏng VR và trò chơi quân sự nằm ngay cạnh Không gian Văn hóa Việt Nam.', tip: 'Điểm đến cực kỳ hút khách trẻ và gia đình trong ngày 12–13/12.' },
      { id: 'id33', cat: 'dir', en: 'To see the iconic Saint Giong emblem and photo backdrop, head straight to the central ceremonial plaza outside Hall A.', vi: 'Để chiêm ngưỡng biểu tượng Thánh Gióng và khu chụp ảnh điểm nhấn, quý khách đi thẳng ra quảng trường trung tâm trước Nhà A.', tip: 'Biểu tượng Thánh Gióng (màu xanh da trời và đỏ) là điểm nhấn check-in của 2026.' },
      { id: 'id34', cat: 'dir', en: 'International outdoor pavilions and heavy aircraft displays are arranged along the main apron—follow the blue directional arrows.', vi: 'Các gian trưng bày ngoài trời quốc tế và máy bay hạng nặng được bố trí dọc sân đỗ chính — quý khách đi theo mũi tên chỉ dẫn màu xanh.', tip: 'Dùng màu sắc biển chỉ dẫn giúp khách dễ định vị trong không gian 123.000 m².' },

      // Extra Thẻ & Đăng ký (4)
      { id: 'id35', cat: 'pass', en: 'I’m sorry, sir, an original passport or national ID is required for security verification; a phone photo alone is not accepted at the gate.', vi: 'Xin lỗi ông, chốt an ninh yêu cầu hộ chiếu hoặc CCCD bản gốc để xác minh; ảnh chụp trên điện thoại không được chấp nhận tại cổng.', tip: 'Nhắc nhẹ nhưng rõ ràng để khách không mất công xếp hàng lại.' },
      { id: 'id36', cat: 'pass', en: 'If mobile data is slow right now, please show your saved QR screenshot or confirmation email—our scanner works offline too.', vi: 'Nếu mạng di động lúc này hơi chậm, quý khách cứ mở ảnh chụp màn hình mã QR hoặc email xác nhận — máy quét của chúng tôi vẫn đọc được.', tip: 'Mẹo cực hay khi 4G bị nghẽn cục bộ tại khu đông người.' },
      { id: 'id37', cat: 'pass', en: 'There is no age limit on public days (December 12–13). Children should be accompanied by an adult, and adult visitors need their ID/Passport and registered QR code.', vi: 'Ngày mở cửa tự do 12–13/12 không giới hạn độ tuổi; trẻ em đi cùng người lớn, khách người lớn mang CCCD/Hộ chiếu và mã QR đã đăng ký.', tip: 'Nhắc phụ huynh nắm tay trẻ nhỏ tại các khu vực đông đúc.' },
      { id: 'id38', cat: 'pass', en: 'If you got separated from your group’s badge coordinator, please wait at the Group Check-in sign beside Gate A.', vi: 'Nếu quý khách bị tách khỏi người giữ thẻ của đoàn, vui lòng chờ tại biển “Group Check-in” ngay cạnh Cổng A.', tip: 'Giúp khách đi theo đoàn doanh nghiệp tìm lại nhau nhanh.' },

      // Extra Lịch trình & Xe buýt (4)
      { id: 'id39', cat: 'sched', en: 'Exhibition hours are 10:00–17:00 on Dec 10 (after the Opening Ceremony), 09:00–17:00 on Dec 11–12, and 09:00–15:00 on Dec 13. Last entry is 30 minutes before closing.', vi: 'Giờ mở cửa chính thức: 10/12 (10:00–17:00 sau Lễ Khai mạc), 11–12/12 (09:00–17:00) và 13/12 (09:00–15:00). Dừng đón khách trước giờ đóng cửa 30 phút.', tip: 'Luôn báo rõ giờ “last entry” để khách sắp xếp thời gian.' },
      { id: 'id40', cat: 'sched', en: 'Cultural and artistic performances take place at the main outdoor stage at 11:00 and 15:30—no separate ticket is required.', vi: 'Chương trình biểu diễn văn hóa nghệ thuật diễn ra tại sân khấu ngoài trời lúc 11:00 và 15:30 — không cần vé riêng.', tip: 'Khách quốc tế rất thích các tiết mục văn hóa Việt Nam.' },
      { id: 'id41', cat: 'sched', en: 'If you missed the morning live demonstration, the afternoon session is scheduled for 14:30, weather permitting.', vi: 'Nếu quý khách bỏ lỡ màn trình diễn buổi sáng, phiên buổi chiều dự kiến lúc 14:30 tùy điều kiện thời tiết.', tip: 'Thêm cụm “weather permitting” (tùy điều kiện thời tiết) để tránh cam kết cứng.' },
      { id: 'id42', cat: 'sched', en: 'Please note that private cars cannot park inside the airfield; all vehicles drop off passengers at the designated traffic zone outside.', vi: 'Lưu ý xe ô tô cá nhân không được đỗ trong sân bay; tất cả xe trả khách tại khu vực phân luồng quy định bên ngoài.', tip: 'Giải thích rõ quy định phân luồng giao thông Sân bay Gia Lâm.' },

      // Extra Mất đồ & Lạc người (2)
      { id: 'id43', cat: 'lost', en: 'We have logged your missing phone in our shared desk system. Could you leave an alternative contact number or hotel name so we can reach you?', vi: 'Chúng tôi đã ghi nhận điện thoại thất lạc vào hệ thống chung của 3 quầy. Quý khách cho xin số liên hệ dự phòng hoặc tên khách sạn để chúng tôi báo lại nhé?', tip: 'Khi khách mất điện thoại, luôn xin số người đi cùng hoặc tên khách sạn.' },
      { id: 'id44', cat: 'lost', en: 'If your passport cannot be located before closing time, we will assist you with an official loss report and contact your Embassy in Hanoi.', vi: 'Nếu không tìm thấy hộ chiếu trước giờ đóng cửa, chúng tôi sẽ hỗ trợ lập biên bản xác nhận thất lạc và liên hệ Đại sứ quán nước ông/bà tại Hà Nội.', tip: 'Cho khách quốc tế thấy quy trình hỗ trợ lãnh sự rất chuyên nghiệp.' },

      // Extra Y tế & An toàn (2)
      { id: 'id45', cat: 'med', en: 'Do you have any allergies or medical conditions I should inform the First Aid team about while they are on their way?', vi: 'Quý khách có tiền sử dị ứng hay bệnh lý nào để tôi báo trước cho Tổ Y tế trên đường tới không ạ?', tip: 'Thông tin cực kỳ quan trọng giúp quân y xử trí nhanh.' },
      { id: 'id46', cat: 'med', en: 'In case of an emergency evacuation, please follow our uniformed staff calmly to the nearest marked Emergency Exit and Assembly Point.', vi: 'Trong trường hợp cần sơ tán khẩn cấp, quý khách vui lòng bình tĩnh đi theo nhân viên mặc đồng phục tới Lối thoát hiểm và Điểm tập kết gần nhất.', tip: 'Luôn nắm vị trí 2 lối thoát hiểm gần quầy mình nhất.' },

      // Extra VIP & Báo chí (2)
      { id: 'id47', cat: 'vip', en: 'Good afternoon, Your Excellency / Admiral. Your liaison officer is already on the way—may I offer you a bottle of water while we wait?', vi: 'Chào buổi chiều, Thưa Ngài / Đô đốc. Sĩ quan liên lạc của Ngài đang tới ngay — tôi có thể mời Ngài một chai nước trong lúc chờ không ạ?', tip: 'Sự chu đáo nhỏ (mời nước, mời ghế) tạo ấn tượng ngoại giao rất lớn.' },
      { id: 'id48', cat: 'vip', en: 'Press photographers wishing to access the flight-line camera riser must check in at the Media Centre 30 minutes before the flypast.', vi: 'Phóng viên ảnh muốn lên bục tác nghiệp đường băng cần điểm danh tại Trung tâm Báo chí trước giờ bay 30 phút.', tip: 'Giúp phóng viên không bị lỡ giờ khóa khu vực an ninh đường băng.' },

      // Extra Phàn nàn & Quy định (3)
      { id: 'id49', cat: 'comp', en: 'I sincerely apologize for the wait at the security gate. We have opened additional screening lanes to speed up entry.', vi: 'Tôi thành thật xin lỗi vì thời gian chờ tại cổng an ninh. Chúng tôi đã mở thêm làn soi chiếu để đẩy nhanh tốc độ vào cổng.', tip: 'Thể hiện sự chủ động khắc phục thay vì đổ lỗi.' },
      { id: 'id50', cat: 'comp', en: 'For flight safety at Gia Lam Airport, personal drones and radio-transmitting devices must be checked at the security locker outside.', vi: 'Vì an toàn bay tại Sân bay Gia Lâm, flycam cá nhân và thiết bị phát sóng phải gửi tại tủ khóa an ninh bên ngoài.', tip: 'Nhấn mạnh yếu tố “flight safety” (an toàn bay) tại sân bay quân sự.' },
      { id: 'id51', cat: 'comp', en: 'Thank you for your feedback—I will forward your comment immediately to our Exhibition Operations Manager for follow-up.', vi: 'Cảm ơn góp ý của quý khách — tôi sẽ chuyển ngay phản ánh này tới Quản lý Điều hành Triển lãm để xử lý.', tip: 'Ghi chép lại góp ý của khách trước mặt họ để thể hiện sự tôn trọng.' },

      // Ẩm thực, Wi-Fi, Tiện ích & Du lịch Hà Nội (6)
      { id: 'id52', cat: 'hosp', en: 'The public Wi-Fi network is “VNDefence2026_Guest”. If bandwidth is congested, offline maps and printed brochures are available right here.', vi: 'Mạng Wi-Fi khách là “VNDefence2026_Guest”. Nếu mạng bị nghẽn do đông người, bản đồ giấy và tài liệu in luôn có sẵn ngay tại quầy này.', tip: 'Luôn chuẩn bị phương án bản đồ giấy dự phòng khi Wi-Fi/4G quá tải.' },
      { id: 'id53', cat: 'hosp', en: 'The outdoor food court offers Vietnamese dishes, coffee, and vegetarian options. Certified Halal meals are served at Dining Pavilion C.', vi: 'Khu ẩm thực ngoài trời phục vụ món Việt, cà phê và đồ chay. Suất ăn chuẩn Halal được phục vụ tại Khu Ẩm thực C.', tip: 'Rất nhiều đoàn từ Trung Đông, Malaysia, Indonesia hỏi đồ ăn Halal.' },
      { id: 'id54', cat: 'hosp', en: 'You can book a Grab car or licensed taxi from the official Pick-up Point outside Gate B; it takes about 20–25 minutes to reach Hoan Kiem Lake.', vi: 'Quý khách có thể đặt xe Grab hoặc taxi chính hãng tại Điểm đón ngoài Cổng B; di chuyển về Hồ Hoàn Kiếm mất khoảng 20–25 phút.', tip: 'Khách nước ngoài rất hay hỏi thời gian về trung tâm Hà Nội (Hoàn Kiếm) và sân bay Nội Bài (~35–45 phút).' },
      { id: 'id55', cat: 'hosp', en: 'To reach Noi Bai International Airport, please allow 45 to 60 minutes depending on bridge traffic, and depart via the main taxi stand.', vi: 'Để ra Sân bay Quốc tế Nội Bài, quý khách nên dự phòng 45 đến 60 phút tùy lưu lượng qua cầu và đón xe tại bãi taxi chính.', tip: 'Nhắc khách dự phòng thời gian kẹt cầu Chương Dương/Vĩnh Tuy/Nhật Tân.' },
      { id: 'id56', cat: 'hosp', en: 'Mobile ATMs and currency exchange services are located beside the main service plaza; major international cards are accepted at most booths.', vi: 'Cây ATM lưu động và quầy đổi ngoại tệ nằm cạnh khu dịch vụ trung tâm; thẻ quốc tế được chấp nhận tại hầu hết các quầy.', tip: 'Lưu ý khách mang một ít tiền mặt VND cho các quầy đồ uống nhỏ.' },
      { id: 'id57', cat: 'hosp', en: 'If you have extra time in Hanoi, we highly recommend visiting the Ho Chi Minh Mausoleum, Temple of Literature, and the Old Quarter.', vi: 'Nếu quý khách có thêm thời gian ở Hà Nội, rất nên ghé thăm Lăng Chủ tịch Hồ Chí Minh, Văn Miếu – Quốc Tử Giám và Phố Cổ.', tip: 'Gợi ý du lịch lịch sự giúp quảng bá hình ảnh thân thiện của Thủ đô.' },

      // Điều phối 3 Quầy & Thông báo Đóng cửa (3)
      { id: 'id58', cat: 'radio', en: 'Desk 1 to Desk 2 and Desk 3, over: we have a report of a lost black backpack near Hall A—please confirm if anything was turned in.', vi: '(Bộ đàm) Quầy 1 gọi Quầy 2 và Quầy 3: có tin báo thất lạc ba lô đen gần Nhà A — đề nghị xác nhận xem có ai nhặt được gửi lại không.', tip: 'Nói ngắn gọn, rõ số quầy và kết thúc lượt gọi bằng “over” khi dùng bộ đàm.' },
      { id: 'id59', cat: 'radio', en: 'Attention visitors: Vietnam International Defence Expo 2026 will close in 30 minutes at 17:00. Please begin making your way toward the exits and shuttle buses.', vi: 'Xin lưu ý quý khách: Triển lãm Quốc phòng quốc tế Việt Nam 2026 sẽ đóng cửa sau 30 phút nữa lúc 17:00. Xin quý khách di chuyển dần ra cổng và bến xe trung chuyển.', tip: 'Nhắc nhẹ từ 16:30 để tránh ùn tắc dồn cục lúc 17:00.' },
      { id: 'id60', cat: 'radio', en: 'Thank you for visiting today! Our gates reopen tomorrow morning at 09:00—have a safe journey back to your hotel.', vi: 'Cảm ơn quý khách đã đến tham quan hôm nay! Cổng triển lãm sẽ mở lại lúc 09:00 sáng mai — chúc quý khách trở về khách sạn an toàn.', tip: 'Câu tiễn khách ấm áp, chuyên nghiệp cuối ngày trực.' },
      { id: 'id61', cat: 'radio', en: 'Attention visitors: Today is the final day (December 13), and Vietnam International Defence Expo 2026 will close early at 15:00. Please proceed toward the exits and shuttle buses.', vi: 'Xin lưu ý quý khách: Hôm nay là ngày bế mạc 13/12, Triển lãm đóng cửa sớm lúc 15:00. Kính mời quý khách di chuyển dần ra lối ra và bến xe trung chuyển.', tip: 'Dùng bắt buộc cho chiều Chủ nhật 13/12/2026 (khác với mốc 17:00 của các ngày 10–12/12).' },
      { id: 'id62', cat: 'dir', en: 'We have a step-free wheelchair-accessible route and priority lanes at every gate. Let me escort you or call an electric buggy for assistance.', vi: 'Triển lãm có lối đi không bậc cho xe lăn và làn ưu tiên tại mọi cổng. Để tôi dẫn đường hoặc gọi xe điện hỗ trợ quý khách.', tip: 'Hỗ trợ người khuyết tật, người cao tuổi và phụ nữ mang thai.' },
      { id: 'id63', cat: 'comp', en: 'For everyone’s safety, prohibited items—including personal drones, sharp objects, flammable liquids and large tripods—cannot pass the security screening checkpoint.', vi: 'Vì an toàn chung, các vật dụng cấm gồm flycam cá nhân, vật sắc nhọn, chất dễ cháy và chân máy cỡ lớn không được phép mang qua cổng soi chiếu an ninh.', tip: 'Giải thích rõ ràng, bình tĩnh và hướng dẫn gửi đồ tại quầy giữ đồ ngoài cổng.' },
      { id: 'id64', cat: 'pass', en: 'To complete public registration on the Viettel Tammi app or portal, please upload a clear front-facing portrait photo and carry your original ID or passport.', vi: 'Để hoàn tất đăng ký tham quan trên ứng dụng Viettel Tammi hoặc website, vui lòng tải ảnh chân dung rõ mặt chính diện và mang theo CCCD/Hộ chiếu bản gốc.', tip: 'Khớp đúng 6 bước hướng dẫn đăng ký chính thức của Ban Tổ chức 2026.' },
      { id: 'id65', cat: 'dir', en: 'Head straight to the Experience Zone next to the Vietnamese Cultural Pavilion for the MiG-21 VR simulator, Commander Chess, light sculpture and water puppetry.', vi: 'Quý khách đi thẳng tới Khu Trải nghiệm cạnh Khu Văn hóa Việt Nam để xem mô phỏng VR MiG-21, Cờ Tư lệnh, điêu khắc ánh sáng và múa rối nước.', tip: 'Điểm tham quan rất hút khách gia đình và khách quốc tế trong ngày 12–13/12.' },
      { id: 'id66', cat: 'sched', en: 'The celebratory flypast and Special Forces martial arts demonstration take place during the Opening Ceremony on December 10; please check our daily board for exact rehearsal and show times.', vi: 'Màn bay chào mừng và biểu diễn võ thuật Đặc công diễn ra trong Lễ Khai mạc ngày 10/12; quý khách vui lòng xem bảng lịch ngày tại quầy để biết khung giờ chính xác.', tip: 'Tránh tự hứa khung giờ nếu chưa xác nhận lại với Trung tâm Điều hành trong ngày.' },

    ];

    const INFODESK_SOS = [
      {
        title: '1. Khách quốc tế báo mất Hộ chiếu / Thẻ VIP',
        severity: 'Khẩn cấp • An ninh',
        steps: ['Trấn an khách ngồi tại quầy, ghi tên, quốc tịch, số phòng khách sạn/SĐT.', 'Gọi bộ đàm báo Tổ An ninh + 2 Quầy Thông tin còn lại kiểm tra chốt soi chiếu.', 'Nếu là thành viên đoàn VIP, báo ngay Tiểu ban Lễ tân cử Sĩ quan Liên lạc hỗ trợ.'],
        en: 'Please stay calm—I am alerting our Security Team and all three information desks right away to check every checkpoint for your passport.'
      },
      {
        title: '2. Khách say nắng, choáng hoặc ngất gần quầy',
        severity: 'Khẩn cấp • Y tế',
        steps: ['Đỡ khách ngồi vào bóng râm, nới lỏng cổ áo, giải tán đám đông xung quanh.', 'Báo ngay Tổ Y tế (First Aid) kèm số Quầy Thông tin đang đứng.', 'Cung cấp nước mát từng ngụm nhỏ nếu khách tỉnh táo, theo dõi tới khi Y tế đến.'],
        en: 'Please sit down right here in the shade. I have already called our First Aid team—medical staff will be here in just a moment.'
      },
      {
        title: '3. Trẻ nhỏ đi lạc gia đình (Ngày mở cửa 12–13/12)',
        severity: 'Ưu tiên cao • An ninh',
        steps: ['Giữ phụ huynh (hoặc bé) ở yên ngay tại Quầy Thông tin — tuyệt đối không đi lung tung.', 'Ghi nhanh: Tên, tuổi, màu áo/quần, vị trí thấy lần cuối và báo bộ đàm An ninh + 2 Quầy kia.', 'Bàn giao bé chỉ sau khi xác minh đúng giấy tờ/mối quan hệ phụ huynh.'],
        en: 'Please stay right here with me so we don’t miss each other. Our security officers and all three desks are actively searching for your child now.'
      },
      {
        title: '4. Khách không có thẻ đòi vào ngày 10–11/12 & bức xúc',
        severity: 'Xử lý khéo • Giao tiếp',
        steps: ['Giữ thái độ điềm tĩnh, lắng nghe hết câu không ngắt lời, gật đầu đồng cảm.', 'Giải thích rõ quy định phân luồng 10–11/12 (Thương mại) và 12–13/12 (Công chúng).', 'Hướng dẫn sang Quầy Đăng ký (nếu là doanh nghiệp có thư mời) hoặc mời quay lại ngày 12–13/12.'],
        en: 'I understand your frustration, sir. December 10 and 11 are strictly for registered trade visitors; let me guide you to the Registration Counter to check your eligibility.'
      },
      {
        title: '5. Thay đổi đột xuất giờ bay / Mưa lớn / Kẹt xe buýt',
        severity: 'Điều phối • 3 Quầy',
        steps: ['Xác nhận thông tin chính thức từ Trung tâm Điều hành (không truyền tin đồn).', 'Đồng bộ ngay thông báo ngắn cho cả 3 Quầy Thông tin và ghi lên bảng thông báo.', 'Thông báo thời gian dự kiến mới và mời khách tạm tham quan khu trưng bày trong nhà.'],
        en: 'Due to weather and safety adjustments, the outdoor demonstration is rescheduled. While waiting, please enjoy our indoor pavilions and Cultural Zone.'
      },
      {
        title: '6. Khách hỏi thông số mật hoặc vấn đề chính trị nhạy cảm',
        severity: 'Kỷ luật phát ngôn',
        steps: ['Không tranh luận, không tự suy đoán hay đưa quan điểm cá nhân.', 'Chuyển hướng nhẹ nhàng về thông tin công khai của Triển lãm hoặc chủ đề “Hòa bình, Hữu nghị”.', 'Với câu hỏi chuyên sâu khí tài, giới thiệu khách tới trực tiếp gian hàng đơn vị trưng bày.'],
        en: 'I appreciate your question, but as general information staff I can only assist with event logistics. For technical specifications, our pavilion specialists will be happy to help.'
      },
      {
        title: '7. Phóng viên nước ngoài giơ máy quay phỏng vấn trực tiếp',
        severity: 'Báo chí • Truyền thông',
        steps: ['Mỉm cười lịch sự, từ chối trả lời ghi hình vì không thuộc thẩm quyền phát ngôn.', 'Giới thiệu ngay tới Trung tâm Báo chí (Media Centre) hoặc gọi Cán bộ Báo chí.', 'Cung cấp thông tin hậu cần cơ bản (bản đồ, giờ khai mạc) nếu phóng viên cần.'],
        en: 'Thank you for your interest, but I am not authorized for on-camera interviews. Let me direct you to our Media Centre where our Press Officer can assist you.'
      },
      {
        title: '8. Khách nói tiếng Anh quá nhanh / giọng địa phương khó nghe',
        severity: 'Giao tiếp thực địa',
        steps: ['Không gật đầu bừa khi chưa hiểu rõ yêu cầu của khách.', 'Xin khách nói chậm lại lịch sự, đồng thời đưa giấy bút hoặc bản đồ để khách chỉ/viết.', 'Xác nhận lại ý chính (“Just to confirm, you are looking for...”) trước khi chỉ đường.'],
        en: 'Pardon me, it’s quite noisy at the hall entrance—could you kindly speak a bit slower or point to the booth name on this list so I can assist you accurately?'
      },
      {
        title: '9. Mạng 4G/Wi-Fi nghẽn cục bộ — Khách không mở được mã QR',
        severity: 'Kỹ thuật • Cổng vào',
        steps: ['Hướng dẫn khách mở ảnh chụp màn hình QR hoặc email xác nhận đã lưu sẵn.', 'Nếu chưa lưu, chỉ khách kết nối Wi-Fi nội bộ tại quầy hoặc tra cứu tên/số hộ chiếu tại Quầy Đăng ký.', 'Phát ngay bản đồ giấy in sẵn thay vì yêu cầu khách quét QR xem bản đồ.'],
        en: 'No problem at all—mobile networks can get busy here. Please show your saved QR screenshot or passport at the Registration Counter, and take this printed map.'
      },
      {
        title: '10. Khách nước ngoài mất sạch ví tiền & giấy tờ cần báo Đại sứ quán',
        severity: 'Khẩn cấp • Lãnh sự',
        steps: ['Báo Tổ An ninh lập biên bản xác nhận mất tài sản ngay tại khu vực an ninh.', 'Cung cấp số điện thoại/địa chỉ Đại sứ quán nước khách tại Hà Nội từ danh bạ quầy.', 'Hỗ trợ khách gọi điện (nếu mất cả điện thoại) về khách sạn hoặc Đại sứ quán.'],
        en: 'Please don’t panic. Our Security Team will issue an official loss report right away, and I will help you contact your Embassy in Hanoi immediately.'
      },
      {
        title: '11. Mưa dông bất ngờ / Gió mạnh tại khu trưng bày ngoài trời',
        severity: 'An toàn • Thời tiết',
        steps: ['Hướng dẫn dòng khách ngoài trời di chuyển bình tĩnh vào mái che Nhà A, Nhà B hoặc Khu Văn hóa.', 'Kiểm tra thông báo từ Trung tâm Điều hành xem lịch bay/thao diễn có tạm hoãn không.', 'Đồng bộ ngay thông báo lùi lịch cho cả 3 Quầy Thông tin.'],
        en: 'For your safety during the sudden rain, please move calmly inside Hall A or Hall B. We will announce updated outdoor demonstration times shortly.'
      },
      {
        title: '12. Doanh nghiệp / Đối tác B2B báo nhầm vị trí gian hàng hoặc giờ họp',
        severity: 'Hỗ trợ B2B',
        steps: ['Xin xem tên công ty và mã gian hàng trên giấy mời/email.', 'Tra cứu danh bạ gian hàng mới nhất tại quầy hoặc gọi ngay Tiểu ban Nội dung/B2B.', 'Ghi lại số gian/phòng họp chính xác lên bản đồ và chỉ hướng rõ ràng.'],
        en: 'Let me double-check the latest exhibitor directory and confirm your exact booth number and B2B meeting room right away.'
      },
      {
        title: '13. Khách mang flycam cá nhân / thiết bị phát sóng bị chặn tại cổng',
        severity: 'An ninh • An toàn bay',
        steps: ['Giải thích ngắn gọn đây là khu vực sân bay quân sự có bay chào mừng nên nghiêm cấm flycam cá nhân.', 'Hướng dẫn khách gửi thiết bị an toàn tại khu tủ khóa/ký gửi ngoài cổng an ninh.', 'Giữ thái độ tôn trọng, không tranh cãi căng thẳng.'],
        en: 'Because Gia Lam is an active airfield hosting live flight displays, personal drones must be checked at the security storage counter outside Gate A.'
      },
      {
        title: '14. Khách hỏi đường về trung tâm Hà Nội / Sân bay Nội Bài khi phân luồng',
        severity: 'Giao thông • Hậu cần',
        steps: ['Chỉ rõ vị trí bến xe buýt trung chuyển miễn phí (Exit 2) ra điểm ngoài vùng cấm đường.', 'Thông báo điểm đón Grab/taxi chính hãng (ngoài Cổng B) và thời gian di chuyển ước tính (Hoàn Kiếm ~25 phút, Nội Bài ~45–60 phút).', 'Nhắc khách chọn hãng taxi uy tín hoặc ứng dụng đặt xe có hiện giá trước.'],
        en: 'Take our free shuttle from Exit 2 to the main pick-up zone outside the traffic restriction area, where licensed taxis and Grab cars can take you directly to downtown or Noi Bai Airport.'
      },
      {
        title: '15. Khách đi xe lăn / người cao tuổi / phụ nữ mang thai cần hỗ trợ di chuyển',
        severity: 'Ưu tiên • Tiếp cận',
        steps: [
          'Mời khách ngồi nghỉ tại ghế dự phòng cạnh quầy và cung cấp nước uống nếu cần.',
          'Gọi bộ đàm Tổ Hậu cần / xe điện nội khu hỗ trợ di chuyển tới Nhà A, Nhà B hoặc Bến xe trung chuyển.',
          'Hướng dẫn lối đi không bậc (wheelchair-accessible route), nhà vệ sinh ưu tiên và Phòng Mẹ & Bé gần nhất.'
        ],
        en: 'Please take a seat right here—you do not need to wait in the regular line. I am calling our priority electric shuttle and will guide you along the wheelchair-accessible route.'
      },

    ];

    /* ===================== APP STATE & STORAGE ===================== */
    const STORAGE_KEY = 'vn_defence_expo_2026_en_v2';
    const state = {
      activeTab: 'overview',
      theme: 'light',
      fontSize: 'md',
      accent: 'en-US',
      speechRate: 1.0,
      vocabMode: 'grid',
      vocabCat: 'all',
      vocabSearch: '',
      vocabMasteryFilter: 'all',
      vocabPageLimit: 24,
      fcIndex: 0,
      fcFlipped: false,
      fcReversed: false,
      fcShuffledIds: null,
      // Listening Drill
      listenItem: null,
      listenOptions: [],
      listenAnswered: false,
      listenSelectedId: null,
      listenCorrect: 0,
      listenTotal: 0,
      listenStreak: 0,
      // Phrasebook
      phraseScenario: 'all',
      phraseSearch: '',
      phraseBookmarkOnly: false,
      // Roleplay
      activeRoleplayId: 'rp1',
      rpTurnIndex: 0,
      rpScore: 0,
      rpLog: [],
      rpFinished: false,
      rpShuffledTurns: [],
      // Reference & Quiz
      idSubTab: 'handbook',
      idPhraseCat: 'all',
      idPhraseSearch: '',
      idPinOnly: false,
      idPinnedPhrases: [],
      idChecklistDone: [],
      idHotlines: { desk1: '', desk2: '', desk3: '', security: '', firstaid: '', protocol: '', media: '', shuttle: '' },
      idLogs: [],
      refSubTab: 'ranks',
      rankFilter: 'all',
      unitFilter: 'all',
      acronymSearch: '',
      quizLength: 10,
      quizPool: [],
      quizIndex: 0,
      quizScore: 0,
      quizAnswered: false,
      quizSelected: null,
      quizFinished: false,
      quizWrongList: [],
      quizReviewMode: false,
      // Persisted user progress
      masteredVocab: [],
      reviewVocab: [],
      bookmarkedPhrases: [],
      completedRoleplays: {},
      bestQuizScore: null,
      bestQuizPct: null,
      bestQuizDetail: null,
      customVocab: [],
      dailyProgress: { date: '', count: 0 }
    };

    function getAllVocab() {
      return [...BASE_VOCAB_DATA, ...state.customVocab];
    }

    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }


    function normalizeSearch(str) {
      return String(str || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase();
    }

    function getTodayKey() {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }

    function getDailyCount() {
      const today = getTodayKey();
      if (!state.dailyProgress || state.dailyProgress.date !== today) {
        return 0;
      }
      return state.dailyProgress.count || 0;
    }

    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('vn_defence_expo_2026_en_v1');
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.masteredVocab)) state.masteredVocab = parsed.masteredVocab;
        if (Array.isArray(parsed.reviewVocab)) state.reviewVocab = parsed.reviewVocab;
        if (Array.isArray(parsed.bookmarkedPhrases)) state.bookmarkedPhrases = parsed.bookmarkedPhrases;
        if (parsed.completedRoleplays && typeof parsed.completedRoleplays === 'object') state.completedRoleplays = parsed.completedRoleplays;
        if (typeof parsed.bestQuizScore === 'number') state.bestQuizScore = parsed.bestQuizScore;
        if (typeof parsed.bestQuizPct === 'number') state.bestQuizPct = parsed.bestQuizPct;
        if (typeof parsed.bestQuizDetail === 'string') state.bestQuizDetail = parsed.bestQuizDetail;
        if (parsed.accent === 'en-US' || parsed.accent === 'en-GB') state.accent = parsed.accent;
        if (parsed.speechRate === 0.75 || parsed.speechRate === 1.0) state.speechRate = parsed.speechRate;
        if (parsed.theme === 'dark' || parsed.theme === 'light') state.theme = parsed.theme;
        if (parsed.fontSize === 'sm' || parsed.fontSize === 'md' || parsed.fontSize === 'lg') state.fontSize = parsed.fontSize;
        if (Array.isArray(parsed.customVocab)) state.customVocab = parsed.customVocab;
        if (parsed.dailyProgress && typeof parsed.dailyProgress === 'object') state.dailyProgress = parsed.dailyProgress;
        if (Array.isArray(parsed.idChecklistDone)) state.idChecklistDone = parsed.idChecklistDone;
        if (Array.isArray(parsed.idPinnedPhrases)) state.idPinnedPhrases = parsed.idPinnedPhrases;
        if (parsed.idHotlines && typeof parsed.idHotlines === 'object') state.idHotlines = { ...state.idHotlines, ...parsed.idHotlines };
        if (Array.isArray(parsed.idLogs)) state.idLogs = parsed.idLogs;
      } catch (e) {
        // Ignore storage restrictions
      }
    }

    function saveProgress() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          masteredVocab: state.masteredVocab,
          reviewVocab: state.reviewVocab,
          bookmarkedPhrases: state.bookmarkedPhrases,
          completedRoleplays: state.completedRoleplays,
          bestQuizScore: state.bestQuizScore,
          bestQuizPct: state.bestQuizPct,
          bestQuizDetail: state.bestQuizDetail,
          accent: state.accent,
          speechRate: state.speechRate,
          theme: state.theme,
          fontSize: state.fontSize,
          customVocab: state.customVocab,
          dailyProgress: state.dailyProgress,
          idChecklistDone: state.idChecklistDone,
          idPinnedPhrases: state.idPinnedPhrases,
          idHotlines: state.idHotlines,
          idLogs: state.idLogs
        }));
      } catch (e) {
        // Ignore storage restrictions
      }
    }

    /* ===================== UTILITIES ===================== */
    function refreshIcons() {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const el = document.createElement('div');
      const bg = type === 'success' ? 'bg-emerald-700' : type === 'warn' ? 'bg-amber-600' : 'bg-navy-900';
      el.className = `toast-enter pointer-events-auto ${bg} text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-white/15`;
      el.textContent = message;
      container.appendChild(el);
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.25s ease';
        setTimeout(() => el.remove(), 260);
      }, 2400);
    }

    function stopSpeaking() {
      if ('speechSynthesis' in window) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
    }

    let cachedVoices = [];
    function refreshVoicesCache() {
      if ('speechSynthesis' in window) {
        cachedVoices = window.speechSynthesis.getVoices() || [];
      }
    }
    if ('speechSynthesis' in window) {
      refreshVoicesCache();
      window.speechSynthesis.onvoiceschanged = refreshVoicesCache;
    }

    function speakText(text, overrideRate = null) {
      if (!('speechSynthesis' in window)) {
        showToast('Trình duyệt hiện tại không hỗ trợ đọc âm thanh tự động.', 'warn');
        return;
      }
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = state.accent;
        utter.rate = overrideRate !== null ? overrideRate : state.speechRate;
        const voices = cachedVoices.length ? cachedVoices : (window.speechSynthesis.getVoices() || []);
        const targetLang = state.accent.toLowerCase();
        const preferred =
          voices.find(v => v.lang && v.lang.toLowerCase() === targetLang && /samantha|daniel|google|natural|enhanced/i.test(v.name)) ||
          voices.find(v => v.lang && v.lang.toLowerCase().startsWith(targetLang)) ||
          voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
        if (preferred) utter.voice = preferred;
        window.speechSynthesis.speak(utter);
      } catch (e) {
        showToast('Không thể phát âm thanh lúc này.', 'warn');
      }
    }

    /* Field Display Card (1-tap fullscreen high-contrast for noisy airfield) */
    let activeFieldDisplayText = '';
    function openFieldDisplay(enText, viText, badgeText) {
      activeFieldDisplayText = enText || '';
      const modal = document.getElementById('field-display-modal');
      if (!modal) return;
      document.getElementById('field-display-en').textContent = enText || '';
      document.getElementById('field-display-vi').textContent = viText || '';
      document.getElementById('field-display-badge').textContent = badgeText || 'VN Defence Expo 2026 • Information';
      modal.classList.remove('hidden');
      refreshIcons();
    }

    /* Quick Speech Pronunciation Practice (Web Speech Recognition) */
    let activeRecognizer = null;
    function practicePronunciation(targetEn) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) {
        showToast('Trình duyệt này chưa hỗ trợ nhận diện giọng nói. Hãy dùng nút Nghe để luyện nói nhại (shadowing).', 'warn');
        return;
      }
      try {
        if (activeRecognizer) { try { activeRecognizer.abort(); } catch (e) {} }
        const rec = new SpeechRec();
        activeRecognizer = rec;
        rec.lang = state.accent;
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        showToast('Đang lắng nghe... Hãy đọc to câu tiếng Anh!', 'info');
        rec.onresult = ev => {
          const spoken = (ev.results[0] && ev.results[0][0] && ev.results[0][0].transcript) || '';
          const norm = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
          const targetWords = norm(targetEn);
          const spokenSet = new Set(norm(spoken));
          const matched = targetWords.filter(w => spokenSet.has(w)).length;
          const pct = targetWords.length ? Math.round((matched / targetWords.length) * 100) : 0;
          const level = pct >= 80 ? 'success' : pct >= 55 ? 'info' : 'warn';
          showToast(`Khớp ${pct}% — Bạn vừa đọc: “${spoken.slice(0, 75)}${spoken.length > 75 ? '...' : ''}”`, level);
        };
        rec.onerror = () => showToast('Không thu được giọng nói. Vui lòng kiểm tra quyền Micro trên trình duyệt.', 'warn');
        rec.start();
      } catch (e) {
        showToast('Không thể khởi động Micro lúc này.', 'warn');
      }
    }

    function copyText(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Đã sao chép mẫu câu tiếng Anh!', 'success');
        }).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        showToast('Đã sao chép mẫu câu tiếng Anh!', 'success');
      } catch (e) {
        showToast('Không thể sao chép tự động.', 'warn');
      }
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function updateCountdown() {
      const el = document.getElementById('expo-countdown-text');
      if (!el) return;
      const opening = new Date('2026-12-10T09:00:00+07:00').getTime();
      const closing = new Date('2026-12-13T15:00:00+07:00').getTime();
      const now = Date.now();
      if (now < opening) {
        const diffDays = Math.ceil((opening - now) / (1000 * 60 * 60 * 24));
        el.textContent = `Còn ${diffDays} ngày tới Khai mạc`;
      } else if (now <= closing) {
        el.textContent = 'Đang diễn ra tại Sân bay Gia Lâm';
      } else {
        el.textContent = 'Triển lãm 2026 • Kho ôn luyện';
      }
    }

    function triggerPrintCheatSheet() {
      const saved = PHRASES_DATA.filter(p => state.bookmarkedPhrases.includes(p.id));
      const phrasesToPrint = saved.length > 0 ? saved : PHRASES_DATA.slice(0, 10);
      const printArea = document.getElementById('print-sheet-area');
      const customSection = state.customVocab.length > 0 ? `
        <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin: 14px 0 8px;">Thuật ngữ riêng của đơn vị (${state.customVocab.length})</h2>
        <div style="margin-bottom: 12px; font-size: 11px;">
          ${state.customVocab.map(v => `<div style="margin-bottom: 4px;"><strong>${escapeHtml(v.en)}</strong> — ${escapeHtml(v.vi)}</div>`).join('')}
        </div>
      ` : '';
      printArea.innerHTML = `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 820px; margin: 0 auto;">
          <h1 style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">CẨM NANG BỎ TÚI TIẾNG ANH — VN DEFENCE EXPO 2026</h1>
          <p style="font-size: 11px; color: #475569; margin-bottom: 12px;">10–13/12/2026 • Sân bay Gia Lâm, Hà Nội • Chủ đề: “Peace, Friendship, Cooperation for Mutual Development”</p>
          <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">1. Chính sách Quốc phòng “4 Không” (Four No’s)</h2>
          <p style="font-size: 11px; margin-bottom: 12px; line-height: 1.5;"><strong>1) No military alliances; 2) No siding with one country against another; 3) No foreign military bases or using Vietnamese territory to oppose other countries; 4) No using force or threatening to use force in international relations.</strong></p>
          <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">2. ${saved.length > 0 ? 'Mẫu câu bạn đã lưu (' + saved.length + ')' : '10 Mẫu câu cốt lõi'}</h2>
          <div style="margin-bottom: 14px;">
            ${phrasesToPrint.map((p, i) => `
              <div style="margin-bottom: 6px; font-size: 11px;">
                <strong>${i + 1}. ${escapeHtml(p.en)}</strong><br/>
                <span style="color: #334155;">${escapeHtml(p.vi)}</span>
              </div>
            `).join('')}
          </div>
          ${customSection}
          <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">3. Bảng Quân hàm &amp; Xưng hô nhanh</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 14px;">
            <thead><tr style="background: #f1f5f9;"><th style="border: 1px solid #cbd5e1; padding: 4px; text-align: left;">Việt Nam</th><th style="border: 1px solid #cbd5e1; padding: 4px; text-align: left;">Tiếng Anh</th><th style="border: 1px solid #cbd5e1; padding: 4px; text-align: left;">Xưng hô</th></tr></thead>
            <tbody>
              ${RANKS_DATA.map(r => `<tr><td style="border: 1px solid #cbd5e1; padding: 3px 4px;">${escapeHtml(r.vi)}</td><td style="border: 1px solid #cbd5e1; padding: 3px 4px;">${escapeHtml(r.en)}</td><td style="border: 1px solid #cbd5e1; padding: 3px 4px;">${escapeHtml(r.address)}</td></tr>`).join('')}
            </tbody>
          </table>
          <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">4. Bảng chữ cái Phiên âm NATO</h2>
          <div style="font-size: 10px; margin-bottom: 14px; line-height: 1.6;">
            ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => `<strong>${c}</strong>-${NATO_MAP[c]}`).join(' • ')}
          </div>
          <h2 style="font-size: 14px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px;">5. Từ viết tắt thiết yếu (${ACRONYMS_DATA.length})</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; font-size: 10px;">
            ${ACRONYMS_DATA.map(a => `<div><strong>${escapeHtml(a.code)}:</strong> ${escapeHtml(a.full)} (${escapeHtml(a.vi)})</div>`).join('')}
          </div>
        </div>
      `;
      showToast('Đang mở hộp thoại in / lưu PDF Cẩm nang bỏ túi...', 'info');
      setTimeout(() => window.print(), 150);
    }

    /* ===================== NAVIGATION & GLOBAL UI ===================== */

    function applyThemeAndFont() {
      const html = document.documentElement;
      html.classList.toggle('dark', state.theme === 'dark');
      html.classList.remove('font-sm', 'font-md', 'font-lg');
      html.classList.add('font-' + state.fontSize);

      const themeMeta = document.querySelector('meta[name="theme-color"]');
      if (themeMeta) themeMeta.setAttribute('content', state.theme === 'dark' ? '#09120C' : '#152A1D');

      const icon = document.getElementById('theme-toggle-icon');
      if (icon) {
        icon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
      }
      const fLabel = document.getElementById('font-cycle-label');
      if (fLabel) {
        fLabel.textContent = state.fontSize === 'sm' ? 'S' : state.fontSize === 'lg' ? 'L' : 'M';
      }
      document.querySelectorAll('.mobile-fsize-btn').forEach(btn => {
        const active = btn.dataset.fsize === state.fontSize;
        btn.className = active
          ? 'mobile-fsize-btn px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 transition'
          : 'mobile-fsize-btn px-2.5 py-1 rounded-md text-xs font-semibold text-slate-300 hover:text-white transition';
      });
      refreshIcons();
    }

    function setTab(tabId) {
      state.activeTab = tabId;
      const views = ['overview', 'vocab', 'phrases', 'roleplay', 'infodesk', 'reference'];
      views.forEach(v => {
        const panel = document.getElementById(`view-${v}`);
        if (panel) panel.classList.toggle('hidden', v !== tabId);
      });

      document.querySelectorAll('.nav-tab').forEach(btn => {
        const active = btn.dataset.tab === tabId;
        btn.className = active
          ? 'nav-tab whitespace-nowrap px-2.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-amber-500 text-navy-950 shadow-sm'
          : 'nav-tab whitespace-nowrap px-2.5 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 text-slate-200 hover:bg-navy-800 hover:text-white';
      });

      document.querySelectorAll('.mobile-nav-tab').forEach(btn => {
        const active = btn.dataset.tab === tabId;
        btn.className = active
          ? 'mobile-nav-tab w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2.5 bg-amber-500 text-navy-950'
          : 'mobile-nav-tab w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2.5 text-slate-200 hover:bg-navy-800';
      });

      document.querySelectorAll('.ios-tab').forEach(btn => {
        const active = btn.dataset.tab === tabId;
        btn.className = active
          ? 'ios-tab flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold gap-0.5 text-amber-600 dark:text-amber-400 transition'
          : 'ios-tab flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-medium gap-0.5 text-slate-500 dark:text-slate-400 transition';
      });

      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) mobileMenu.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (tabId === 'overview') renderOverview();
      if (tabId === 'vocab') renderVocab();
      if (tabId === 'phrases') renderPhrases();
      if (tabId === 'roleplay') renderRoleplay();
      if (tabId === 'infodesk') renderInfoDesk();
      if (tabId === 'reference') renderReference();
      refreshIcons();
    }

    function updateVoiceButtons() {
      const usBtn = document.getElementById('accent-us-btn');
      const gbBtn = document.getElementById('accent-gb-btn');
      usBtn.className = state.accent === 'en-US'
        ? 'px-2 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 transition'
        : 'px-2 py-1 rounded-md text-xs font-semibold text-slate-300 hover:text-white transition';
      gbBtn.className = state.accent === 'en-GB'
        ? 'px-2 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 transition'
        : 'px-2 py-1 rounded-md text-xs font-semibold text-slate-300 hover:text-white transition';

      const cycleBtn = document.getElementById('speed-cycle-btn');
      if (cycleBtn) {
        cycleBtn.textContent = state.speechRate === 0.75 ? '0.75x' : '1.0x';
      }

      const mSlow = document.getElementById('mobile-speed-slow-btn');
      const mNorm = document.getElementById('mobile-speed-normal-btn');
      if (mSlow && mNorm) {
        mSlow.className = state.speechRate === 0.75
          ? 'px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 transition'
          : 'px-2.5 py-1 rounded-md text-xs font-semibold text-slate-300 hover:text-white transition';
        mNorm.className = state.speechRate === 1.0
          ? 'px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-navy-950 transition'
          : 'px-2.5 py-1 rounded-md text-xs font-semibold text-slate-300 hover:text-white transition';
      }
    }

    /* ===================== TAB 1: OVERVIEW ===================== */
    function renderOverview() {
      updateCountdown();
      const totalVocab = getAllVocab().length;
      const masteredCount = state.masteredVocab.length;
      const savedCount = state.bookmarkedPhrases.length;
      const rpDone = Object.keys(state.completedRoleplays).length;
      const quizPct = state.bestQuizPct !== null ? state.bestQuizPct : (state.bestQuizScore !== null ? Math.round((state.bestQuizScore / QUIZ_DATA.length) * 100) : 0);

      const readiness = Math.round(
        (totalVocab > 0 ? (masteredCount / totalVocab) * 50 : 0) +
        (rpDone / ROLEPLAY_SCENARIOS.length) * 25 +
        (quizPct / 100) * 25
      );

      document.getElementById('overview-readiness-pct').textContent = `${readiness}%`;
      document.getElementById('overview-readiness-bar').style.width = `${readiness}%`;
      document.getElementById('overview-readiness-detail').textContent = `${masteredCount}/${totalVocab} thuật ngữ đã thuộc`;

      const dailyCount = Math.min(getDailyCount(), 10);
      document.getElementById('daily-goal-text').textContent = `${dailyCount} / 10`;
      document.getElementById('daily-goal-bar').style.width = `${Math.round((dailyCount / 10) * 100)}%`;

      document.getElementById('stat-vocab').textContent = `${masteredCount} / ${totalVocab}`;
      document.getElementById('stat-phrases').textContent = `${savedCount} / ${PHRASES_DATA.length}`;
      document.getElementById('stat-roleplay').textContent = `${rpDone} / ${ROLEPLAY_SCENARIOS.length}`;
      document.getElementById('stat-quiz').textContent = state.bestQuizDetail ? state.bestQuizDetail : (state.bestQuizScore !== null ? `${state.bestQuizScore} / ${QUIZ_DATA.length}` : 'Chưa thi');
    }

    /* ===================== TAB 2: VOCABULARY, FLASHCARDS & LISTENING ===================== */
    function getFilteredVocab() {
      const q = normalizeSearch(state.vocabSearch.trim());
      let list = getAllVocab().filter(item => {
        if (state.vocabCat !== 'all' && item.cat !== state.vocabCat) return false;
        const isMastered = state.masteredVocab.includes(item.id);
        if (state.vocabMasteryFilter === 'mastered' && !isMastered) return false;
        if (state.vocabMasteryFilter === 'unmastered' && isMastered) return false;
        if (q) {
          const hay = normalizeSearch(`${item.en} ${item.vi} ${item.exEn} ${item.exVi}`);
          if (!hay.includes(q)) return false;
        }
        return true;
      });
      if (state.vocabMode === 'flashcard' && Array.isArray(state.fcShuffledIds)) {
        const orderMap = new Map(state.fcShuffledIds.map((id, i) => [id, i]));
        list = [...list].sort((a, b) => (orderMap.has(a.id) ? orderMap.get(a.id) : 9999) - (orderMap.has(b.id) ? orderMap.get(b.id) : 9999));
      }
      return list;
    }

    function toggleMastered(id) {
      const idx = state.masteredVocab.indexOf(id);
      if (idx >= 0) {
        state.masteredVocab.splice(idx, 1);
        showToast('Đã bỏ đánh dấu đã thuộc.');
      } else {
        state.masteredVocab.push(id);
        const today = getTodayKey();
        if (state.dailyProgress.date !== today) {
          state.dailyProgress = { date: today, count: 1 };
        } else {
          state.dailyProgress.count = (state.dailyProgress.count || 0) + 1;
        }
        showToast('Đã đánh dấu thuộc thuật ngữ!', 'success');
      }
      if (idx < 0) {
        const rIdx = state.reviewVocab.indexOf(id);
        if (rIdx >= 0) state.reviewVocab.splice(rIdx, 1);
      }
      saveProgress();
      renderVocab();
      renderOverview();
    }

    function toggleReviewVocab(id) {
      const idx = state.reviewVocab.indexOf(id);
      if (idx >= 0) {
        state.reviewVocab.splice(idx, 1);
        showToast('Đã bỏ cờ Cần ôn lại.');
      } else {
        state.reviewVocab.push(id);
        showToast('Đã đánh dấu Cần ôn lại (lọc trong trạng thái Cần ôn lại).', 'warn');
      }
      saveProgress();
      renderVocab();
    }

    function deleteCustomVocab(id) {
      state.customVocab = state.customVocab.filter(v => v.id !== id);
      state.masteredVocab = state.masteredVocab.filter(m => m !== id);
      saveProgress();
      renderVocab();
      renderOverview();
      showToast('Đã xóa thuật ngữ tùy chỉnh.', 'warn');
    }

    function setupNextListeningQuestion() {
      const pool = getFilteredVocab();
      const allPool = pool.length >= 4 ? pool : getAllVocab();
      const target = allPool[Math.floor(Math.random() * allPool.length)];
      const distractors = shuffleArray(allPool.filter(x => x.id !== target.id)).slice(0, 3);
      state.listenItem = target;
      state.listenOptions = shuffleArray([target, ...distractors]);
      state.listenAnswered = false;
      state.listenSelectedId = null;
      renderListening();
    }

    function renderListening() {
      if (!state.listenItem) {
        setupNextListeningQuestion();
        return;
      }
      document.getElementById('listen-streak').textContent = `Chuỗi đúng: ${state.listenStreak}`;
      document.getElementById('listen-score').textContent = `Đúng: ${state.listenCorrect} / ${state.listenTotal}`;

      const optsEl = document.getElementById('listen-options');
      optsEl.innerHTML = state.listenOptions.map(opt => {
        let cls = 'border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 text-slate-800';
        if (state.listenAnswered) {
          if (opt.id === state.listenItem.id) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
          else if (opt.id === state.listenSelectedId) cls = 'border-red-400 bg-red-50 text-red-900';
          else cls = 'border-slate-200 text-slate-400 opacity-65';
        }
        return `
          <button type="button" data-listen-opt="${opt.id}" ${state.listenAnswered ? 'disabled' : ''} class="p-4 rounded-xl border text-left text-sm transition ${cls}">
            ${escapeHtml(opt.vi)}
          </button>
        `;
      }).join('');

      const fbEl = document.getElementById('listen-feedback');
      const nextBtn = document.getElementById('listen-next-btn');
      if (state.listenAnswered) {
        const ok = state.listenSelectedId === state.listenItem.id;
        fbEl.classList.remove('hidden');
        fbEl.className = ok
          ? 'p-4 rounded-xl text-sm bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1'
          : 'p-4 rounded-xl text-sm bg-amber-50 border border-amber-200 text-amber-900 space-y-1';
        fbEl.innerHTML = `
          <div class="font-bold">${ok ? 'Chính xác!' : 'Chưa đúng — Đáp án là:'} ${escapeHtml(state.listenItem.en)} <span class="font-mono text-xs font-normal">${escapeHtml(state.listenItem.ipa)}</span></div>
          <div class="text-xs">${escapeHtml(state.listenItem.vi)} — “${escapeHtml(state.listenItem.exEn)}”</div>
        `;
        nextBtn.classList.remove('hidden');
      } else {
        fbEl.classList.add('hidden');
        nextBtn.classList.add('hidden');
      }
      refreshIcons();
    }

    function renderVocab() {
      const totalCount = getAllVocab().length;
      document.getElementById('vocab-section-title').textContent = `Từ vựng & Thuật ngữ Quân sự – Quốc phòng (${totalCount} thuật ngữ)`;

      const modeBtns = [
        { id: 'vocab-mode-grid', key: 'grid' },
        { id: 'vocab-mode-flashcard', key: 'flashcard' },
        { id: 'vocab-mode-listening', key: 'listening' }
      ];
      modeBtns.forEach(m => {
        const el = document.getElementById(m.id);
        el.className = state.vocabMode === m.key
          ? 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-navy-900 shadow-sm flex items-center gap-1.5'
          : 'px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-slate-600 hover:text-navy-900 flex items-center gap-1.5';
      });

      const catSelect = document.getElementById('vocab-cat-select');
      if (catSelect) {
        catSelect.innerHTML = VOCAB_CATEGORIES.map(c => {
          const count = c.id === 'all' ? totalCount : getAllVocab().filter(v => v.cat === c.id).length;
          return `<option value="${c.id}" ${state.vocabCat === c.id ? 'selected' : ''}>${escapeHtml(c.label)} (${count})</option>`;
        }).join('');
      }
      const pillsEl = document.getElementById('vocab-category-pills');
      pillsEl.innerHTML = VOCAB_CATEGORIES.map(c => {
        const active = state.vocabCat === c.id;
        const count = c.id === 'all' ? totalCount : getAllVocab().filter(v => v.cat === c.id).length;
        return `<button type="button" data-vcat="${c.id}" class="vcat-pill shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
          active ? 'bg-navy-900 text-amber-300 shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }">${escapeHtml(c.label)} (${count})</button>`;
      }).join('');

      const list = getFilteredVocab();
      const gridContainer = document.getElementById('vocab-grid-container');
      const fcContainer = document.getElementById('vocab-flashcard-container');
      const listenContainer = document.getElementById('vocab-listening-container');

      gridContainer.classList.toggle('hidden', state.vocabMode !== 'grid');
      fcContainer.classList.toggle('hidden', state.vocabMode !== 'flashcard');
      listenContainer.classList.toggle('hidden', state.vocabMode !== 'listening');

      const loadMoreWrap = document.getElementById('vocab-loadmore-wrap');
      const loadMoreBtn = document.getElementById('vocab-loadmore-btn');
      if (state.vocabMode === 'grid') {
        if (list.length === 0) {
          gridContainer.innerHTML = `<div class="col-span-full bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-500 text-sm">Không tìm thấy thuật ngữ phù hợp với bộ lọc hiện tại.</div>`;
          loadMoreWrap.classList.add('hidden');
        } else {
          const visibleList = list.slice(0, state.vocabPageLimit);
          if (list.length > visibleList.length) {
            loadMoreWrap.classList.remove('hidden');
            loadMoreBtn.textContent = `Xem thêm (+24 thuật ngữ) • Đang hiển thị ${visibleList.length} / ${list.length}`;
          } else {
            loadMoreWrap.classList.add('hidden');
          }
          gridContainer.innerHTML = visibleList.map(item => {
            const mastered = state.masteredVocab.includes(item.id);
            const inReview = state.reviewVocab.includes(item.id);
            const catLabel = (VOCAB_CATEGORIES.find(c => c.id === item.cat) || {}).label || '';
            const isCustom = item.cat === 'custom';
            return `
              <div class="bg-white rounded-2xl border ${mastered ? 'border-emerald-300 bg-emerald-50/20' : inReview ? 'border-orange-300 bg-orange-50' : 'border-slate-200'} shadow-sm p-5 flex flex-col justify-between gap-4 hover:shadow-md transition">
                <div class="space-y-2.5">
                  <div class="flex items-start justify-between gap-2">
                    <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${isCustom ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}">${escapeHtml(catLabel)}</span>
                    <div class="flex items-center gap-1">
                      ${isCustom ? `<button type="button" data-delete-vocab="${item.id}" class="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition" title="Xóa từ tự thêm"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>` : ''}
                      <button type="button" data-speak-vocab="${item.id}" class="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-navy-900 transition" title="Nghe phát âm">
                        <i data-lucide="volume-2" class="w-4 h-4"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-base font-bold text-navy-900 leading-snug">${escapeHtml(item.en)}</h3>
                    ${item.ipa ? `<div class="text-xs text-amber-600 font-mono mt-0.5">${escapeHtml(item.ipa)}</div>` : ''}
                    <div class="text-sm font-semibold text-slate-800 mt-1.5">${escapeHtml(item.vi)}</div>
                  </div>
                  ${item.exEn ? `
                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                      <div class="text-slate-700 leading-relaxed">“${escapeHtml(item.exEn)}”</div>
                      ${item.exVi ? `<div class="text-slate-500 italic">${escapeHtml(item.exVi)}</div>` : ''}
                    </div>
                  ` : ''}
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" data-master-vocab="${item.id}" class="flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
                    mastered ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-100 text-slate-700 hover:bg-navy-900 hover:text-white'
                  }">
                    <i data-lucide="${mastered ? 'check-circle-2' : 'circle'}" class="w-4 h-4"></i>
                    ${mastered ? 'Đã thuộc' : 'Đánh dấu thuộc'}
                  </button>
                  <button type="button" data-review-vocab="${item.id}" class="px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition ${
                    inReview ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-800'
                  }" title="Đánh dấu từ khó cần ôn lại">
                    <i data-lucide="flag" class="w-3.5 h-3.5"></i>${inReview ? 'Ôn lại' : ''}
                  </button>
                </div>
              </div>
            `;
          }).join('');
        }
      } else if (state.vocabMode === 'flashcard') {
        loadMoreWrap.classList.add('hidden');
        if (list.length === 0) {
          document.getElementById('fc-counter').textContent = '0 / 0';
          document.getElementById('fc-en').textContent = 'Không có thẻ nào';
          document.getElementById('fc-ipa').textContent = 'Hãy đổi bộ lọc để xem thẻ.';
          document.getElementById('fc-vi').textContent = '';
          document.getElementById('fc-ex-en').textContent = '';
          document.getElementById('fc-ex-vi').textContent = '';
        } else {
          if (state.fcIndex >= list.length) state.fcIndex = 0;
          if (state.fcIndex < 0) state.fcIndex = list.length - 1;
          const card = list[state.fcIndex];
          const mastered = state.masteredVocab.includes(card.id);
          const catLabel = (VOCAB_CATEGORIES.find(c => c.id === card.cat) || {}).label || '';

          document.getElementById('fc-counter').textContent = `Thẻ ${state.fcIndex + 1} / ${list.length}`;
          document.getElementById('fc-cat-badge').textContent = catLabel;
          const revBtnSpan = document.querySelector('#fc-reverse-btn span');
          if (revBtnSpan) revBtnSpan.textContent = state.fcReversed ? 'Việt → Anh' : 'Anh → Việt';
          if (state.fcReversed) {
            document.getElementById('fc-front-label').textContent = 'Mặt trước • Tiếng Việt (Luyện phản xạ)';
            document.getElementById('fc-back-label').textContent = 'Mặt sau • Tiếng Anh & Ngữ cảnh';
            document.getElementById('fc-en').textContent = card.vi;
            document.getElementById('fc-ipa').textContent = 'Hãy thử nói thuật ngữ tiếng Anh trước khi lật!';
            document.getElementById('fc-vi').textContent = `${card.en}${card.ipa ? '  ' + card.ipa : ''}`;
          } else {
            document.getElementById('fc-front-label').textContent = 'Mặt trước • Tiếng Anh';
            document.getElementById('fc-back-label').textContent = 'Mặt sau • Nghĩa & Ngữ cảnh';
            document.getElementById('fc-en').textContent = card.en;
            document.getElementById('fc-ipa').textContent = card.ipa || '';
            document.getElementById('fc-vi').textContent = card.vi;
          }
          document.getElementById('fc-ex-en').textContent = card.exEn ? `“${card.exEn}”` : 'Chưa có ví dụ.';
          document.getElementById('fc-ex-vi').textContent = card.exVi || '';

          document.getElementById('fc-inner').classList.toggle('is-flipped', state.fcFlipped);

          const pill = document.getElementById('fc-mastered-pill');
          pill.textContent = mastered ? 'Đã thuộc' : 'Chưa thuộc';
          pill.className = mastered
            ? 'text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
            : 'text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300';

          const mBtn = document.getElementById('fc-master-btn');
          mBtn.className = mastered
            ? 'px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 transition'
            : 'px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 bg-amber-500 text-navy-950 hover:bg-amber-400 transition';
          mBtn.querySelector('span').textContent = mastered ? 'Đã thuộc' : 'Đánh dấu đã thuộc';
          const rBtn = document.getElementById('fc-review-btn');
          if (rBtn) {
            const inReview = state.reviewVocab.includes(card.id);
            rBtn.className = inReview
              ? 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-orange-500 text-white hover:bg-orange-600 transition'
              : 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-slate-100 text-slate-700 hover:bg-orange-100 hover:text-orange-800 transition';
            rBtn.querySelector('span').textContent = inReview ? 'Đang ôn lại' : 'Cần ôn lại';
          }
        }
      } else if (state.vocabMode === 'listening') {
        loadMoreWrap.classList.add('hidden');
        renderListening();
      }
      refreshIcons();
    }

    /* ===================== TAB 3: PHRASEBOOK ===================== */
    function toggleBookmarkPhrase(id) {
      const idx = state.bookmarkedPhrases.indexOf(id);
      if (idx >= 0) {
        state.bookmarkedPhrases.splice(idx, 1);
        showToast('Đã bỏ lưu mẫu câu.');
      } else {
        state.bookmarkedPhrases.push(id);
        showToast('Đã lưu mẫu câu vào danh sách ôn tập!', 'success');
      }
      saveProgress();
      renderPhrases();
      renderOverview();
    }

    function renderPhrases() {
      const pillsEl = document.getElementById('phrases-scenario-pills');
      pillsEl.innerHTML = PHRASE_SCENARIOS.map(s => {
        const active = state.phraseScenario === s.id;
        return `<button type="button" data-psc="${s.id}" class="psc-pill shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
          active ? 'bg-navy-900 text-amber-300 shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }">${escapeHtml(s.label)}</button>`;
      }).join('');

      const bmBtn = document.getElementById('phrases-bookmark-filter');
      bmBtn.className = state.phraseBookmarkOnly
        ? 'self-start px-3.5 py-2 rounded-xl border border-amber-400 bg-amber-50 text-amber-800 text-sm font-semibold flex items-center gap-2 transition'
        : 'self-start px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition';

      const q = normalizeSearch(state.phraseSearch.trim());
      const filtered = PHRASES_DATA.filter(p => {
        if (state.phraseScenario !== 'all' && p.sc !== state.phraseScenario) return false;
        if (state.phraseBookmarkOnly && !state.bookmarkedPhrases.includes(p.id)) return false;
        if (q && !normalizeSearch(`${p.en} ${p.vi} ${p.tip}`).includes(q)) return false;
        return true;
      });

      const listEl = document.getElementById('phrases-list-container');
      if (filtered.length === 0) {
        listEl.innerHTML = `<div class="bg-white rounded-2xl border border-slate-200 p-10 text-center text-slate-500 text-sm">Không có mẫu câu nào phù hợp với bộ lọc hiện tại.</div>`;
      } else {
        listEl.innerHTML = filtered.map(p => {
          const saved = state.bookmarkedPhrases.includes(p.id);
          const scLabel = (PHRASE_SCENARIOS.find(s => s.id === p.sc) || {}).label || '';
          return `
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 hover:border-slate-300 transition">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">${escapeHtml(scLabel)}</span>
                <div class="flex items-center gap-1.5">
                  <button type="button" data-speak-phrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-navy-900 hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-1 transition">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe
                  </button>
                  <button type="button" data-practice-phrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-1 transition" title="Luyện nói &amp; chấm phát âm">
                    <i data-lucide="mic" class="w-3.5 h-3.5"></i>Nói
                  </button>
                  <button type="button" data-field-phrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-amber-500 hover:text-navy-950 text-slate-700 text-xs font-semibold flex items-center gap-1 transition" title="Phóng to giơ màn hình cho khách đọc">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>Giơ thẻ
                  </button>
                  <button type="button" data-copy-phrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>Chép
                  </button>
                  <button type="button" data-bookmark-phrase="${p.id}" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                    saved ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-600 hover:bg-amber-50'
                  }">
                    <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>${saved ? 'Đã lưu' : 'Lưu'}
                  </button>
                </div>
              </div>
              <div class="text-base font-bold text-navy-900 leading-relaxed">“${escapeHtml(p.en)}”</div>
              <div class="text-sm text-slate-700">${escapeHtml(p.vi)}</div>
              <div class="flex items-start gap-2 p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900">
                <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                <div><span class="font-semibold">Lưu ý đối ngoại:</span> ${escapeHtml(p.tip)}</div>
              </div>
            </div>
          `;
        }).join('');
      }
      refreshIcons();
    }

    /* ===================== TAB 4: ROLE-PLAY SIMULATOR ===================== */
    function startRoleplay(scenarioId) {
      state.activeRoleplayId = scenarioId;
      state.rpTurnIndex = 0;
      state.rpScore = 0;
      state.rpFinished = false;
      const sc = ROLEPLAY_SCENARIOS.find(s => s.id === scenarioId) || ROLEPLAY_SCENARIOS[0];
      // Shuffle options for each turn so users never memorize position A/B/C
      state.rpShuffledTurns = sc.turns.map(t => ({
        partnerText: t.partnerText,
        partnerVi: t.partnerVi,
        options: shuffleArray(t.options)
      }));
      state.rpLog = [
        { speaker: 'partner', text: state.rpShuffledTurns[0].partnerText, vi: state.rpShuffledTurns[0].partnerVi }
      ];
      renderRoleplay();
    }

    function chooseRoleplayOption(optIndex) {
      if (state.rpFinished) return;
      const sc = ROLEPLAY_SCENARIOS.find(s => s.id === state.activeRoleplayId);
      const turn = state.rpShuffledTurns[state.rpTurnIndex];
      const opt = turn.options[optIndex];
      if (!opt) return;

      state.rpScore += opt.score;
      state.rpLog.push({
        speaker: 'user',
        text: opt.text,
        score: opt.score,
        feedback: opt.feedback
      });

      state.rpTurnIndex += 1;
      if (state.rpTurnIndex < state.rpShuffledTurns.length) {
        const nextTurn = state.rpShuffledTurns[state.rpTurnIndex];
        state.rpLog.push({
          speaker: 'partner',
          text: nextTurn.partnerText,
          vi: nextTurn.partnerVi
        });
      } else {
        state.rpFinished = true;
        const prev = state.completedRoleplays[sc.id] || 0;
        if (state.rpScore >= prev) {
          state.completedRoleplays[sc.id] = state.rpScore;
          saveProgress();
          renderOverview();
        }
        showToast(`Hoàn thành tình huống với ${state.rpScore}/${state.rpShuffledTurns.length * 10} điểm!`, 'success');
      }
      renderRoleplay();
      const chatLog = document.getElementById('rp-chat-log');
      if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
    }

    function renderRoleplay() {
      const cardsEl = document.getElementById('roleplay-scenario-cards');
      cardsEl.innerHTML = ROLEPLAY_SCENARIOS.map(sc => {
        const active = sc.id === state.activeRoleplayId;
        const best = state.completedRoleplays[sc.id];
        return `
          <button type="button" data-select-rp="${sc.id}" class="text-left p-4 rounded-xl border transition ${
            active ? 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20' : 'border-slate-200 hover:border-slate-300 bg-white'
          }">
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700">${escapeHtml(sc.role)}</span>
              ${best !== undefined ? `<span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">${best}/${sc.turns.length * 10}</span>` : ''}
            </div>
            <div class="font-bold text-sm text-navy-900">${escapeHtml(sc.title)}</div>
          </button>
        `;
      }).join('');

      const sc = ROLEPLAY_SCENARIOS.find(s => s.id === state.activeRoleplayId) || ROLEPLAY_SCENARIOS[0];
      if (state.rpShuffledTurns.length === 0) {
        startRoleplay(sc.id);
        return;
      }

      document.getElementById('rp-active-title').textContent = sc.title;
      document.getElementById('rp-active-context').textContent = `${sc.partner} • ${sc.context}`;
      document.getElementById('rp-score-badge').textContent = `Điểm: ${state.rpScore} / ${state.rpShuffledTurns.length * 10}`;

      const logEl = document.getElementById('rp-chat-log');
      logEl.innerHTML = state.rpLog.map((msg, i) => {
        if (msg.speaker === 'partner') {
          return `
            <div class="flex items-start gap-3 max-w-2xl">
              <div class="w-8 h-8 rounded-full bg-navy-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="user-check" class="w-4 h-4"></i>
              </div>
              <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm space-y-1.5">
                <div class="flex items-center justify-between gap-3">
                  <span class="text-xs font-bold text-navy-900">${escapeHtml(sc.partner)}</span>
                  <button type="button" data-speak-rp="${i}" class="text-xs text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe
                  </button>
                </div>
                <div class="text-sm text-slate-900 leading-relaxed">${escapeHtml(msg.text)}</div>
                <div class="text-xs text-slate-500 italic">${escapeHtml(msg.vi)}</div>
              </div>
            </div>
          `;
        } else {
          const badgeColor = msg.score === 10 ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : msg.score === 5 ? 'bg-amber-100 text-amber-800 border-amber-200' : 'bg-red-100 text-red-800 border-red-200';
          const badgeText = msg.score === 10 ? '+10 Chuẩn mực' : msg.score === 5 ? '+5 Chấp nhận được' : '+0 Cần cải thiện';
          return `
            <div class="flex flex-col items-end space-y-1.5">
              <div class="max-w-2xl bg-navy-900 text-white rounded-2xl rounded-tr-none p-4 shadow-sm text-sm leading-relaxed space-y-2">
                <div>${escapeHtml(msg.text)}</div>
                <div class="flex justify-end">
                  <button type="button" data-speak-rp="${i}" class="text-[11px] text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe luyện nói nhại
                  </button>
                </div>
              </div>
              <div class="max-w-2xl px-3.5 py-2 rounded-xl border text-xs ${badgeColor}">
                <span class="font-bold">${badgeText}:</span> ${escapeHtml(msg.feedback)}
              </div>
            </div>
          `;
        }
      }).join('');

      const choicesEl = document.getElementById('rp-choices-area');
      if (state.rpFinished) {
        const rating = state.rpScore >= 25 ? 'Xuất sắc — Sẵn sàng tác nghiệp đối ngoại!' : state.rpScore >= 15 ? 'Khá tốt — Chú ý thêm sắc thái trang trọng.' : 'Cần luyện thêm — Hãy thử lại để nắm chắc mẫu câu chuẩn.';
        choicesEl.innerHTML = `
          <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="font-bold text-emerald-900 text-sm">Kết quả tình huống: ${state.rpScore} / ${state.rpShuffledTurns.length * 10} điểm</div>
              <div class="text-xs text-emerald-800 mt-0.5">${rating}</div>
            </div>
            <button type="button" id="rp-finish-retry-btn" class="px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800 transition shrink-0">Luyện lại tình huống này</button>
          </div>
        `;
      } else {
        const turn = state.rpShuffledTurns[state.rpTurnIndex];
        choicesEl.innerHTML = `
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500">Lượt ${state.rpTurnIndex + 1} / ${state.rpShuffledTurns.length} — Chọn câu phản hồi tiếng Anh của bạn:</div>
          <div class="space-y-2.5">
            ${turn.options.map((opt, idx) => `
              <button type="button" data-rp-opt="${idx}" class="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 text-sm text-slate-800 transition flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-slate-100 text-navy-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">${String.fromCharCode(65 + idx)}</span>
                <span class="leading-relaxed">${escapeHtml(opt.text)}</span>
              </button>
            `).join('')}
          </div>
        `;
      }
      refreshIcons();
    }

    /* ===================== TAB 5: RANKS, ACRONYMS & QUIZ ===================== */
    function initQuiz(customList = null) {
      const source = customList || shuffleArray(QUIZ_DATA).slice(0, state.quizLength);
      state.quizPool = source.map(q => {
        const indexed = q.options.map((text, idx) => ({ text, isCorrect: idx === q.ans }));
        const shuffledOpts = shuffleArray(indexed);
        return {
          q: q.q,
          options: shuffledOpts.map(o => o.text),
          ans: shuffledOpts.findIndex(o => o.isCorrect),
          exp: q.exp,
          raw: q
        };
      });
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = false;
      state.quizSelected = null;
      state.quizFinished = false;
      state.quizWrongList = [];
      state.quizReviewMode = Boolean(customList);
    }


    const NATO_MAP = {
      A: 'Alpha', B: 'Bravo', C: 'Charlie', D: 'Delta', E: 'Echo', F: 'Foxtrot',
      G: 'Golf', H: 'Hotel', I: 'India', J: 'Juliett', K: 'Kilo', L: 'Lima',
      M: 'Mike', N: 'November', O: 'Oscar', P: 'Papa', Q: 'Quebec', R: 'Romeo',
      S: 'Sierra', T: 'Tango', U: 'Uniform', V: 'Victor', W: 'Whiskey', X: 'X-ray',
      Y: 'Yankee', Z: 'Zulu',
      '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
      '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Niner'
    };

    function spellNato(input) {
      const chars = String(input || '').toUpperCase().split('');
      const words = [];
      chars.forEach(ch => {
        if (NATO_MAP[ch]) words.push(NATO_MAP[ch]);
      });
      return words.join(' – ');
    }

    function renderExpertPanel() {
      const inp = document.getElementById('nato-input');
      const out = document.getElementById('nato-output');
      if (inp && out) {
        const spelled = spellNato(inp.value);
        out.textContent = spelled || 'Nhập chữ cái hoặc chữ số để xem phiên âm NATO...';
      }
      const grid = document.getElementById('nato-grid');
      if (grid && !grid.dataset.built) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        grid.innerHTML = letters.map(ch => `
          <button type="button" data-speak-nato="${NATO_MAP[ch]}" class="p-2 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/50 text-center transition">
            <div class="font-extrabold text-navy-900 text-sm">${ch}</div>
            <div class="text-[11px] text-slate-600 font-medium">${NATO_MAP[ch]}</div>
          </button>
        `).join('');
        grid.dataset.built = '1';
      }
    }


    /* ===================== TAB 5: GENERAL INFORMATION DESK LOGIC ===================== */
    function renderInfoDesk() {
      document.querySelectorAll('.id-subtab').forEach(btn => {
        const active = btn.dataset.idtab === state.idSubTab;
        btn.className = active
          ? 'id-subtab px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-1.5 bg-navy-900 text-amber-300 shadow-sm'
          : 'id-subtab px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center gap-1.5 text-slate-600 hover:bg-slate-100';
      });
      ['handbook', 'phrases', 'sos', 'drill', 'log'].forEach(k => {
        const p = document.getElementById('id-panel-' + k);
        if (p) p.classList.toggle('hidden', state.idSubTab !== k);
      });

      if (state.idSubTab === 'handbook') renderInfoDeskChecklist();
      if (state.idSubTab === 'phrases') renderInfoDeskPhrases();
      if (state.idSubTab === 'sos') renderInfoDeskSos();
      if (state.idSubTab === 'log') renderInfoDeskLog();
      refreshIcons();
    }

    function renderInfoDeskChecklist() {
      const doneCount = state.idChecklistDone.length;
      document.getElementById('id-check-progress').textContent = `${doneCount} / ${INFODESK_CHECKLIST.length}`;
      const wrap = document.getElementById('id-checklist-items');
      wrap.innerHTML = INFODESK_CHECKLIST.map(item => {
        const checked = state.idChecklistDone.includes(item.id);
        return `
          <button type="button" data-toggle-chk="${item.id}" class="w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition ${
            checked ? 'bg-emerald-50 border-emerald-300 text-emerald-900 line-through opacity-85' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-400'
          }">
            <i data-lucide="${checked ? 'check-square' : 'square'}" class="w-4 h-4 shrink-0 mt-0.5 ${checked ? 'text-emerald-600' : 'text-slate-400'}"></i>
            <span class="leading-relaxed">${escapeHtml(item.text)}</span>
          </button>
        `;
      }).join('');
    }

    function renderInfoDeskPhrases() {
      const pillsEl = document.getElementById('id-phrase-pills');
      pillsEl.innerHTML = INFODESK_CATS.map(c => {
        const active = state.idPhraseCat === c.id;
        return `<button type="button" data-idcat="${c.id}" class="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
          active ? 'bg-navy-900 text-amber-300 shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }">${escapeHtml(c.label)}</button>`;
      }).join('');

      const pinBtn = document.getElementById('id-pin-filter-btn');
      if (pinBtn) {
        pinBtn.className = state.idPinOnly
          ? 'px-3.5 py-2.5 rounded-xl border border-amber-400 bg-amber-50 text-amber-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition shrink-0'
          : 'px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-amber-50 flex items-center justify-center gap-1.5 transition shrink-0';
      }
      const q = normalizeSearch(state.idPhraseSearch.trim());
      const filtered = INFODESK_PHRASES.filter(p => {
        if (state.idPhraseCat !== 'all' && p.cat !== state.idPhraseCat) return false;
        if (state.idPinOnly && !state.idPinnedPhrases.includes(p.id)) return false;
        if (q && !normalizeSearch(`${p.en} ${p.vi} ${p.tip}`).includes(q)) return false;
        return true;
      });

      const listEl = document.getElementById('id-phrase-list');
      if (!filtered.length) {
        listEl.innerHTML = `<div class="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">Không tìm thấy mẫu câu trực quầy phù hợp.</div>`;
      } else {
        listEl.innerHTML = filtered.map(p => {
          const catLabel = (INFODESK_CATS.find(c => c.id === p.cat) || {}).label || '';
          return `
            <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-2.5 hover:border-slate-300 transition">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">${escapeHtml(catLabel)}</span>
                <div class="flex items-center gap-1.5">
                  <button type="button" data-speak-idphrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-navy-900 hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-1 transition">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe
                  </button>
                  <button type="button" data-practice-idphrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-semibold flex items-center gap-1 transition" title="Luyện nói &amp; chấm phát âm">
                    <i data-lucide="mic" class="w-3.5 h-3.5"></i>Nói
                  </button>
                  <button type="button" data-field-idphrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-500 hover:text-navy-950 text-amber-900 text-xs font-semibold flex items-center gap-1 transition" title="Phóng to giơ màn hình cho khách đọc">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>Giơ thẻ
                  </button>
                  <button type="button" data-copy-idphrase="${p.id}" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i>Chép
                  </button>
                  <button type="button" data-pin-idphrase="${p.id}" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                    state.idPinnedPhrases.includes(p.id) ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-600 hover:bg-amber-50'
                  }">
                    <i data-lucide="pin" class="w-3.5 h-3.5"></i>${state.idPinnedPhrases.includes(p.id) ? 'Đã ghim' : 'Ghim'}
                  </button>
                </div>
              </div>
              <div class="text-sm sm:text-base font-bold text-navy-900 leading-relaxed">“${escapeHtml(p.en)}”</div>
              <div class="text-xs sm:text-sm text-slate-700">${escapeHtml(p.vi)}</div>
              <div class="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2">
                <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5"></i>
                <span><strong>Mẹo trực quầy:</strong> ${escapeHtml(p.tip)}</span>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    function renderInfoDeskSos() {
      const grid = document.getElementById('id-sos-grid');
      grid.innerHTML = INFODESK_SOS.map((s, idx) => `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 flex flex-col justify-between">
          <div class="space-y-2.5">
            <div class="flex items-start justify-between gap-2">
              <h4 class="font-bold text-sm sm:text-base text-navy-900">${escapeHtml(s.title)}</h4>
              <span class="shrink-0 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">${escapeHtml(s.severity)}</span>
            </div>
            <ol class="list-decimal pl-4 space-y-1 text-xs text-slate-700">
              ${s.steps.map(st => `<li>${escapeHtml(st)}</li>`).join('')}
            </ol>
          </div>
          <div class="p-3 rounded-xl bg-navy-900 text-slate-100 text-xs space-y-2">
            <div class="leading-relaxed">“${escapeHtml(s.en)}”</div>
            <div class="flex items-center justify-end gap-1.5">
              <button type="button" data-field-sos="${idx}" class="px-2.5 py-1 rounded-lg bg-white/15 text-white font-bold text-[11px] flex items-center gap-1 hover:bg-white/25 transition" title="Phóng to cho khách đọc khi khu vực ồn">
                <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>Giơ màn hình
              </button>
              <button type="button" data-speak-sos="${idx}" class="px-2.5 py-1 rounded-lg bg-amber-500 text-navy-950 font-bold text-[11px] flex items-center gap-1 hover:bg-amber-400 transition">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>Nghe câu phản xạ
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }


    const HOTLINE_FIELDS = [
      { key: 'desk1', label: 'Quầy Thông tin số 1 (Cổng A)' },
      { key: 'desk2', label: 'Quầy Thông tin số 2 (Nhà chính)' },
      { key: 'desk3', label: 'Quầy Thông tin số 3 (Ngoài trời)' },
      { key: 'security', label: 'Tổ An ninh / Kênh bộ đàm' },
      { key: 'firstaid', label: 'Tổ Y tế / Cấp cứu (First Aid)' },
      { key: 'protocol', label: 'Tiểu ban Lễ tân (VIP)' },
      { key: 'media', label: 'Trung tâm Báo chí (Media)' },
      { key: 'shuttle', label: 'Điều phối Xe trung chuyển' }
    ];

    function renderInfoDeskLog() {
      const hWrap = document.getElementById('id-hotlines-form');
      if (hWrap) {
        hWrap.innerHTML = HOTLINE_FIELDS.map(f => `
          <div>
            <label class="block text-[11px] font-semibold text-slate-600 mb-0.5">${escapeHtml(f.label)}</label>
            <input type="text" data-hotline-key="${f.key}" value="${escapeHtml(state.idHotlines[f.key] || '')}" placeholder="Nhập SĐT / Kênh bộ đàm..." class="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40" />
          </div>
        `).join('');
      }
      const listEl = document.getElementById('id-log-list');
      if (listEl) {
        if (!state.idLogs.length) {
          listEl.innerHTML = `<div class="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-300">Chưa có ghi nhận sự vụ nào trong ca trực.</div>`;
        } else {
          listEl.innerHTML = state.idLogs.map(item => `
            <div class="p-3 rounded-xl border ${item.done ? 'bg-emerald-50/50 border-emerald-200' : 'bg-white border-slate-200'} flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div class="space-y-0.5">
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="px-2 py-0.5 rounded-full bg-navy-900 text-amber-300 font-bold text-[10px]">${escapeHtml(item.desk)}</span>
                  <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[10px]">${escapeHtml(item.type)}</span>
                  <span class="text-[11px] text-slate-400 font-mono">${escapeHtml(item.time)}</span>
                </div>
                <div class="${item.done ? 'line-through text-slate-500' : 'text-navy-900 font-medium'}">${escapeHtml(item.note)}</div>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <button type="button" data-toggle-log="${item.id}" class="px-2.5 py-1 rounded-lg font-semibold ${item.done ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-emerald-100'} transition">${item.done ? 'Đã xong' : 'Đánh dấu xong'}</button>
                <button type="button" data-del-log="${item.id}" class="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition" title="Xóa dòng"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
              </div>
            </div>
          `).join('');
        }
      }
    }

    function renderGlobalSearchResults(rawQuery) {
      const box = document.getElementById('global-search-results');
      const q = normalizeSearch(String(rawQuery || '').trim());
      if (!q) {
        box.innerHTML = `<div class="text-center py-8 text-xs text-slate-500">Gõ từ khóa tiếng Việt (có dấu hoặc không dấu) hoặc tiếng Anh để tra cứu tức thì xuyên suốt <strong>280 thuật ngữ</strong>, <strong>126 mẫu câu</strong>, <strong>15 thẻ SOS</strong>, <strong>Quân hàm – Đơn vị</strong> và <strong>56 viết tắt</strong>.</div>`;
        return;
      }
      const hits = [];
      INFODESK_SOS.forEach(s => {
        if (normalizeSearch(`${s.title} ${s.en} ${s.steps.join(' ')}`).includes(q)) {
          hits.push({ badge: 'SOS Quầy TT', color: 'bg-red-100 text-red-800', title: s.title, sub: s.en, speak: s.en });
        }
      });
      INFODESK_PHRASES.forEach(p => {
        if (normalizeSearch(`${p.en} ${p.vi} ${p.tip}`).includes(q)) {
          hits.push({ badge: 'Mẫu câu Quầy TT', color: 'bg-amber-100 text-amber-800', title: p.en, sub: p.vi, speak: p.en });
        }
      });
      PHRASES_DATA.forEach(p => {
        if (normalizeSearch(`${p.en} ${p.vi} ${p.tip}`).includes(q)) {
          hits.push({ badge: 'Mẫu câu Đối ngoại', color: 'bg-blue-100 text-blue-800', title: p.en, sub: p.vi, speak: p.en });
        }
      });
      getAllVocab().forEach(v => {
        if (normalizeSearch(`${v.en} ${v.vi} ${v.exEn}`).includes(q)) {
          hits.push({ badge: 'Từ vựng', color: 'bg-emerald-100 text-emerald-800', title: `${v.en} ${v.ipa || ''}`, sub: v.vi, speak: v.en });
        }
      });
      RANKS_DATA.forEach(r => {
        if (normalizeSearch(`${r.vi} ${r.en} ${r.address} ${r.note || ''}`).includes(q)) {
          hits.push({ badge: 'Quân hàm', color: 'bg-indigo-100 text-indigo-800', title: `${r.vi} — ${r.en}`, sub: `Xưng hô: ${r.address}`, speak: r.en });
        }
      });
      UNITS_DATA.forEach(u => {
        if (normalizeSearch(`${u.vi} ${u.en} ${u.cmd || ''} ${u.note || ''}`).includes(q)) {
          hits.push({ badge: 'Cơ cấu Đơn vị', color: 'bg-teal-100 text-teal-800', title: `${u.vi} — ${u.en}`, sub: u.cmd || u.note || '', speak: u.en });
        }
      });
      ACRONYMS_DATA.forEach(a => {
        if (normalizeSearch(`${a.code} ${a.full} ${a.vi}`).includes(q)) {
          hits.push({ badge: 'Viết tắt', color: 'bg-purple-100 text-purple-800', title: `${a.code} — ${a.full}`, sub: a.vi, speak: a.full });
        }
      });

      if (!hits.length) {
        box.innerHTML = `<div class="text-center py-8 text-xs text-slate-500">Không tìm thấy kết quả nào khớp với “${escapeHtml(rawQuery)}”.</div>`;
        return;
      }
      box.innerHTML = hits.slice(0, 20).map((h, i) => `
        <div class="p-3 rounded-xl border border-slate-200 hover:border-amber-400 bg-slate-50/70 flex items-start justify-between gap-3 transition">
          <div class="space-y-1">
            <span class="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${h.color}">${escapeHtml(h.badge)}</span>
            <div class="font-bold text-xs sm:text-sm text-navy-900 leading-snug">${escapeHtml(h.title)}</div>
            <div class="text-xs text-slate-600">${escapeHtml(h.sub)}</div>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            <button type="button" data-gs-speak="${escapeHtml(h.speak)}" class="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-navy-900 hover:text-white text-navy-900 transition" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
            <button type="button" data-gs-copy="${escapeHtml(h.speak)}" class="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-amber-100 text-slate-700 transition" title="Chép câu">
              <i data-lucide="copy" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `).join('') + (hits.length > 20 ? `<div class="text-center text-[11px] text-slate-400 pt-1">Hiển thị 20 / ${hits.length} kết quả khớp nhất — hãy gõ thêm từ khóa để lọc sâu hơn.</div>` : '');
      refreshIcons();
    }

    function triggerPrintInfoDesk() {
      const printArea = document.getElementById('print-sheet-area');
      const pinned = INFODESK_PHRASES.filter(p => state.idPinnedPhrases.includes(p.id));
      const phrasesForPrint = pinned.length > 0 ? pinned : INFODESK_PHRASES.slice(0, 16);
      const hotlinesHtml = HOTLINE_FIELDS.map(f => `
        <div style="border: 1px solid #cbd5e1; padding: 4px 6px; border-radius: 4px;">
          <strong>${escapeHtml(f.label)}:</strong> ${escapeHtml(state.idHotlines[f.key] || '________________')}
        </div>
      `).join('');
      printArea.innerHTML = `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 820px; margin: 0 auto;">
          <h1 style="font-size: 18px; font-weight: 800; margin-bottom: 4px;">TỜ TRỰC QUẦY THÔNG TIN CHUNG (3 QUẦY) — VN DEFENCE EXPO 2026</h1>
          <p style="font-size: 11px; color: #475569; margin-bottom: 10px;">10/12: 10:00–17:00 (sau Khai mạc) | 11/12: 09:00–17:00 (Thương mại) | 12/12: 09:00–17:00 &amp; 13/12: 09:00–15:00 (Mở cửa tự do) • Sân bay Gia Lâm</p>
          <h2 style="font-size: 13px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 6px;">1. Danh bạ Nóng &amp; Kênh bộ đàm Nội bộ</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 10px; margin-bottom: 12px;">${hotlinesHtml}</div>
          <h2 style="font-size: 13px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 6px;">2. Câu phản xạ khẩn cấp (15 tình huống SOS)</h2>
          <div style="margin-bottom: 12px; font-size: 10.5px;">
            ${INFODESK_SOS.map(s => `<div style="margin-bottom: 4px;"><strong>${escapeHtml(s.title)}:</strong> “${escapeHtml(s.en)}”</div>`).join('')}
          </div>
          <h2 style="font-size: 13px; font-weight: 700; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 6px;">3. ${pinned.length > 0 ? 'Mẫu câu trực quầy bạn đã ghim (' + pinned.length + ')' : '16 Mẫu câu trực quầy hay dùng nhất'}</h2>
          <div style="font-size: 10.5px;">
            ${phrasesForPrint.map((p, i) => `<div style="margin-bottom: 4px;"><strong>${i + 1}. ${escapeHtml(p.en)}</strong> — ${escapeHtml(p.vi)}</div>`).join('')}
          </div>
        </div>
      `;
      showToast('Đang mở hộp thoại in Tờ trực Quầy Thông tin...', 'info');
      setTimeout(() => window.print(), 150);
    }

    function renderReference() {
      document.querySelectorAll('.ref-subtab').forEach(btn => {
        const active = btn.dataset.reftab === state.refSubTab;
        btn.className = active
          ? 'ref-subtab px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-2 bg-navy-900 text-amber-300 shadow-sm'
          : 'ref-subtab px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2 text-slate-600 hover:bg-slate-100';
      });

      document.getElementById('ref-panel-ranks').classList.toggle('hidden', state.refSubTab !== 'ranks');
      document.getElementById('ref-panel-units').classList.toggle('hidden', state.refSubTab !== 'units');
      document.getElementById('ref-panel-expert').classList.toggle('hidden', state.refSubTab !== 'expert');
      document.getElementById('ref-panel-acronyms').classList.toggle('hidden', state.refSubTab !== 'acronyms');
      document.getElementById('ref-panel-quiz').classList.toggle('hidden', state.refSubTab !== 'quiz');

      if (state.refSubTab === 'ranks') renderRanks();
      if (state.refSubTab === 'units') renderUnits();
      if (state.refSubTab === 'expert') renderExpertPanel();
      if (state.refSubTab === 'acronyms') renderAcronyms();
      if (state.refSubTab === 'quiz') renderQuiz();
      refreshIcons();
    }

    function renderRanks() {
      const filtered = RANKS_DATA.filter(r => state.rankFilter === 'all' || r.group === state.rankFilter);
      const tbody = document.getElementById('ranks-table-body');
      tbody.innerHTML = filtered.map(r => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3.5 px-4 font-bold text-navy-900">${escapeHtml(r.vi)}<div class="text-xs font-normal text-slate-500 mt-0.5">${escapeHtml(r.note)}</div></td>
          <td class="py-3.5 px-4 font-semibold text-slate-800">${escapeHtml(r.en)}</td>
          <td class="py-3.5 px-4 text-amber-700 font-medium">${escapeHtml(r.address)}</td>
          <td class="py-3.5 px-4 text-right">
            <button type="button" data-speak-rank="${escapeHtml(r.en.replace(/\(.*?\)/g, '').trim())}" class="p-2 rounded-lg bg-slate-100 hover:bg-amber-100 text-navy-900 transition" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `).join('');
    }


    function renderUnits() {
      const filtered = UNITS_DATA.filter(u => state.unitFilter === 'all' || u.group === state.unitFilter);
      const tbody = document.getElementById('units-table-body');
      tbody.innerHTML = filtered.map(u => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3.5 px-4 font-bold text-navy-900">${escapeHtml(u.vi)}<div class="text-xs font-normal text-slate-500 mt-0.5">${escapeHtml(u.note)}</div></td>
          <td class="py-3.5 px-4 font-semibold text-slate-800">${escapeHtml(u.en)}</td>
          <td class="py-3.5 px-4 text-amber-700 font-medium text-xs">${escapeHtml(u.cmd)}</td>
          <td class="py-3.5 px-4 text-right">
            <button type="button" data-speak-unit="${escapeHtml(u.en.replace(/\(.*?\)/g, '').trim())}" class="p-2 rounded-lg bg-slate-100 hover:bg-amber-100 text-navy-900 transition" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `).join('');
    }

    function renderAcronyms() {
      const q = normalizeSearch(state.acronymSearch.trim());
      const filtered = ACRONYMS_DATA.filter(a => !q || normalizeSearch(`${a.code} ${a.full} ${a.vi}`).includes(q));
      const grid = document.getElementById('acronyms-grid');
      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">Không tìm thấy từ viết tắt phù hợp.</div>`;
      } else {
        grid.innerHTML = filtered.map(a => `
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2 hover:border-amber-400 transition">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-lg bg-navy-900 text-amber-300 font-mono font-bold text-sm">${escapeHtml(a.code)}</span>
              <button type="button" data-speak-acronym="${escapeHtml(a.full)}" class="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-navy-900 transition" title="Nghe tên đầy đủ">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
            <div class="text-sm font-bold text-slate-900 leading-snug">${escapeHtml(a.full)}</div>
            <div class="text-xs text-slate-600">${escapeHtml(a.vi)}</div>
          </div>
        `).join('');
      }
    }

    function renderQuiz() {
      document.querySelectorAll('.qlen-btn').forEach(btn => {
        const active = Number(btn.dataset.qlen) === state.quizLength && !state.quizReviewMode;
        btn.className = active
          ? 'qlen-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-navy-900 text-amber-300 shadow-sm transition'
          : 'qlen-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition';
      });
      if (state.quizPool.length === 0) initQuiz();
      const card = document.getElementById('quiz-card');
      const total = state.quizPool.length;

      if (state.quizFinished) {
        const pct = total > 0 ? Math.round((state.quizScore / total) * 100) : 0;
        const level = pct >= 85 ? 'Xuất sắc! Bạn đã sẵn sàng tác nghiệp tại Triển lãm.' : pct >= 65 ? 'Khá tốt! Ôn lại thêm vài thuật ngữ và nghi thức nữa nhé.' : 'Cần củng cố thêm! Hãy xem lại phần Từ vựng và Mẫu câu.';
        card.innerHTML = `
          <div class="text-center space-y-4 py-4">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
              <i data-lucide="trophy" class="w-8 h-8"></i>
            </div>
            <h3 class="text-2xl font-extrabold text-navy-900">${state.quizReviewMode ? 'Hoàn thành ôn câu sai!' : 'Hoàn thành bài kiểm tra!'}</h3>
            <div class="text-4xl font-extrabold text-amber-600">${state.quizScore} / ${total} <span class="text-lg text-slate-500">(${pct}%)</span></div>
            <p class="text-sm text-slate-600 max-w-md mx-auto">${level}</p>
            <div class="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              ${state.quizWrongList.length > 0 ? `<button id="quiz-review-wrong-btn" type="button" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-navy-950 text-sm font-bold transition">Ôn lại ${state.quizWrongList.length} câu làm sai</button>` : ''}
              <button id="quiz-retry-btn" type="button" class="px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition">Làm lại bài kiểm tra</button>
            </div>
          </div>
        `;
        refreshIcons();
        return;
      }

      const item = state.quizPool[state.quizIndex];
      const progressPct = Math.round(((state.quizIndex + (state.quizAnswered ? 1 : 0)) / total) * 100);
      card.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>${state.quizReviewMode ? 'Ôn câu sai' : 'Câu hỏi'} ${state.quizIndex + 1} / ${total}</span>
            <span class="text-navy-900">Điểm hiện tại: ${state.quizScore}</span>
          </div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-amber-500 rounded-full transition-all duration-300" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <h3 class="text-lg font-bold text-navy-900 leading-snug">${escapeHtml(item.q)}</h3>

        <div class="space-y-2.5">
          ${item.options.map((opt, idx) => {
            let cls = 'border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 text-slate-800';
            if (state.quizAnswered) {
              if (idx === item.ans) cls = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
              else if (idx === state.quizSelected) cls = 'border-red-400 bg-red-50 text-red-900';
              else cls = 'border-slate-200 text-slate-400 opacity-70';
            }
            return `
              <button type="button" data-quiz-opt="${idx}" ${state.quizAnswered ? 'disabled' : ''} class="w-full text-left p-4 rounded-xl border text-sm transition flex items-start gap-3 ${cls}">
                <span class="w-6 h-6 rounded-full bg-slate-100 text-navy-900 font-bold text-xs flex items-center justify-center shrink-0">${String.fromCharCode(65 + idx)}</span>
                <span>${escapeHtml(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>

        ${state.quizAnswered ? `
          <div class="p-4 rounded-xl ${state.quizSelected === item.ans ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-amber-50 border border-amber-200 text-amber-900'} text-xs leading-relaxed">
            <span class="font-bold">${state.quizSelected === item.ans ? 'Chính xác!' : 'Chưa chính xác.'}</span> ${escapeHtml(item.exp)}
          </div>
          <div class="flex justify-end">
            <button id="quiz-next-btn" type="button" class="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition flex items-center gap-1.5">
              ${state.quizIndex === total - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}<i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        ` : ''}
      `;
      refreshIcons();
    }

    /* ===================== EVENT LISTENERS ===================== */
    function bindEvents() {
      document.getElementById('brand-home-btn').addEventListener('click', () => setTab('overview'));

      document.querySelectorAll('.nav-tab, .mobile-nav-tab').forEach(btn => {
        btn.addEventListener('click', () => setTab(btn.dataset.tab));
      });
      // iOS Bottom Tab Bar
      document.querySelectorAll('.ios-tab').forEach(btn => {
        btn.addEventListener('click', () => setTab(btn.dataset.tab));
      });

      // Light / Dark Mode Toggle
      document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyThemeAndFont();
        saveProgress();
        showToast(state.theme === 'dark' ? 'Đã bật Giao diện Tối (Tactical Night).' : 'Đã chuyển sang Giao diện Sáng.');
      });

      // Desktop Font Size Cycle (S -> M -> L)
      document.getElementById('font-cycle-btn').addEventListener('click', () => {
        const order = ['sm', 'md', 'lg'];
        state.fontSize = order[(order.indexOf(state.fontSize) + 1) % order.length];
        applyThemeAndFont();
        saveProgress();
        const names = { sm: 'Nhỏ', md: 'Vừa', lg: 'Lớn' };
        showToast(`Đã đổi cỡ chữ sang: ${names[state.fontSize]}.`);
      });

      // Mobile Font Size Buttons
      document.querySelectorAll('.mobile-fsize-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.fontSize = btn.dataset.fsize;
          applyThemeAndFont();
          saveProgress();
        });
      });

      // Vocab Category Dropdown
      document.getElementById('vocab-cat-select').addEventListener('change', e => {
        state.vocabCat = e.target.value;
        state.vocabPageLimit = 24;
        state.fcIndex = 0;
        state.fcFlipped = false;
        renderVocab();
      });


      document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
      });

      // Accent & Speed switchers
      document.getElementById('accent-us-btn').addEventListener('click', () => {
        state.accent = 'en-US';
        updateVoiceButtons();
        saveProgress();
        showToast('Đã chuyển giọng đọc sang Anh - Mỹ (US).');
      });
      document.getElementById('accent-gb-btn').addEventListener('click', () => {
        state.accent = 'en-GB';
        updateVoiceButtons();
        saveProgress();
        showToast('Đã chuyển giọng đọc sang Anh - Anh (UK).');
      });
      document.getElementById('speed-cycle-btn').addEventListener('click', () => {
        state.speechRate = state.speechRate === 1.0 ? 0.75 : 1.0;
        updateVoiceButtons();
        saveProgress();
        showToast(state.speechRate === 0.75 ? 'Đã chỉnh tốc độ đọc chậm (0.75x).' : 'Đã chỉnh tốc độ đọc chuẩn (1.0x).');
      });

      // Print Cheat Sheet
      document.getElementById('open-print-sheet-btn').addEventListener('click', triggerPrintCheatSheet);

      // Overview quick starts
      document.querySelectorAll('.quickstart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const role = btn.dataset.quickstart;
          if (role === 'infodesk') {
            setTab('infodesk');
          } else if (role === 'liaison') {
            state.phraseScenario = 'vip';
            setTab('phrases');
          } else if (role === 'exhibitor') {
            state.vocabCat = 'industry';
            setTab('vocab');
          } else {
            state.vocabCat = 'cyber';
            setTab('vocab');
          }
        });
      });

      // Opening pitch TTS & Stop
      document.getElementById('speak-opening-pitch-btn').addEventListener('click', () => {
        speakText('Good morning, ladies and gentlemen. Welcome to the third Vietnam International Defence Expo 2026 at Gia Lam Airport, Hanoi. Under the theme Peace, Friendship, Cooperation for Mutual Development, we are proud to showcase modern defence technologies and foster international partnerships.');
      });
      document.getElementById('stop-opening-pitch-btn').addEventListener('click', () => {
        stopSpeaking();
        showToast('Đã dừng phát âm.');
      });

      // Reset modal (with backdrop click)
      const resetModal = document.getElementById('reset-modal');
      document.getElementById('open-reset-modal-btn').addEventListener('click', () => resetModal.classList.remove('hidden'));
      document.getElementById('cancel-reset-btn').addEventListener('click', () => resetModal.classList.add('hidden'));
      resetModal.addEventListener('click', e => { if (e.target === resetModal) resetModal.classList.add('hidden'); });
      document.getElementById('confirm-reset-btn').addEventListener('click', () => {
        state.masteredVocab = [];
        state.reviewVocab = [];
        state.bookmarkedPhrases = [];
        state.completedRoleplays = {};
        state.bestQuizScore = null;
        state.bestQuizPct = null;
        state.bestQuizDetail = null;
        state.customVocab = [];
        state.dailyProgress = { date: '', count: 0 };
        saveProgress();
        resetModal.classList.add('hidden');
        renderOverview();
        showToast('Đã đặt lại toàn bộ tiến độ học tập.', 'warn');
      });

      // Custom Glossary Modal
      const cvModal = document.getElementById('custom-vocab-modal');
      document.getElementById('open-custom-vocab-btn').addEventListener('click', () => {
        cvModal.classList.remove('hidden');
        document.getElementById('cv-en').focus();
      });
      document.getElementById('cancel-custom-vocab-btn').addEventListener('click', () => cvModal.classList.add('hidden'));
      cvModal.addEventListener('click', e => { if (e.target === cvModal) cvModal.classList.add('hidden');
          document.getElementById('field-display-modal')?.classList.add('hidden'); });
      document.getElementById('custom-vocab-form').addEventListener('submit', e => {
        e.preventDefault();
        const en = document.getElementById('cv-en').value.trim();
        const vi = document.getElementById('cv-vi').value.trim();
        if (!en || !vi) return;
        const newTerm = {
          id: 'cv_' + Date.now(),
          cat: 'custom',
          en,
          ipa: document.getElementById('cv-ipa').value.trim(),
          vi,
          exEn: document.getElementById('cv-ex-en').value.trim(),
          exVi: document.getElementById('cv-ex-vi').value.trim()
        };
        state.customVocab.unshift(newTerm);
        saveProgress();
        e.target.reset();
        cvModal.classList.add('hidden');
        state.vocabCat = 'custom';
        state.vocabMode = 'grid';
        renderVocab();
        renderOverview();
        showToast('Đã thêm thuật ngữ mới của đơn vị!', 'success');
      });

      // Vocab controls
      document.getElementById('vocab-mode-grid').addEventListener('click', () => { state.vocabMode = 'grid'; renderVocab(); });
      document.getElementById('vocab-mode-flashcard').addEventListener('click', () => { state.vocabMode = 'flashcard'; state.fcFlipped = false; renderVocab(); });
      document.getElementById('vocab-mode-listening').addEventListener('click', () => { state.vocabMode = 'listening'; setupNextListeningQuestion(); renderVocab(); });

      document.getElementById('vocab-search').addEventListener('input', e => {
        state.vocabSearch = e.target.value;
        state.vocabPageLimit = 24;
        state.fcIndex = 0;
        state.fcFlipped = false;
        renderVocab();
      });
      document.getElementById('vocab-mastery-filter').addEventListener('change', e => {
        state.vocabMasteryFilter = e.target.value;
        state.fcIndex = 0;
        state.fcFlipped = false;
        renderVocab();
      });
      document.getElementById('vocab-category-pills').addEventListener('click', e => {
        const btn = e.target.closest('[data-vcat]');
        if (!btn) return;
        state.vocabCat = btn.dataset.vcat;
        state.vocabPageLimit = 24;
        state.fcIndex = 0;
        state.fcFlipped = false;
        renderVocab();
      });
      document.getElementById('vocab-grid-container').addEventListener('click', e => {
        const delBtn = e.target.closest('[data-delete-vocab]');
        if (delBtn) { deleteCustomVocab(delBtn.dataset.deleteVocab); return; }
        const speakBtn = e.target.closest('[data-speak-vocab]');
        if (speakBtn) {
          const item = getAllVocab().find(v => v.id === speakBtn.dataset.speakVocab);
          if (item) speakText(item.en);
          return;
        }
        const masterBtn = e.target.closest('[data-master-vocab]');
        if (masterBtn) { toggleMastered(masterBtn.dataset.masterVocab); return; }
        const revBtn = e.target.closest('[data-review-vocab]');
        if (revBtn) toggleReviewVocab(revBtn.dataset.reviewVocab);
      });

      // Flashcard controls
      document.getElementById('fc-scene').addEventListener('click', e => {
        if (e.target.closest('#fc-speak-btn')) return;
        state.fcFlipped = !state.fcFlipped;
        document.getElementById('fc-inner').classList.toggle('is-flipped', state.fcFlipped);
      });
      document.getElementById('fc-speak-btn').addEventListener('click', e => {
        e.stopPropagation();
        const list = getFilteredVocab();
        if (list[state.fcIndex]) speakText(list[state.fcIndex].en);
      });
      document.getElementById('fc-prev-btn').addEventListener('click', () => {
        const list = getFilteredVocab();
        if (!list.length) return;
        state.fcIndex = (state.fcIndex - 1 + list.length) % list.length;
        state.fcFlipped = false;
        renderVocab();
      });
      document.getElementById('fc-next-btn').addEventListener('click', () => {
        const list = getFilteredVocab();
        if (!list.length) return;
        state.fcIndex = (state.fcIndex + 1) % list.length;
        state.fcFlipped = false;
        renderVocab();
      });
      document.getElementById('fc-review-btn')?.addEventListener('click', () => {
        const list = getFilteredVocab();
        if (list[state.fcIndex]) toggleReviewVocab(list[state.fcIndex].id);
      });
      document.getElementById('fc-master-btn').addEventListener('click', () => {
        const list = getFilteredVocab();
        if (list[state.fcIndex]) toggleMastered(list[state.fcIndex].id);
      });

      // Listening Drill controls
      document.getElementById('listen-play-btn').addEventListener('click', () => {
        if (state.listenItem) speakText(state.listenItem.en);
      });
      document.getElementById('listen-slow-btn').addEventListener('click', () => {
        if (state.listenItem) speakText(state.listenItem.en, 0.7);
      });
      document.getElementById('listen-options').addEventListener('click', e => {
        const btn = e.target.closest('[data-listen-opt]');
        if (!btn || state.listenAnswered) return;
        state.listenSelectedId = btn.dataset.listenOpt;
        state.listenAnswered = true;
        state.listenTotal += 1;
        if (state.listenSelectedId === state.listenItem.id) {
          state.listenCorrect += 1;
          state.listenStreak += 1;
        } else {
          state.listenStreak = 0;
        }
        renderListening();
      });
      document.getElementById('listen-next-btn').addEventListener('click', () => {
        setupNextListeningQuestion();
        if (state.listenItem) speakText(state.listenItem.en);
      });

      // Phrasebook controls
      document.getElementById('phrases-search').addEventListener('input', e => { state.phraseSearch = e.target.value; renderPhrases(); });
      document.getElementById('phrases-bookmark-filter').addEventListener('click', () => { state.phraseBookmarkOnly = !state.phraseBookmarkOnly; renderPhrases(); });
      document.getElementById('phrases-scenario-pills').addEventListener('click', e => {
        const btn = e.target.closest('[data-psc]');
        if (!btn) return;
        state.phraseScenario = btn.dataset.psc;
        renderPhrases();
      });
      document.getElementById('phrases-list-container').addEventListener('click', e => {
        const sp = e.target.closest('[data-speak-phrase]');
        if (sp) { const item = PHRASES_DATA.find(p => p.id === sp.dataset.speakPhrase); if (item) speakText(item.en); return; }
        const pr = e.target.closest('[data-practice-phrase]');
        if (pr) { const item = PHRASES_DATA.find(p => p.id === pr.dataset.practicePhrase); if (item) practicePronunciation(item.en); return; }
        const fd = e.target.closest('[data-field-phrase]');
        if (fd) { const item = PHRASES_DATA.find(p => p.id === fd.dataset.fieldPhrase); if (item) openFieldDisplay(item.en, item.vi, 'Mẫu câu Giao tiếp • VN Defence Expo 2026'); return; }
        const cp = e.target.closest('[data-copy-phrase]');
        if (cp) { const item = PHRASES_DATA.find(p => p.id === cp.dataset.copyPhrase); if (item) copyText(item.en); return; }
        const bm = e.target.closest('[data-bookmark-phrase]');
        if (bm) toggleBookmarkPhrase(bm.dataset.bookmarkPhrase);
      });

      // Roleplay controls
      document.getElementById('roleplay-scenario-cards').addEventListener('click', e => {
        const btn = e.target.closest('[data-select-rp]');
        if (btn) startRoleplay(btn.dataset.selectRp);
      });
      document.getElementById('rp-restart-btn').addEventListener('click', () => startRoleplay(state.activeRoleplayId));
      document.getElementById('rp-chat-log').addEventListener('click', e => {
        const btn = e.target.closest('[data-speak-rp]');
        if (!btn) return;
        const idx = Number(btn.dataset.speakRp);
        if (state.rpLog[idx]) speakText(state.rpLog[idx].text);
      });
      document.getElementById('rp-choices-area').addEventListener('click', e => {
        const optBtn = e.target.closest('[data-rp-opt]');
        if (optBtn) { chooseRoleplayOption(Number(optBtn.dataset.rpOpt)); return; }
        if (e.target.closest('#rp-finish-retry-btn')) startRoleplay(state.activeRoleplayId);
      });


      // Info Desk Hub Events
      document.getElementById('print-infodesk-btn').addEventListener('click', triggerPrintInfoDesk);
      document.querySelectorAll('.id-subtab').forEach(btn => {
        btn.addEventListener('click', () => {
          state.idSubTab = btn.dataset.idtab;
          renderInfoDesk();
        });
      });
      document.getElementById('id-checklist-items').addEventListener('click', e => {
        const btn = e.target.closest('[data-toggle-chk]');
        if (!btn) return;
        const id = btn.dataset.toggleChk;
        const idx = state.idChecklistDone.indexOf(id);
        if (idx >= 0) state.idChecklistDone.splice(idx, 1);
        else state.idChecklistDone.push(id);
        saveProgress();
        renderInfoDeskChecklist();
        refreshIcons();
      });
      document.getElementById('id-phrase-search').addEventListener('input', e => {
        state.idPhraseSearch = e.target.value;
        renderInfoDeskPhrases();
        refreshIcons();
      });
      document.getElementById('id-phrase-pills').addEventListener('click', e => {
        const btn = e.target.closest('[data-idcat]');
        if (!btn) return;
        state.idPhraseCat = btn.dataset.idcat;
        renderInfoDeskPhrases();
        refreshIcons();
      });
      document.getElementById('id-phrase-list').addEventListener('click', e => {
        const sp = e.target.closest('[data-speak-idphrase]');
        if (sp) {
          const item = INFODESK_PHRASES.find(p => p.id === sp.dataset.speakIdphrase);
          if (item) speakText(item.en);
          return;
        }
        const pr = e.target.closest('[data-practice-idphrase]');
        if (pr) { const item = INFODESK_PHRASES.find(p => p.id === pr.dataset.practiceIdphrase); if (item) practicePronunciation(item.en); return; }
        const fd = e.target.closest('[data-field-idphrase]');
        if (fd) { const item = INFODESK_PHRASES.find(p => p.id === fd.dataset.fieldIdphrase); if (item) openFieldDisplay(item.en, item.vi, 'Information Desk • VN Defence Expo 2026'); return; }
        const cp = e.target.closest('[data-copy-idphrase]');
        if (cp) {
          const item = INFODESK_PHRASES.find(p => p.id === cp.dataset.copyIdphrase);
          if (item) copyText(item.en);
          return;
        }
        const pn = e.target.closest('[data-pin-idphrase]');
        if (pn) {
          const id = pn.dataset.pinIdphrase;
          const idx = state.idPinnedPhrases.indexOf(id);
          if (idx >= 0) { state.idPinnedPhrases.splice(idx, 1); showToast('Đã bỏ ghim mẫu câu.'); }
          else { state.idPinnedPhrases.push(id); showToast('Đã ghim mẫu câu đầu quầy!', 'success'); }
          saveProgress(); renderInfoDeskPhrases(); refreshIcons();
        }
      });
      // Pin Info Desk Phrases
      document.getElementById('id-pin-filter-btn').addEventListener('click', () => {
        state.idPinOnly = !state.idPinOnly;
        renderInfoDeskPhrases();
        refreshIcons();
      });

      // Info Desk Hotlines & Shift Log
      document.getElementById('id-hotlines-form').addEventListener('input', e => {
        const key = e.target && e.target.dataset && e.target.dataset.hotlineKey;
        if (!key) return;
        state.idHotlines[key] = e.target.value;
        saveProgress();
      });
      document.getElementById('id-log-form').addEventListener('submit', e => {
        e.preventDefault();
        const note = document.getElementById('id-log-note').value.trim();
        if (!note) return;
        const now = new Date();
        const hhmm = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
        state.idLogs.unshift({
          id: 'log_' + Date.now(),
          type: document.getElementById('id-log-type').value,
          desk: document.getElementById('id-log-desk').value,
          note,
          time: hhmm,
          done: false
        });
        saveProgress();
        document.getElementById('id-log-note').value = '';
        renderInfoDeskLog();
        refreshIcons();
        showToast('Đã ghi vào sổ trực ca!', 'success');
      });
      document.getElementById('id-log-list').addEventListener('click', e => {
        const tg = e.target.closest('[data-toggle-log]');
        if (tg) {
          const item = state.idLogs.find(x => x.id === tg.dataset.toggleLog);
          if (item) { item.done = !item.done; saveProgress(); renderInfoDeskLog(); refreshIcons(); }
          return;
        }
        const dl = e.target.closest('[data-del-log]');
        if (dl) {
          state.idLogs = state.idLogs.filter(x => x.id !== dl.dataset.delLog);
          saveProgress(); renderInfoDeskLog(); refreshIcons();
        }
      });
      document.getElementById('id-copy-handover-btn').addEventListener('click', () => {
        const lines = ['BIÊN BẢN BÀN GIAO CA — NHÓM 3 QUẦY THÔNG TIN CHUNG (VN DEFENCE EXPO 2026)'];
        if (!state.idLogs.length) {
          lines.push('- Ca trực ổn định, chưa có sự vụ tồn đọng.');
        } else {
          state.idLogs.forEach((x, i) => {
            lines.push(`${i + 1}. [${x.time} | ${x.desk} | ${x.type}] ${x.note} (${x.done ? 'Đã xong' : 'Đang xử lý'})`);
          });
        }
        copyText(lines.join('\n'));
      });

      // Global Quick Search Modal (Button + Ctrl+K)
      const gsModal = document.getElementById('global-search-modal');
      const gsInput = document.getElementById('global-search-input');
      const openGlobalSearch = () => {
        gsModal.classList.remove('hidden');
        renderGlobalSearchResults(gsInput.value);
        setTimeout(() => gsInput.focus(), 40);
      };
      document.getElementById('open-global-search-btn').addEventListener('click', openGlobalSearch);
      document.getElementById('close-global-search-btn').addEventListener('click', () => gsModal.classList.add('hidden'));
      gsModal.addEventListener('click', e => { if (e.target === gsModal) gsModal.classList.add('hidden'); });
      gsInput.addEventListener('input', e => renderGlobalSearchResults(e.target.value));
      document.getElementById('global-search-results').addEventListener('click', e => {
        const sp = e.target.closest('[data-gs-speak]');
        if (sp) { speakText(sp.dataset.gsSpeak); return; }
        const cp = e.target.closest('[data-gs-copy]');
        if (cp) copyText(cp.dataset.gsCopy);
      });

      document.getElementById('id-sos-grid').addEventListener('click', e => {
        const fdBtn = e.target.closest('[data-field-sos]');
        if (fdBtn) { const idx = Number(fdBtn.dataset.fieldSos); if (INFODESK_SOS[idx]) openFieldDisplay(INFODESK_SOS[idx].en, INFODESK_SOS[idx].title, 'SOS Information Desk • VN Defence Expo 2026'); return; }
        const btn = e.target.closest('[data-speak-sos]');
        if (!btn) return;
        const idx = Number(btn.dataset.speakSos);
        if (INFODESK_SOS[idx]) speakText(INFODESK_SOS[idx].en);
      });
      document.getElementById('id-panel-drill').addEventListener('click', e => {
        const btn = e.target.closest('[data-launch-id-rp]');
        if (!btn) return;
        startRoleplay(btn.dataset.launchIdRp);
        setTab('roleplay');
      });

      // Reference sub-tabs
      document.querySelectorAll('.ref-subtab').forEach(btn => {
        btn.addEventListener('click', () => { state.refSubTab = btn.dataset.reftab; renderReference(); });
      });
      document.getElementById('ranks-group-filter').addEventListener('change', e => { state.rankFilter = e.target.value; renderRanks(); refreshIcons(); });
      document.getElementById('ranks-table-body').addEventListener('click', e => {
        const btn = e.target.closest('[data-speak-rank]');
        if (btn) speakText(btn.dataset.speakRank);
      });
      document.getElementById('units-group-filter').addEventListener('change', e => {
        state.unitFilter = e.target.value;
        renderUnits();
        refreshIcons();
      });
      document.getElementById('units-table-body').addEventListener('click', e => {
        const btn = e.target.closest('[data-speak-unit]');
        if (btn) speakText(btn.dataset.speakUnit);
      });
      // Expert Panel: Four No's TTS, Unit Converter & NATO Phonetic
      document.getElementById('speak-four-nos-btn').addEventListener('click', () => {
        speakText('Vietnam consistently adheres to its Four Nos defence policy: no military alliances; no siding with one country against another; no foreign military bases or using Vietnamese territory to oppose other countries; and no using force or threatening to use force in international relations.');
      });
      const bindPair = (idA, idB, factor) => {
        const a = document.getElementById(idA);
        const b = document.getElementById(idB);
        if (!a || !b) return;
        a.addEventListener('input', () => {
          const val = parseFloat(a.value);
          b.value = Number.isFinite(val) ? (val * factor).toFixed(2) : '';
        });
        b.addEventListener('input', () => {
          const val = parseFloat(b.value);
          a.value = Number.isFinite(val) ? (val / factor).toFixed(2) : '';
        });
      };
      bindPair('conv-km', 'conv-nm', 0.539957);
      bindPair('conv-kmh', 'conv-kt', 0.539957);
      bindPair('conv-m', 'conv-ft', 3.28084);
      bindPair('conv-kg', 'conv-lb', 2.20462);

      document.getElementById('nato-input').addEventListener('input', renderExpertPanel);
      document.getElementById('nato-speak-btn').addEventListener('click', () => {
        const spelled = spellNato(document.getElementById('nato-input').value);
        if (spelled) speakText(spelled.replace(/–/g, ','));
      });
      document.getElementById('nato-grid').addEventListener('click', e => {
        const btn = e.target.closest('[data-speak-nato]');
        if (btn) speakText(btn.dataset.speakNato);
      });
      // Mobile speed controls
      const mSlowBtn = document.getElementById('mobile-speed-slow-btn');
      const mNormBtn = document.getElementById('mobile-speed-normal-btn');
      if (mSlowBtn) mSlowBtn.addEventListener('click', () => {
        state.speechRate = 0.75; updateVoiceButtons(); saveProgress(); showToast('Đã chỉnh tốc độ đọc chậm (0.75x).');
      });
      if (mNormBtn) mNormBtn.addEventListener('click', () => {
        state.speechRate = 1.0; updateVoiceButtons(); saveProgress(); showToast('Đã chỉnh tốc độ đọc chuẩn (1.0x).');
      });

      // Export & Import JSON progress + custom glossary
      document.getElementById('export-progress-btn').addEventListener('click', () => {
        const payload = {
          version: 'v6',
          exportedAt: new Date().toISOString(),
          masteredVocab: state.masteredVocab,
          reviewVocab: state.reviewVocab,
          bookmarkedPhrases: state.bookmarkedPhrases,
          completedRoleplays: state.completedRoleplays,
          bestQuizScore: state.bestQuizScore,
          bestQuizPct: state.bestQuizPct,
          bestQuizDetail: state.bestQuizDetail,
          customVocab: state.customVocab,
          dailyProgress: state.dailyProgress,
          idChecklistDone: state.idChecklistDone,
          idPinnedPhrases: state.idPinnedPhrases,
          idHotlines: state.idHotlines,
          idLogs: state.idLogs,
          accent: state.accent,
          speechRate: state.speechRate,
          theme: state.theme,
          fontSize: state.fontSize
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'vn_defence_expo_2026_backup.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 500);
        showToast('Đã xuất file sao lưu tiến độ & từ đơn vị (.json)!', 'success');
      });
      const importInput = document.getElementById('import-progress-file');
      document.getElementById('import-progress-btn').addEventListener('click', () => importInput.click());
      importInput.addEventListener('change', e => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result || '{}'));
            if (Array.isArray(parsed.masteredVocab)) state.masteredVocab = parsed.masteredVocab;
            if (Array.isArray(parsed.reviewVocab)) state.reviewVocab = parsed.reviewVocab;
            if (Array.isArray(parsed.bookmarkedPhrases)) state.bookmarkedPhrases = parsed.bookmarkedPhrases;
            if (parsed.completedRoleplays && typeof parsed.completedRoleplays === 'object') state.completedRoleplays = parsed.completedRoleplays;
            if (typeof parsed.bestQuizScore === 'number') state.bestQuizScore = parsed.bestQuizScore;
            if (typeof parsed.bestQuizPct === 'number') state.bestQuizPct = parsed.bestQuizPct;
            if (typeof parsed.bestQuizDetail === 'string') state.bestQuizDetail = parsed.bestQuizDetail;
            if (Array.isArray(parsed.customVocab)) state.customVocab = parsed.customVocab;
            if (parsed.dailyProgress && typeof parsed.dailyProgress === 'object') state.dailyProgress = parsed.dailyProgress;
            if (Array.isArray(parsed.idChecklistDone)) state.idChecklistDone = parsed.idChecklistDone;
            if (Array.isArray(parsed.idPinnedPhrases)) state.idPinnedPhrases = parsed.idPinnedPhrases;
            if (parsed.idHotlines && typeof parsed.idHotlines === 'object') state.idHotlines = { ...state.idHotlines, ...parsed.idHotlines };
            if (Array.isArray(parsed.idLogs)) state.idLogs = parsed.idLogs;
            if (parsed.accent === 'en-US' || parsed.accent === 'en-GB') state.accent = parsed.accent;
            if (parsed.speechRate === 0.75 || parsed.speechRate === 1.0) state.speechRate = parsed.speechRate;
            if (parsed.theme === 'dark' || parsed.theme === 'light') state.theme = parsed.theme;
            if (parsed.fontSize === 'sm' || parsed.fontSize === 'md' || parsed.fontSize === 'lg') state.fontSize = parsed.fontSize;
            saveProgress();
            applyThemeAndFont();
            updateVoiceButtons();
            renderOverview();
            renderVocab();
            renderPhrases();
            renderRoleplay();
            renderInfoDesk();
            renderReference();
            showToast('Đã khôi phục toàn bộ dữ liệu học tập & Quầy Thông tin thành công!', 'success');
          } catch (err) {
            showToast('File JSON không hợp lệ, vui lòng kiểm tra lại.', 'warn');
          }
          importInput.value = '';
        };
        reader.readAsText(file);
      });

      // Vocab Load More + Flashcard Shuffle & Reverse
      document.getElementById('vocab-loadmore-btn').addEventListener('click', () => {
        state.vocabPageLimit += 24;
        renderVocab();
      });
      document.getElementById('fc-shuffle-btn').addEventListener('click', () => {
        state.fcShuffledIds = shuffleArray(getAllVocab().map(v => v.id));
        state.fcIndex = 0;
        state.fcFlipped = false;
        renderVocab();
        showToast('Đã trộn ngẫu nhiên thứ tự thẻ Flashcard!', 'success');
      });
      document.getElementById('fc-reverse-btn').addEventListener('click', () => {
        state.fcReversed = !state.fcReversed;
        state.fcFlipped = false;
        renderVocab();
        showToast(state.fcReversed ? 'Đã chuyển sang chế độ Việt → Anh!' : 'Đã chuyển sang chế độ Anh → Việt.');
      });

      // Quiz length buttons
      document.querySelectorAll('.qlen-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.quizLength = Number(btn.dataset.qlen);
          initQuiz();
          renderQuiz();
          showToast(`Đã tạo đề kiểm tra ngẫu nhiên ${state.quizLength} câu.`);
        });
      });

      // Mach & Military Time (GMT+7 <-> Zulu UTC)
      bindPair('conv-mach', 'conv-mach-kmh', 1234.8);
      const milInput = document.getElementById('mil-time-input');
      const milOut = document.getElementById('mil-time-output');
      const updateMilTime = () => {
        if (!milInput || !milOut || !milInput.value) return;
        const [hh, mm] = milInput.value.split(':').map(Number);
        if (!Number.isFinite(hh) || !Number.isFinite(mm)) return;
        const zH = (hh - 7 + 24) % 24;
        const localStr = String(hh).padStart(2, '0') + String(mm).padStart(2, '0');
        const zuluStr = String(zH).padStart(2, '0') + String(mm).padStart(2, '0');
        const dayShift = hh < 7 ? ', hôm trước D-1' : '';
        milOut.textContent = `${localStr} hrs (GMT+7) = ${zuluStr}Z (UTC${dayShift})`;
      };
      if (milInput) {
        milInput.addEventListener('input', updateMilTime);
        updateMilTime();
      }


      document.getElementById('acronyms-search').addEventListener('input', e => { state.acronymSearch = e.target.value; renderAcronyms(); refreshIcons(); });
      document.getElementById('acronyms-grid').addEventListener('click', e => {
        const btn = e.target.closest('[data-speak-acronym]');
        if (btn) speakText(btn.dataset.speakAcronym);
      });

      // Quiz controls
      document.getElementById('quiz-card').addEventListener('click', e => {
        const optBtn = e.target.closest('[data-quiz-opt]');
        if (optBtn && !state.quizAnswered) {
          const idx = Number(optBtn.dataset.quizOpt);
          const current = state.quizPool[state.quizIndex];
          state.quizSelected = idx;
          state.quizAnswered = true;
          if (idx === current.ans) {
            state.quizScore += 1;
          } else {
            state.quizWrongList.push(current.raw);
          }
          renderQuiz();
          return;
        }
        if (e.target.closest('#quiz-next-btn')) {
          if (state.quizIndex < state.quizPool.length - 1) {
            state.quizIndex += 1;
            state.quizAnswered = false;
            state.quizSelected = null;
          } else {
            state.quizFinished = true;
            const totalQ = state.quizPool.length || 1;
            const pct = Math.round((state.quizScore / totalQ) * 100);
            if (!state.quizReviewMode && (state.bestQuizPct === null || pct > state.bestQuizPct || (pct === state.bestQuizPct && state.quizScore > (state.bestQuizScore || 0)))) {
              state.bestQuizScore = state.quizScore;
              state.bestQuizPct = pct;
              state.bestQuizDetail = `${state.quizScore} / ${totalQ} (${pct}%)`;
              saveProgress();
              renderOverview();
            }
          }
          renderQuiz();
          return;
        }
        if (e.target.closest('#quiz-review-wrong-btn')) {
          initQuiz(state.quizWrongList);
          renderQuiz();
          return;
        }
        if (e.target.closest('#quiz-retry-btn')) {
          initQuiz();
          renderQuiz();
        }
      });

      // Global Keyboard Shortcuts (Escape for modals, Space/Arrows/S for Flashcard)
      document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          openGlobalSearch();
          return;
        }
        if (e.key === 'Escape') {
          resetModal.classList.add('hidden');
          cvModal.classList.add('hidden');
          gsModal.classList.add('hidden');
          return;
        }
        const tag = (e.target && e.target.tagName) || '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        if (state.activeTab === 'vocab' && state.vocabMode === 'flashcard') {
          const list = getFilteredVocab();
          if (!list.length) return;
          if (e.code === 'Space') {
            e.preventDefault();
            state.fcFlipped = !state.fcFlipped;
            document.getElementById('fc-inner').classList.toggle('is-flipped', state.fcFlipped);
          } else if (e.key === 'ArrowRight') {
            state.fcIndex = (state.fcIndex + 1) % list.length;
            state.fcFlipped = false;
            renderVocab();
          } else if (e.key === 'ArrowLeft') {
            state.fcIndex = (state.fcIndex - 1 + list.length) % list.length;
            state.fcFlipped = false;
            renderVocab();
          } else if (e.key.toLowerCase() === 's') {
            speakText(list[state.fcIndex].en);
          }
        }
      });
    }

    /* ===================== INIT ===================== */
    window.addEventListener('DOMContentLoaded', () => {
      loadProgress();
      applyThemeAndFont();
      updateVoiceButtons();
      bindEvents();
      // Field Display Card modal controls
      const fdModal = document.getElementById('field-display-modal');
      document.getElementById('close-field-display-btn')?.addEventListener('click', () => fdModal?.classList.add('hidden'));
      fdModal?.addEventListener('click', e => { if (e.target === fdModal) fdModal.classList.add('hidden'); });
      document.getElementById('field-display-speak-btn')?.addEventListener('click', () => speakText(activeFieldDisplayText, 1.0));
      document.getElementById('field-display-slow-btn')?.addEventListener('click', () => speakText(activeFieldDisplayText, 0.75));
      setTab('overview');
      // Register Offline PWA Service Worker (works on GitHub Pages HTTPS & localhost)
      if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      }
    });
