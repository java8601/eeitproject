package com.CRFitness.Friendships.model;

import java.util.List;

import com.CRFitness.Member.model.MemberVO;

public interface FriendshipsDAO_interface {

    public boolean insert(FriendshipsVO friendshipsVO);
    public boolean update(FriendshipsVO friendshipsVO);
    public boolean delete(String member_Id,String friend_Id); 
    public List<MemberVO> select_Friends(String member_Id);
    public List<FriendshipsVO> getAll();

}
