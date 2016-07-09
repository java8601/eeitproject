package com.CRFitness.PersonalJournal.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.util.List;

import javax.annotation.Resource;
import javax.annotation.Resources;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.CRFitness.Member.model.MemberVO;
import com.CRFitness.PersonalJournal.model.CommonJournalService;
import com.CRFitness.PersonalJournal.model.PersonalJournalService;
import com.CRFitness.PersonalJournal.model.PersonalJournalVO;

@Controller
@RequestMapping("/personalJournalController")
public class PersonalJournalController {
	@Resource(name="personalJournalService")
	private PersonalJournalService personalJournalService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/showJournal", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody List<PersonalJournalVO> getJournal(@RequestParam String member_Id) {
		if(member_Id != null && member_Id.trim().length() != 0){
			return personalJournalService.showJournal(member_Id);
		}else{
			return null;
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/insertJournal", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody PersonalJournalVO insertPersonalJournal(
			@RequestParam String member_Id,
			@RequestParam MultipartFile archives,
			@RequestParam String contents,
			@RequestParam Timestamp publishTime,
			@RequestParam Integer publicStatus
			) {
		try {
			//改編碼 iso-8859-1 -> utf-8
			contents = new String(contents.getBytes("iso-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return personalJournalService.insertPersonalJournal(member_Id,archives,contents,publishTime,publicStatus);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/updateJournal", produces = MediaType.APPLICATION_JSON)
	public @ResponseBody boolean updatePersonalJournal(
			@RequestParam String journal_Id,
			@RequestParam String contents,
			@RequestParam Integer publicStatus
			){
//		System.out.println(journal_Id+","+contents+","+publicStatus);
		return personalJournalService.updatePersonalJournal(journal_Id, contents, publicStatus);
	}

}

